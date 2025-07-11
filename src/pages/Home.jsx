import Header from "../Components/Header";
import NavBar from "../Components/Header/NavBar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import Card from "../Components/Cards/Card";
import SearchForm from "../Components/Header/SearchForm";
import NavLink from "../Components/NavLink";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication";


export default function Home() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCreateClick = () => {
    if (isAuthenticated) {
      navigate("/add-recipe");
    } else {
      alert("Vous devez être connecté pour créer une nouvelle recette");
    }
  };

    return (

        <>
            {/* Header avec navigation */}
            <Header>
                <NavBar />
                <SearchForm />
            </Header>
            <NavLink />
            <main className="main">
                {/* Chemin src à compléter avec l'image du logo */}
                <div className="hero">
                    {/* Bouton avec logique d’accès conditionnel */}
                    <button onClick={handleCreateClick} className="add-recipe-banner glass-effect">
                        Créer une nouvelle recette
                    </button>
                    <img src="/assets/logo_pleine_page.png" alt="logo cine-delices" className="logo_fullscreen" />
                    <h1 className="catchphrase">Le goût du cinéma, dans votre assiette.</h1>
                </div>
                {/* Section des Top Recettes */}
                <section className="section">
                    <Cards title={"Top recettes"}>
                        {/* Exemple de carte pour les tests */}
                        <Card title="Recette Test" authorName="Auteur Test" image="../../assets/image-test.jpg" />
                        <Card title="Recette Test" authorName="Auteur Test" image="../../assets/image-test.jpg" />
                        <Card title="Recette Test" authorName="Auteur Test" image="../../assets/image-test.jpg" />
                        {/* Cartes supplémentaires... */}
                    </Cards>
                </section>
                {/* Section des Recettes récentes */}
                <section className="section">
                    <Cards title={"Recettes récentes"}>
                        {/* Exemple de carte pour les tests */}
                        <Card title="Recette Test" authorName="Auteur Test" image="../../assets/image-test.jpg" />
                        <Card title="Recette Test" authorName="Auteur Test" image="../../assets/image-test.jpg" />
                        <Card title="Recette Test" authorName="Auteur Test" image="../../assets/image-test.jpg" />
                        {/* Cartes supplémentaires... */}
                    </Cards>
                </section>
            </main>
            {/* Footer avec liens utiles */}
            <Footer />
        </>
    );
}