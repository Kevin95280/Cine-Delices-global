import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FilterForm from "../../Components/FilterForm"; // Composant FilterForm pour les filtres
import NavBar from "../../Components/Header/NavBar";
import SearchForm from "../../Components/Header/SearchForm";
import ContentCarousel from "../../Components/ContentCarousel";


export default function MoviesSeries() {
  const [duMoment, setDuMoment] = useState([]);
  const [peur, setPeur] = useState([]);
  const [rire, setRire] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [allMovies, horreur, comedie] = await Promise.all([
          fetch(`${API_URL}/api/movies`),
          fetch(`${API_URL}/api/movies/genre/Horreur`),
          fetch(`${API_URL}/api/movies/genre/Comédie`),
        ]);

        const all = await allMovies.json();
        const horreurData = await horreur.json();
        const comedieData = await comedie.json();

        setDuMoment(all.slice(0, 6));
        setPeur(horreurData);
        setRire(comedieData);
      } catch (error) {
        console.error("Erreur chargement films/séries :", error);
      }
    };

    fetchData();
  }, []);

return (
<>
    {/* Header avec navigation */}
    <Header>
        <NavBar />
        <SearchForm />
    </Header>
    {/* Formulaire de filtre pour les films et séries */}
    {/*<FilterForm />*/}
    <main className="main">
        <h1>Films & Séries</h1>

        {/* Section : Les films & séries du moment */}
        <section>
            {/* Composant Cards pour afficher les films et séries (Titre + vignette) */}
            <ContentCarousel title="Films du moment" items={duMoment} />
        </section>

        {/* Section : Pour vous faire peur */}
        <section>
            <ContentCarousel title="Pour vous faire peur" items={peur} />
        </section>

        {/* Section : Pour vous faire rire */}
        <section>
            <ContentCarousel title="Pour vous faire rire" items={rire} />
        </section>
    </main>
    {/* Footer avec liens utiles */}
    <Footer />
</>
);
}