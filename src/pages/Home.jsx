import Header from "../Components/Header";
import NavBar from "../Components/Header/NavBar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import Card from "../Components/Cards/Card";



export default function Home() {
return (

<>
    {/* Header avec navigation */}
    <Header />
    <NavBar />
    <main className="main">
        {/* Chemin src à compléter avec l'image du logo */}
        <div className="hero">
            <img src="/assets/logo_pleine_page.png" alt="logo cine-delices" className="logo_fullscreen" />
            <h1>Le goût du cinéma, dans votre assiette.</h1>
        </div>
        {/* Section des Top Recettes */}
        <section className="top-recipes">
            <h2>Top recettes</h2>
            <Cards>
                {/* Exemple de carte pour les tests */}
                <Card title="Recette Test" authorName="Auteur Test" />
                <Card title="Recette Test" authorName="Auteur Test" />
                {/* Cartes supplémentaires... */}
            </Cards>
        </section>
        {/* Section des Recettes récentes */}
        <section className="recent-recipes">
            <h2>Recettes récentes</h2>
            <Cards>
                {/* Exemple de carte pour les tests */}
                <Card title="Recette Test" authorName="Auteur Test" />
                <Card title="Recette Test" authorName="Auteur Test" />
                {/* Cartes supplémentaires... */}
            </Cards>
        </section>
    </main>
    {/* Footer avec liens utiles */}
    <Footer />
</>
);
}