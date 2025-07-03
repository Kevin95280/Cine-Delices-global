import { Helmet } from "react-helmet";
import { useState } from "react";
import Header from "../../Components/Header";
import NavBar from "../../Components/Header/NavBar";
import SearchForm from "../../Components/Header/SearchForm";
import Footer from "../../Components/Footer";

export default function AddRecipe() {
  // déclarations des états pour chaque champ du formulaire (valeur et fonction)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [budget, setBudget] = useState("");
  const [servings, setServings] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [step, setStep] = useState("");
  const [story, setStory] = useState("");
  const [picture, setPicture] = useState("");

  // soumission de notre formulaire
  const handleSubmit = async (e) => {
    // empêche le rechargement de la page
    e.preventDefault();

    const recipeData = {
    title,
    description,
    category,
    difficulty,
    budget,
    servings: parseInt(servings, 10),
    preparation_time: parseInt(preparationTime, 10),
    cook_time: parseInt(cookingTime, 10),
    ingredient,
    step,
    story,
    picture,
    user_id,
    movie_id,
  };

    try {
    const response = await fetch("http://localhost:3000/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(recipeData)
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l’ajout de la recette");
    }

    const result = await response.json();
    console.log("Recette ajoutée :", result);
    alert("Recette enregistrée avec succès !");
  } catch (error) {
    console.error("Erreur :", error);
    alert("Échec de la soumission");
  }
};

  // test boutton
  const AddIngredient = () => {
    alert("Ingrédient ajouté");
  };

  const AddStep = () => {
    alert("Etape ajoutée");
  };

  return (
    <>
      {/* Helmet gère le contenu de la balise head, ici le titre ainsi que nos meta données afin d'améliorer le référencement (SEO)*/}
      <Helmet>
        <title>Recipes - Ciné-Délices</title>
        <meta
          name="description"
          content="Partagez les recettes de votre choix inspirées du cinéma sur notre site ciné-délices"
        />
      </Helmet>

      {/* contenu de nos pages de navigation principales */}
      <Header>
        <NavBar />
        <SearchForm />
      </Header>

      {/* contenu principal de notre page */}
      <main className="main">
        <section className="form-recipe">
          <h1 className="form__title">Formulaire de publication recette :</h1>
          <form
            className="form__container"
            // utilisation de la méthode POST pour demander une réponse à notre serveur
            method="POST"
            // fonction executée pour soummettre le formulaire lorsque l'utilisateur clique sur le bouton envoyer ou appuie sur la touche Entrée
            onSubmit={handleSubmit}
            aria-label="Formulaire de publication de recette"
          >
            {/* Titre */}
            <fieldset className="form__group" aria-labelledby="legend-titre">
              <legend id="legend-titre">Titre de la recette</legend>
              <label htmlFor="title" className="form__label">
                <span className="sr-only">Titre</span>
                <input
                  className="form__input"
                  type="text"
                  id="title"
                  name="title"
                  aria-required="true"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
            </fieldset>

             {/* Description */}
            <fieldset className="form__group" aria-labelledby="legend-description">
              <legend id="legend-description">Description</legend>
              <label htmlFor="description" className="form__label">
                <textarea
                  className="form__textarea"
                  id="description"
                  name="description"
                  aria-required="true"
                  // valeur de notre input
                  value={description}
                  // mise à jour de l'état à chaque changement
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </fieldset>

            {/* Catégories */}
            <fieldset className="form__group" aria-labelledby="legend-category">
              <legend id="legend-category">Catégorie</legend>
              <label htmlFor="category" className="form__label">
              <select
                className="form__select"
                type="text"
                id="category"
                name="category"
                aria-required="true"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" disabled>Sélectionnez une option</option>
                <option value="starter">Entrées</option>
                <option value="main-course">Plats</option>
                <option value="dessert">Desserts</option>
              </select>
            </label>
            </fieldset>

            {/* Difficulté, budget, portions */}
            <fieldset className="form__group triple-col">
              <div>
            <label htmlFor="difficulty" className="form__label">Difficulté</label>
              <select
                id="difficulty"
                name="difficulty"
                aria-required="true"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="" disabled>Sélectionnez une option</option>
                <option value="easy">Facile</option>
                <option value="medium">Moyen</option>
                <option value="hard">Difficile</option>
              </select>
            <label htmlFor="budget" className="form__label">Budget</label>
              <select
                id="budget"
                name="budget"
                aria-required="true"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="" disabled>Sélectionnez une option</option>
                <option value="cheap">Bon marché</option>
                <option value="moderate">Budget moyen</option>
                <option value="expensive">Assez cher</option>
              </select>
            <label htmlFor="servings" className="form__label">Nombre de parts</label>
              <input
                id="servings"
                name="servings"
                type="number"
                min={1}
                aria-required="true"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
              />
              </div>
              </fieldset>

            {/* Temps de préparation */}
            <fieldset className="form__group" aria-labelledby="legend-preparation_time">
              <legend id="legend-preparation_time">Temps de préparation</legend>
            <label htmlFor="preparation_time" className="form__label">
              <input
                className="form__input"
                id="preparation_time"
                name="preparation_time"
                type="number"
                aria-required="true"
                value={preparationTime}
                onChange={(e) => setPreparationTime(e.target.value)}
              />
              </label>
              </fieldset>

            {/* Temps de cuisson */}
              <fieldset className="form__group" aria-labelledby="legend-cooking_time">
              <legend id="legend-cooking_time">Temps de cuisson</legend>
            <label htmlFor="cooking_time" className="form__label">
              <input
                className="form__input"
                type="number"
                id="cooking_time"
                name="cooking_time"
                aria-required="true"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
              />
            </label>
            </fieldset>

            {/* Ingrédients */}
            <label htmlFor="ingredient-1" className="form__label">
              Ingrédient
              <input
                className="form__input"
                type="text"
                id="ingredient-1"
                name="ingredient-1"
                aria-required="true"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
              />
            </label>
            <button
              type="button"
              className="form__button"
              onClick={AddIngredient}
            >
              Ajouter un ingrédient
            </button>
            {/* Étapes de préparation*/}
            <label htmlFor="step-1" className="form__label">
              Étape
              <input
                className="form__input"
                type="text"
                id="step-1"
                name="step-1"
                aria-required="true"
                value={step}
                onChange={(e) => setStep(e.target.value)}
              />
            </label>
            <button type="button" className="form__button" onClick={AddStep}>
              Ajouter une étape
            </button>
            {/* Anecdote */}
            <label htmlFor="story" className="form__label">
              Anecdote
              <textarea
                className="form__textarea"
                id="story"
                name="story"
                value={story}
                onChange={(e) => setStory(e.target.value)}
              />
            </label>
            <div className="form__picture">
              <label htmlFor="picture" className="form__label">
                Photo de la recette
              </label>
              <input
                className="form__input"
                type="file"
                id="picture"
                name="picture"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
              />
              {/* Soumission du formulaire */}
              <button type="submit" className="form__button">
                Envoyer
              </button>
            </div>
          </form>
        </section>
      </main>
      {/* contenu de nos pages de navigation secondaires */}
      <Footer />
    </>
  );
}
