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
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  const [budget, setBudget] = useState("");
  const [servings, setServings] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [step, setStep] = useState("");
  const [story, setStory] = useState("");
  const [picture, setPicture] = useState("");

  // soumission de notre formulaire
  const handleSubmit = (e) => {
    // empêche le rechargement de la page
    e.preventDefault();
    // test pour s'assurer qu'on récupère bien nos variables d'état au submit
    alert(`Submitted ${title} ${description}`);
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
          >
            <label htmlFor="title" className="form__label">
              Titre de la recette
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
            <label htmlFor="description" className="form__label">
              Description
              <textarea
                className="form__textarea"
                id="description"
                name="description"
                // valeur de notre input
                value={description}
                // mise à jour de l'état à chaque changement
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            {/* Informations générales */}
            <label htmlFor="type" className="form__label">
              Type de plat
              <input
                className="form__input"
                type="text"
                id="type"
                name="type"
                aria-required="true"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </label>
            <label htmlFor="level" className="form__label">
              Niveau de difficulté
              <input
                className="form__input"
                type="text"
                id="level"
                name="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              />
            </label>
            <label htmlFor="budget" className="form__label">
              Budget
              <input
                className="form__input"
                type="text"
                id="budget"
                name="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </label>
            <label htmlFor="servings" className="form__label">
              Nombre de personnes
              <input
                className="form__input"
                type="text"
                id="servings"
                name="servings"
                aria-required="true"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
              />
            </label>
            <label htmlFor="preparation-time" className="form__label">
              Temps de préparation
              <input
                className="form__input"
                type="text"
                id="preparation-time"
                name="preparation-time"
                aria-required="true"
                value={preparationTime}
                onChange={(e) => setPreparationTime(e.target.value)}
              />
            </label>
            <label htmlFor="cooking-time" className="form__label">
              Temps de cuisson
              <input
                className="form__input"
                type="text"
                id="cooking-time"
                name="cooking-time"
                aria-required="true"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
              />
            </label>
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
