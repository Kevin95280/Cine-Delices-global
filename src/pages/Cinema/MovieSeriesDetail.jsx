import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/Header/NavBar";
import SearchForm from "../../Components/Header/SearchForm";
import Cards from "../../Components/Cards"; // Composant carousel pour les recettes associées
import Card from "../../Components/Cards/Card";

export default function MovieDetail() {
const { movieId } = useParams(); // Récupère l'ID du film depuis l'URL (à utiliser plus tard pour l'appel à l'API)

// Simule des données de film (sera remplacé par l'appel à l'API)
const movie = {
title: "Kill Bill : Volume 1 (2003)",
synopsis: "Au cours de son mariage, un commando armé massacre l'assistance, laissant pour morte la mariée. Celle-ci, enceinte, survit cependant à ses blessures. Quatre ans plus tard, elle sort du coma et décide de se venger de ses anciens compagnons d'armes, membres du commando. Elle se lance alors dans une quête sanglante et périlleuse...",
recipes: [
{ id: 1, title: "Escalopes de dinde à la feta", image: "image-test.jpg" }
]
};

return (
<>
  {/* Header avec navigation */}
  <Header>
    <NavBar />
    <SearchForm />
  </Header>
  <main className="main">
    <h1>{movie.title}</h1>

    {/* Section Synopsis */}
    <section>
      <h2>Synopsis</h2>
      <p>{movie.synopsis}</p>
    </section>

    {/* Section Recettes associées */}
    <section>
      <Cards recipes={movie.recipes}>
        <Card />
      </Cards>
    </section>
  </main>
  {/* Footer avec liens utiles */}
  <Footer />
</>
);
}