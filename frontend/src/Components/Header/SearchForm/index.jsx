import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchForm() {
  // État pour stocker la saisie utilisateur
  const [searchTerm, setSearchTerm] = useState("");
  // État pour stocker les résultats de la recherche
  const [results, setResults] = useState(null);
  // État pour capturer une éventuelle erreur
  const [error, setError] = useState(null);

  // Mise à jour du champ dès que l'utilisateur tape
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setError(null); // Réinitialisation de l’erreur au changement
  };

  // Remise à zéro des résultats une fois qu'un item de la liste est sélectionné
  const handleResultClick = () => {
  setResults(null);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifie qu'il y a un mot à rechercher
    if (!searchTerm.trim()) return;

    try {
      // Appel à l'API backend
      const res = await fetch(`http://localhost:3000/api/search?q=${searchTerm}`);

      // Vérifie si la réponse est ok
      if (!res.ok) throw new Error("Erreur lors de la recherche");

      // Extraction des données JSON
      const data = await res.json();

      // Mise à jour des résultats
      setResults(data);
    } catch (err) {
      console.error("Erreur search:", err.message);
      setError("Impossible de récupérer les résultats.");
    }
  };

  return (
    <div className="search__container">
      {/* Barre de recherche */}
      <form onSubmit={handleSubmit} className="search__form">
        {/* Label masqué pour l'accessibilité */}
        <label htmlFor="search-form" className="search__form__label sr-only">
          Recherche
        </label>

        {/* Champ texte */}
        <input
          type="text"
          name="search"
          id="search-form"
          value={searchTerm}
          onChange={handleChange}
          className="search__form__input"
          placeholder="Rechercher une recette ou un film..."
        />

        {/* Bouton de soumission */}
        <button type="submit" className="search__form__button">
          Rechercher
        </button>
      </form>

      {/* Message d'erreur si présent */}
      {error && <p className="search__error">{error}</p>}

      {/* Affichage des résultats s’ils existent */}
      {results && (
        <div className="search__results">
          <div className="results__columns">
            {/* Colonne Recettes */}
            <div className="results__column">
              <h3>Recettes</h3>
              {results.recipes.length > 0 ? (
                <ul>
                  {results.recipes.map((recipe) => (
                    <li key={`recipe-${recipe.id}`}>
                      <Link to={`/recipes/${recipe.id}`} onClick={handleResultClick}>{recipe.title}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Aucune recette trouvée.</p>
              )}
            </div>

            {/* Colonne Films */}
            <div className="results__column">
              <h3>Films</h3>
              {results.movies.length > 0 ? (
                <ul>
                  {results.movies.map((movie) => (
                    <li key={`movie-${movie.id}`}>
                      <Link to={`/movies-and-series/${movie.id}`} onClick={handleResultClick}>{movie.title}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Aucun film trouvé.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


