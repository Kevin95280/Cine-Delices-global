import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import NavBar from "../../Components/Header/NavBar";
import SearchForm from "../../Components/Header/SearchForm";
import Footer from "../../Components/Footer";
import FilterForm from "../../Components/FilterForm";
import ContentCarousel from "../../Components/ContentCarousel";


export default function Recipes() {
  const [recettesDuMoment, setRecettesDuMoment] = useState([]);
  const [entrees, setEntrees] = useState([]);
  const [plats, setPlats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Utilisation de Promise.all pour charger les recettes en parallèle
        // On attend que toutes les requêtes soient terminées avant de continuer
        const [allRecipes, entrees, plats] = await Promise.all([
          fetch("http://localhost:3000/api/recipes"),
          fetch("http://localhost:3000/api/recipes/category/Entrée"),
          fetch("http://localhost:3000/api/recipes/category/Plat"),
        ]);

        const all = await allRecipes.json();
        const entreesData = await entrees.json();
        const platsData = await plats.json();

        // On limite les recettes du moment à 6
        setRecettesDuMoment(all.slice(0, 6));
        // On stocke les entrées et plats dans leur état respectif
        setEntrees(entreesData);
        setPlats(platsData);
      } catch (error) {
        console.error("Erreur chargement recettes :", error);
      }
    };

    fetchData();
  }, []);

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
        <h1>Nos recettes</h1>

          {/* carrousel pour les recettes du moment */}
          <section className="recipes__item" aria-labelledby="recipes-subtitle">
            <ContentCarousel title="Les recettes du moment" items={recettesDuMoment} />
          </section>
          {/* carrousel pour les entrées */}
          <section className="recipes__item" aria-labelledby="recipes-subtitle">
            <ContentCarousel title="Entrées" items={entrees} />
          </section>
          {/* carrousel pour les plats */}
          <section className="recipes__item" aria-labelledby="recipes-subtitle">
            <ContentCarousel title="Plats" items={plats} />
          </section>
      </main>

      {/* contenu de nos pages de navigation secondaires */}
      <Footer />
    </>
  );
}
