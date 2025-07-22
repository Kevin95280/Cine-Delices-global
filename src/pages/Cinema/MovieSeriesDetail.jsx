import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import NavBar from "../../Components/Header/NavBar";
import SearchForm from "../../Components/Header/SearchForm";
import ContentCarousel from "../../Components/ContentCarousel";

export default function MovieDetail() {
const { movieId } = useParams(); // Récupère l'ID du film depuis l'URL

  // États pour le film, chargement et erreurs
  const [movie, setMovie] = useState(null); 
  const [recipes, setRecipes] = useState([]); 
  const [error, setError] = useState(null); 

  // Récupération du film et de ses recettes associées
  useEffect(() => {
    async function fetchData() {
      try {
        // Film
        const movieRes = await fetch(`http://localhost:3000/api/movies/${movieId}`);
        if (!movieRes.ok) throw new Error("Erreur récupération film");
        const movieData = await movieRes.json();
        setMovie(movieData);

      // Récupère toutes les recettes
      const recipeRes = await fetch("http://localhost:3000/api/recipes");
      if (!recipeRes.ok) throw new Error("Erreur récupération recettes");
      const recipeData = await recipeRes.json();

      // Filtre les recettes liées au film courant
      const related = recipeData.filter(recipe => recipe.movie_id == movieId);
      setRecipes(related);
    } catch (err) {
      console.error("Erreur MovieDetail :", err.message);
      setError("Impossible de charger les données.");
    }
  }

    fetchData();
  }, [movieId]);

return (
<>
  {/* Header avec navigation */}
  <Header>
    <NavBar />
    <SearchForm />
  </Header>
  <main className="main">

    {/* Affichage de l'erreur */}
        {error && <p>{error}</p>}

        {/* Film trouvé */}
        {movie && (
          <>
            <h1>{movie[0].title}</h1>

            {/* Synopsis + Affiche */}
            <section className="movie__synopsis">
              <div className="movie__image">
                <img src={movie[0].poster_path} alt={`Affiche de ${movie[0].title}`} />
              </div>

              <div className="movie__text">
                <h2>Synopsis</h2>
                <p>{movie[0].overview}</p>
              </div>
            </section>

            {/* Recettes associées */}
            {recipes.length > 0 && (
              <section>
                <h2>Recettes inspirées du film</h2>
                <ContentCarousel items={recipes} />
              </section>
            )}
          </>
        )}
      </main>
  {/* Footer avec liens utiles */}
  <Footer />
</>
);
}