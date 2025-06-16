import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Recipes() {
  // permettra d'afficher la recette en fonction de l'id présent dans l'URL
  const { recipeId } = useParams();
  // déclaration d'une constante qui renvoie un tableau d'objet afin de simuler la BDD, ces informations seront récupéré plus tard via notre API
  const recipe = {
    id: 1,
    title: "Escalope de dinde à la feta et tomates cerise",
    image: "escalope-de-dinde-à-la-feta.jpg",
    description: `Un plat à la fois léger, savoureux et plein de soleil ! Les
              escalopes de dinde, tendres et dorées sont accompagnées de tomates
              cerises juteuses rôties au four et de morceaux de feta fondants.
              Le tout est relevé d'un filet d'huile d'olive, d'herbes
              méditerranéennes et d'un soupçon d'ail pour exhaler les saveurs.
              C'est une recette simple, rapide et colorée, idéale pour un
              déjeuner en semaine ou un dîner léger, servie avec une salade
              croquante ou un peu de riz.`,
    people: "2 personnes",
    preparationTime: "15 minutes",
    cookingTime: "20 minutes",
    budget: "bon marché",
    difficulty: "facile",
    ingredients: [
      "15 tomates",
      "Thym et herbes de Provence",
      "2 escalopes de dinde bien fines",
      "½ bloc de feta (200g environ)",
      "Huile d'olive",
    ],
    steps: [
      "Couper la feta dans la longueur, en fines tranches.",
      "Faites cuire légèrement les escalopes dans une poêle.",
      `Pendant ce temps, mettez les tomates cerises au four, arrosez-les d'huile d'olive et faites-les cuire à feu doux pendant une quinzaine de minutes.`,
      `Dans un plat de service qui va au four, disposez les escalopes, en les séparant chaque fois d'une belle tranche defeta.`,
      `Arrosez d'huile d'olive, d'herbes de Provence et versez également les tomates cerises cuites.`,
      `Passez au four moyen (préchauffé à thermostat 6/180°C) environ 20 mn avant de passer à table.`,
      `Servez avec des petites pommes de terre ou des croquettes.`,
    ],
    anecdote: `On raconte qu'un cuisinier pressé aurait renversé par mégarde des tomates cerises et de la feta sur des escalopes de dinde... Il a enfourné le tout pour ne rien gâcher et a créé une recette adorée depuis !`,
  };

  return (
    <>
      {/* Helmet gère le contenu de la balise head, ici le titre ainsi que nos meta données afin d'améliorer le référencement (SEO)*/}
      <Helmet>
        <title>Recipe detail - Ciné-Délices</title>
        <meta
          name="description"
          content="Découvrez notre recette d'escalope de dinde à la feta et tomates cerise, un plat léger et savoureux."
        />
      </Helmet>

      {/* contenu de nos pages de navigation principales */}
      <Header />

      {/* contenu principal de notre page */}
      <main className="main">
        <section className="recipe">
          <article className="recipe__item" aria-labelledby="recipe-title">
            <h1 className="recipe__title" id="recipe-title">
              {recipe.title}
            </h1>
            <img
              className="recipe__image"
              src={recipe.image}
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
                Nombres de parts : {recipe.people}
              </li>
              <li className="recipe__info">
                Temps de préparation : {recipe.preparationTime}
              </li>
              <li className="recipe__info">
                Temps de cuisson : {recipe.cookingTime}
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
              {recipe.ingredients.map((index) => (
                // utilisation d'une clé unique pour pouvoir faire appel à tous les ingrédients
                <li className="recipe__ingredient" key={index}>
                  {/* appel à la valeur de la clé unique pour afficher tous les ingrédients */}
                  {index}
                </li>
              ))}
            </ul>
          </article>

          {/* Étapes de préparation */}
          <article className="recipe__steps" aria-labelledby="recipe-steps">
            <h2 className="recipe__subtitle" id="recipe-steps">
              Préparation :
            </h2>
            <ol className="recipe__steps__list">
              {/* parcourt du tableau steps afin de récupérer tout le contenu de mon tableau d'objet*/}
              {recipe.steps.map((index) => (
                // utilisation d'une clé unique pour pouvoir faire appel à chaque les ingrédients
                <li className="recipe__ingredient" key={index}>
                  {/* appel à la valeur de la clé unique pour afficher toutes les étapes de préparation */}
                  {index}
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
            <p className="recipe__anecdote__text">{recipe.anecdote}</p>
          </article>
        </section>
      </main>

      {/* contenu de nos pages de navigation secondaires */}
      <Footer />
    </>
  );
}
