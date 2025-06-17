import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import NavBar from "../../Components/Header/NavBar";
import SearchForm from "../../Components/Header/SearchForm";
import Footer from "../../Components/Footer";
import Cards from "../../Components/Cards";
import Card from "../../Components/Cards/Card";
import FilterForm from "../../Components/FilterForm";

export default function Recipes() {
  return (
    <>
      {/* Helmet gère le contenu de la balise head, ici le titre ainsi que nos meta données afin d'améliorer le référencement (SEO)*/}
      <Helmet>
        <title>Recipes - Ciné-Délices</title>
        <meta
          name="description"
          content="Découvrez toutes nos recettes inspirées du cinéma"
        />
      </Helmet>

      {/* contenu de nos pages de navigation principales */}
      <Header>
        <NavBar />
        <SearchForm />
      </Header>

      {/* permet de filtrer nos recettes */}
      {/* <FilterForm /> */}

      {/* contenu principal de notre page */}
      <main className="main">
        <section className="recipes" aria-labelledby="recipes-title">
          <article className="recipes__item">
            <h1 id="recipes-title" className="recipes__title">
              Nos recettes
            </h1>
          </article>
          {/* carrousel pour les recettes du moment */}
          <article className="recipes__item" aria-labelledby="recipes-subtitle">
            <h2 id="recipes-subtitle" className="recipes__subtitle">
              Les recettes du moment
            </h2>
            <Cards>
              <Card />
            </Cards>
          </article>
          {/* carrousel pour les entrées */}
          <article className="recipes__item" aria-labelledby="recipes-subtitle">
            <h2 id="recipes-subtitle" className="recipes__subtitle">
              Entrées
            </h2>
            <Cards>
              <Card />
            </Cards>
          </article>
          {/* carrousel pour les plats */}
          <article className="recipes__item" aria-labelledby="recipes-subtitle">
            <h2 id="recipes-subtitle" className="recipes__subtitle">
              Plats
            </h2>
            <Cards>
              <Card />
            </Cards>
          </article>
        </section>
      </main>

      {/* contenu de nos pages de navigation secondaires */}
      <Footer />
    </>
  );
}
