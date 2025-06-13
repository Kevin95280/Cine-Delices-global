import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";


export default function Home() {
return (

<>
    {/* Header avec navigation */}
    <Header />
    <main className="main">
        {/* Chemin src à compléter avec l'image du logo */}
        <img src="#" alt="logo cine-delices" />
        <h1>Le goût du cinéma, dans votre assiette.</h1>
        {/* Section des Top Recettes */}
        <section className="top-recipes">
            <h2>Top recettes</h2>
            <Cards>
                {/* Exemple de carte pour les tests */}
                {/*
                <Card title="Recette Test" authorName="Auteur Test" /> */}
                {/* Cartes supplémentaires... */}
            </Cards>
        </section>
        {/* Section des Recettes récentes */}
        <section className="recent-recipes">
            <h2>Recettes récentes</h2>
            <Cards>
                {/* Exemple de carte pour les tests */}
                {/*
                <Card title="Recette Test" authorName="Auteur Test" /> */}
                {/* Cartes supplémentaires... */}
            </Cards>
        </section>
    </main>
    {/* Footer avec liens utiles */}
    <Footer />
</>
);
}