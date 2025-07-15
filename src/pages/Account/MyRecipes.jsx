import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Array from "../../Components/Array"; // Composant pour afficher les informations utilisateur
import NavBar from "../../Components/Header/NavBar";
import { useEffect, useState } from "react";

export default function MyRecipes() {
const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:3000/api/my-recipes", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des recettes");
        }

      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Erreur :", error.message);
    }
    };

    fetchRecipes();
  }, []);

const recipeArray = recipes.map(recipe => ({
  "Titre de la recette": recipe.title,
  "Description": recipe.description,
  "Budget": recipe.budget,
  "Difficulté": recipe.difficulty,
  "Film associé": recipe.movie_title,
  "Date de création": new Date(recipe.created_at).toLocaleDateString("fr-FR")
}));




return (
<>
    {/* En tete de la page */}
    <Header>
        <NavBar />
    </Header>
    <main className="main">
        <h1>Mes publications</h1>

        {/* Informations utilisateur */}
        <section className="posts-info">
            {/* Affichage des infos avec le composant Array */}
            <Array title={"Mes recettes"} data={recipeArray} />
        </section>
    </main>
    {/* Footer avec liens utiles */}
    <Footer />
</>
);
}