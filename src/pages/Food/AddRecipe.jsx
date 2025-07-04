import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
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
const [servings, setServings] = useState(0);
const [preparationTime, setPreparationTime] = useState(0);
const [cookingTime, setCookingTime] = useState(0);
const [ingredients, setIngredients] = useState([""]);
const [steps, setSteps] = useState([""]);
const [story, setStory] = useState("");
const [picture, setPicture] = useState(null);
const [userId, setUserId] = useState(1);
const [movieId, setMovieId] = useState(null);
// Recherche côté utilisateur (autocomplétion)
const [movieSearch, setMovieSearch] = useState("");
const [movieSuggestions, setMovieSuggestions] = useState([]);
const [showMovieList, setShowMovieList] = useState(false);

const handleIngredientChange = (index, value) => {
  const updated = [...ingredients];
  updated[index] = value;
  setIngredients(updated);
};

const handleStepChange = (index, value) => {
  const updated = [...steps];
  updated[index] = value;
  setSteps(updated);
};

const addIngredient = () => {
  setIngredients([...ingredients, ""]);
};

const addStep = () => {
  setSteps([...steps, ""]);
};


// Chargement suggestions dès que l'utilisateur tape (à partir de 2 lettres)
useEffect(() => {
  if (movieSearch.length < 2) {
    setMovieSuggestions([]);
    return;
  }

  const fetchSuggestions = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/movies?search=${encodeURIComponent(movieSearch)}`);
      console.log(response);

      if (!response.ok) {
  throw new Error(`Erreur HTTP ${response.status}`);
}
      
      const data = await response.json();
      setMovieSuggestions(data);
    } catch (err) {
      console.error("Erreur suggestions films :", err);
    }
  };

  fetchSuggestions();
}, [movieSearch]);


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
ingredients,
steps,
story,
user_id: userId,
movie_id: parseInt(movieId, 10),
picture,
};

console.log("📦 Données envoyées :", recipeData);

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
  {/* Helmet gère le contenu de la balise head, ici le titre ainsi que nos meta données afin d'améliorer le
  référencement (SEO)*/}
  <Helmet>
    <title>Recipes - Ciné-Délices</title>
    <meta name="description"
      content="Partagez les recettes de votre choix inspirées du cinéma sur notre site ciné-délices" />
  </Helmet>

  {/* contenu de nos pages de navigation principales */}
  <Header>
    <NavBar />
    <SearchForm />
  </Header>

  {/* contenu principal de notre page */}
  <main className="main">
    <section className="form-recipe">
      <form className="form__container"
        // utilisation de la méthode POST pour demander une réponse à notre serveur
        method="POST" 
        // fonction executée pour soummettre le formulaire lorsque l'utilisateur clique sur le bouton envoyer ou appuie sur la touche Entrée 
        onSubmit={handleSubmit}
        aria-label="Formulaire de publication de recette">
        <h1 className="form__title">Formulaire de publication recette :</h1>

        {/* Titre */}
        <fieldset className="form__group" aria-labelledby="legend-titre">
          <legend id="legend-titre">Titre de la recette</legend>
          <label htmlFor="title" className="form__label">
            <span className="sr-only">Titre</span>
            <input
            value={title}
            className="form__input" 
            type="text" id="title" 
            name="title" 
            aria-required="true" 
            onChange={(e)=> setTitle(e.target.value)}
            />
          </label>
        </fieldset>

        {/* Description */}
        <fieldset className="form__group" aria-labelledby="legend-description">
          <legend id="legend-description">Description</legend>
          <label htmlFor="description" className="form__label">
            <textarea
            value={description}
            className="form__textarea" 
            id="description" 
            name="description" 
            aria-required="true"
            // mise à jour de l'état à chaque changement
            onChange={(e)=> setDescription(e.target.value)}
            />
            </label>
        </fieldset>

            {/* Catégories */}
            <fieldset className="form__group" aria-labelledby="legend-category">
              <legend id="legend-category">Catégorie</legend>
              <label htmlFor="category" className="form__label">
              <select
                value={category}
                className="form__select"
                type="text"
                id="category"
                name="category"
                aria-required="true"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value=""hidden>Sélectionnez une option</option>
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
                    value={difficulty}
                    id="difficulty"
                    name="difficulty"
                    aria-required="true"
                    onChange={(e) => setDifficulty(e.target.value)}
                    >
                    <option value=""hidden>Sélectionnez une option</option>
                    <option value="easy">Facile</option>
                    <option value="medium">Moyen</option>
                    <option value="hard">Difficile</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="form__label">Budget</label>
                    <select
                      value={budget}
                      id="budget"
                      name="budget"
                      aria-required="true"
                      onChange={(e) => setBudget(e.target.value)}
                    >
                      <option value=""hidden>Sélectionnez une option</option>
                      <option value="cheap">Bon marché</option>
                      <option value="moderate">Budget moyen</option>
                      <option value="expensive">Assez cher</option>
                    </select>
                </div>


                <div>
                  <label htmlFor="servings" className="form__label">Nombre de parts</label>
                    <input
                      value={servings}
                      className="form__input"
                      id="servings"
                      name="servings"
                      type="number"
                      aria-required="true"
                      onChange={(e) => setServings(e.target.value)}
                    />
                </div>
              </fieldset>

            {/* Temps de préparation */}
            <fieldset className="form__group" aria-labelledby="legend-preparation_time">
              <legend id="legend-preparation_time">Temps de préparation</legend>
              <label htmlFor="preparation_time" className="form__label">
              <input
                value={preparationTime}
                className="form__input"
                id="preparation_time"
                name="preparation_time"
                type="number"
                aria-required="true"
                onChange={(e) => setPreparationTime(e.target.value)}
              />
              </label>
              </fieldset>

            {/* Temps de cuisson */}
            <fieldset className="form__group" aria-labelledby="legend-cooking_time">
              <legend id="legend-cooking_time">Temps de cuisson</legend>
              <label htmlFor="cooking_time" className="form__label">
              <input
                  value={cookingTime}
                  className="form__input"
                  type="number"
                  id="cooking_time"
                  name="cooking_time"
                  aria-required="true"
                  onChange={(e) => setCookingTime(e.target.value)}
              />
              </label>
            </fieldset>

            {/* Ingrédients */}
            <fieldset className="form__group" aria-labelledby="legend-ingredients">
              <legend id="legend-ingredients">Ingrédients</legend>
              {ingredients.map((value, index) => (
                <label key={index} className="form__label" htmlFor={`ingredient-${index}`}>
                  <span className="visually-hidden">Ingrédient {index + 1}</span>
                  <input
                    type="text"
                    id={`ingredient-${index}`}
                    name={`ingredient-${index}`}
                    className="form__input"
                    value={value}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                    aria-label={`Ingrédient ${index + 1}`}
                  />
                </label>
              ))}
              <button
                type="button"
                onClick={addIngredient}
                className="form__button"
                aria-label="Ajouter un ingrédient"
              >
                + Ajouter un ingrédient
              </button>
            </fieldset>

            {/* Étapes de préparation*/}
            <fieldset className="form__group" aria-labelledby="legend-steps">
              <legend id="legend-steps">Étapes de préparation</legend>
              {steps.map((value, index) => (
                <label key={index} className="form__label" htmlFor={`step-${index}`}>
                  <span className="visually-hidden">Étape {index + 1}</span>
                  <input
                    id={`step-${index}`}
                    name={`step-${index}`}
                    className="form__input"
                    value={value}
                    onChange={(e) => handleStepChange(index, e.target.value)}
                    aria-label={`Étape ${index + 1}`}
                  />
                </label>
              ))}
              <button
                type="button"
                onClick={addStep}
                className="form__button"
                aria-label="Ajouter une étape de préparation"
              >
                + Ajouter une étape
              </button>
            </fieldset>

            {/* Anecdote */}
            <fieldset className="form__group" aria-labelledby="legend-story">
              <legend id="legend-story">Anecdote</legend>
              <label htmlFor="story" className="form__label">
                <textarea
                  value={story}
                  className="form__textarea"
                  id="story"
                  name="story"
                  onChange={(e) => setStory(e.target.value)}
                />
              </label>
            </fieldset>

            {/* Id de l'utilisateur */}
            <fieldset className="form__group" aria-labelledby="legend-user">
              <legend id="legend-user">Auteur de la recette</legend>
              <label htmlFor="user-id" className="form__label">
                Identifiant utilisateur (automatique ou manuel)
              </label>
              <input
                type="number"
                id="user-id"
                name="user-id"
                className="form__input"
                value={userId}
                onChange={(e) => setUserId(parseInt(e.target.value, 10))}
                aria-required="true"
                min={1}
              />
            </fieldset>

            {/* Film associé à votre recette */}
            <fieldset className="form__group" aria-labelledby="legend-movie">
              <legend id="legend-movie">Film associé à la recette</legend>
              <label htmlFor="movie" className="form__label">
                <input
                  className="form__input"
                  type="text"
                  id="movie"
                  name="movie"
                  value={movieSearch}
                  placeholder="Rechercher un film..."
                  onChange={(e) => {
                    setMovieSearch(e.target.value);
                    setShowMovieList(true);
                  }}
                  autoComplete="off"
                  aria-autocomplete="list"
                />

                {showMovieList && movieSuggestions.length > 0 && (
                  <ul className="autocomplete__list" role="listbox">
                    {movieSuggestions.map((movie) => (
                      <li
                        key={movie.id}
                        className="autocomplete__item"
                        onClick={() => {
                          setMovieSearch(movie.title);
                          setMovieId(movie.id);
                          setShowMovieList(false);
                        }}
                        role="option"
                      >
                        {movie.title}
                      </li>
                    ))}
                  </ul>
                )}
              </label>
            </fieldset>

            {/* Photo d'illustration */}
            <fieldset className="form__group" aria-labelledby="legend-picture">
              <legend id="legend-picture">Photo de la recette</legend>

              <label htmlFor="picture" className="form__label">
                Importez une photo illustrant votre recette
              </label>

              <input
                className="form__input"
                type="file"
                id="picture"
                name="picture"
                accept="image/*"
                onChange={(e) => setPicture(e.target.files[0])}
                aria-describedby="picture-desc"
              />

              <p id="picture-desc" className="form__hint">
                Formats acceptés : JPG, PNG, WebP — 5 Mo max.
              </p>
            </fieldset>

            <div className="form__actions">
              <button 
              type="submit" 
              className="form__button" 
              aria-label="Soumettre la recette"
              disabled={!title || !description || !category || !difficulty || !budget || !servings || !preparationTime || !cookingTime || !ingredients || !steps || !story || !userId || !movieId }
              >
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