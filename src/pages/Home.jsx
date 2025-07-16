import Header from "../Components/Header";
import NavBar from "../Components/Header/NavBar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import Card from "../Components/Cards/Card";
import SearchForm from "../Components/Header/SearchForm";
import NavLink from "../Components/NavLink";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Authentication";
import { useEffect, useState } from "react";

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

const [recipes, setRecipes] = useState([]);
const [topRecipes, setTopRecipes] = useState([]);
const [recentRecipes, setRecentRecipes] = useState([]);

useEffect(() => {
  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/recipes");
      const data = await response.json();

      // Top recettes : triées par note (du plus élevé au plus bas)
      const sortedByRating = [...data].sort((a, b) => b.rating - a.rating);
      setTopRecipes(sortedByRating.slice(0, 3)); // top 3

      // Recettes récentes : triées par date de création
      const sortedByDate = [...data].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setRecentRecipes(sortedByDate.slice(0, 3)); // les 3 plus récentes

      setRecipes(data);
    } catch (error) {
      console.error("Erreur chargement recettes :", error);
    }
  };

  fetchRecipes();
}, []);

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
                        {topRecipes.map((recipe) => (
                            <Card
                            key={recipe.id}
                            title={recipe.title}
                            authorName={recipe.author_username}
                            image={recipe.picture || "/assets/image-par-defaut.jpg"}
                            />
                        ))}
                    </Cards>
                </section>
                {/* Section des Recettes récentes */}
                <section className="section">
                    <Cards title={"Recettes récentes"}>
                        {recentRecipes.map((recipe) => (
                            <Card
                            key={recipe.id}
                            title={recipe.title}
                            authorName={recipe.author_username}
                            image={recipe.picture || "/assets/image-par-defaut.jpg"}
                            />
                        ))}
                    </Cards>
                </section>
            </main>
            {/* Footer avec liens utiles */}
            <Footer />
        </>
    );
}