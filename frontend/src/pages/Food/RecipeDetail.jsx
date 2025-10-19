import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Authentication";
import Header from "../../Components/Header";
import NavBar from "../../Components/Header/NavBar";
import SearchForm from "../../Components/Header/SearchForm";
import Footer from "../../Components/Footer";
import RecipeRating from "../../Components/Rate";

export default function RecipeDetail() {
  // permettra d'afficher la recette en fonction de l'id présent dans l'URL
  const { recipeId } = useParams();

  // permet de stocker la recette récupérée depuis l'API
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/recipes/${recipeId}`);
        const data = await response.json();

        setRecipe(data);
      } catch (error) {
        console.error("Erreur chargement recette :", error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  // Récupération des données utilisateur depuis le contexte d'authentification
  // Cela permet d'afficher la note de l'utilisateur pour la recette
  const { userData } = useContext(AuthContext);

  return (
    <>
      {/* Helmet gère le contenu de la balise head, ici le titre ainsi que nos meta données afin d'améliorer le référencement (SEO)*/}
      {recipe && (
        <Helmet>
          {/* String convertis en chaîne de caractères pour éviter les erreurs de type */}
          <title>{String(recipe.title) + " - Ciné-Délices"}</title>
          <meta
            name="description"
            //On affiche une partie de la description de la recette pour le référencement
            content={recipe.description?.slice(0, 150) + "..."}
          />
        </Helmet>
)}

      {/* contenu de nos pages de navigation principales */}
      <Header>
        <NavBar />
        <SearchForm />
      </Header>

      {/* contenu principal de notre page */}
      <main className="main">
        {/* On vérifie si la recette existe avant de l'afficher */}
        {recipe && (
          <section className="recipe">
            <article className="recipe__item" aria-labelledby="recipe-title">
              <h1 className="recipe__title" id="recipe-title">
                {recipe.title}
              </h1>
              <img
                className="recipe__image"
                src={recipe.picture}
                alt={recipe.title}
              />
              <p className="recipe__description">{recipe.description}</p>
            </article>

            {/* Informations pratiques */}
            <article className="recipe__item" aria-labelledby="recipe-infos">
              <h2 className="recipe__subtitle" id="recipe-infos">
                Informations :
              </h2>
              <ul className="recipe__infos__list">
                <li className="recipe__info">
                  Nombres de parts : {recipe.servings}
                </li>
                <li className="recipe__info">
                  Temps de préparation : {recipe.preparation_time}
                </li>
                <li className="recipe__info">
                  Temps de cuisson : {recipe.cook_time}
                </li>
                <li className="recipe__info">Budget : {recipe.budget}</li>
                <li className="recipe__info">Difficulté : {recipe.difficulty}</li>
              </ul>
            </article>

            {/* Ingrédients */}
            <article
              className="recipe__item"
              aria-labelledby="recipe-ingredients"
            >
              <h2 className="recipe__subtitle" id="recipe-ingredients">
                Ingrédients :
              </h2>
              <ul className="recipe__ingredients__list">
                {/* parcourt du tableau ingrédients afin de récupérer tout le contenu de mon tableau d'objet*/}
                {/* Le ?. (opérateur optionnel de chaînage) garantit que React ne tentera pas .map() si recipe.ingredients n'existe pas encore */}
                {recipe?.ingredients?.map((ingredient, index) => (
                  // utilisation d'une clé unique pour pouvoir faire appel à tous les ingrédients
                  <li className="recipe__ingredient" key={index}>
                    {/* appel à la valeur de la clé unique pour afficher tous les ingrédients */}
                    {ingredient}
                  </li>
                ))}
              </ul>
            </article>

            {/* Étapes de préparation */}
            <article className="recipe__steps" aria-labelledby="recipe-steps">
              <h2 className="recipe__subtitle" id="recipe-steps">
                Étapes de préparation :
              </h2>
              <ol className="recipe__steps__list">
                {/* parcourt du tableau steps afin de récupérer tout le contenu de mon tableau d'objet*/}
                {recipe.steps?.map((step) => (
                  // utilisation d'une clé unique pour pouvoir faire appel à chaque étape
                  <li className="recipe__step" key={step.number}>
                    {/* appel à la valeur de la clé unique pour afficher toutes les étapes de préparation */}
                    {step.description}
                  </li>
                ))}
              </ol>
            </article>

            {/* Anecdote */}
            <article
              className="recipe__anecdote"
              aria-labelledby="recipe-anecdote"
            >
              <h2 className="recipe__subtitle" id="recipe-anecdote">
                Anecdote :
              </h2>
              <p className="recipe__anecdote__text">{recipe.story}</p>
            </article>

            <article className="recipe__item recipe__rating" aria-labelledby="recipe-rating">
              <h2 className="recipe__subtitle" id="recipe-rating">
                Votre avis :
              </h2>
              {/* Composant pour afficher la note de la recette */}
              {/* On passe l'ID de la recette et l'ID de l'utilisateur pour pouvoir gérer les notes */}
              <RecipeRating userId={userData?.id} />
            </article>
          </section>
          )}
      </main>

      {/* contenu de nos pages de navigation secondaires */}
      <Footer />
    </>
  );
}
