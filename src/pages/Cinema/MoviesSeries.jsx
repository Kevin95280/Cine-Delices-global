import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import FilterForm from "../../Components/FilterForm"; // Composant FilterForm pour les filtres
import Cards from "../components/Cards"; // Composant Cards pour les caroussels

export default function MoviesSeries() {
return (
<>
    {/* Header avec navigation */}
    <Header />
    {/* Formulaire de filtre pour les films et séries */}
    <FilterForm />
    <main className="main">
        <h1>Films & Séries</h1>

        {/* Section : Les films & séries du moment */}
        <section>
            {/* Composant Cards pour afficher les films et séries (Titre + vignette) */}
            <Cards />
        </section>

        {/* Section : Pour vous faire peur */}
        <section>
            <Cards />
        </section>

        {/* Section : Pour vous faire rire */}
        <section>
            <Cards />
        </section>
    </main>
    {/* Footer avec liens utiles */}
    <Footer />
</>
);
}