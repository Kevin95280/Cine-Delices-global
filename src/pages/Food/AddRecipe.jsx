import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import NavBar from "../../Components/Header/NavBar";
import SearchForm from "../../Components/Header/SearchForm";
import Footer from "../../Components/Footer";

export default function AddRecipe() {
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
          <form className="form__container">
            <label htmlFor="title" className="form__label">
              Titre de la recette
              <input
                className="form__input"
                type="text"
                id="title"
                name="title"
                aria-required="true"
              />
            </label>
            <label htmlFor="description" className="form__label">
              Description
              <textarea
                className="form__textarea"
                id="description"
                name="description"
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
              />
            </label>
            <label htmlFor="level" className="form__label">
              Niveau de difficulté
              <input
                className="form__input"
                type="text"
                id="level"
                name="level"
              />
            </label>
            <label htmlFor="budget" className="form__label">
              Budget
              <input
                className="form__input"
                type="text"
                id="budget"
                name="budget"
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
              />
            </label>
            {/* Ingrédients */}
            <label htmlFor="ingredient-1" className="form__label">
              Ingrédient 1
              <input
                className="form__input"
                type="text"
                id="ingredient-1"
                name="ingredient-1"
                aria-required="true"
              />
            </label>
            <label htmlFor="ingredient-2" className="form__label">
              Ingrédient 2
              <input
                className="form__input"
                type="text"
                id="ingredient-2"
                name="ingredient-2"
                aria-required="true"
              />
            </label>
            <button type="button" className="form__button">
              Ajouter un ingrédient
            </button>
            {/* Etapes de préparation*/}
            <label htmlFor="step-1" className="form__label">
              Étape 1
              <input
                className="form__input"
                type="text"
                id="step-1"
                name="step-1"
                aria-required="true"
              />
            </label>
            <label htmlFor="step-2" className="form__label">
              Étape 2
              <input
                className="form__input"
                type="text"
                id="step-2"
                name="step-2"
                aria-required="true"
              />
            </label>
            <button type="button" className="form__button">
              Ajouter une étape
            </button>
            {/* Anecdote */}
            <label htmlFor="story" className="form__label">
              Anecdote
              <textarea className="form__textarea" id="story" name="story" />
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
              />
              {/* Soumission du formulaire */}
              <button type="submit" className="form__button">
                Soumettre
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
