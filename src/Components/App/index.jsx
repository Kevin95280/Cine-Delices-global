// Import du hook useState pour gérer nos variables d'état
import { useState } from "react"

// Test du rendu du composant formulaire
import SearchForm from "../SearchForm";
import Cards from "../Cards";
import Card from "../Cards/Card";

// import AppRouter from "../Router";

export default function App() {

  // Initialisation de nos variables d'état
  // Gestion des entrées utilisateurs dans le champ de recherche
  const [searchTerm, setSearchTerm] = useState('');
  // Stockage dans un tableau du résultat renvoyé de notre réponse API à la soumission du formulaire
  const [movies, setMovies] = useState([]);

  // CLE API A STOCKER DANS UN .ENV
  const apiKey = "b7ea39866dc69a5418fc08919b3edf77"

  /**
   *  Fetch API pour afficher les résultats de la catégorie film de notre API
   *  En fonction du mot clé récupérer dans le formulaire de recherche
   * */
  const fetchAPI = async (term) => {
    /**
     * encodeURIComponent => Permet de remplacer certains caractère par des séquences d'échapement
     * Exemple : les espaces
     * Permet de pouvoir retranscrire la valeur de notre champ en chaîne de caractère valable pour notre URL
     * @link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
     */
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(term)}&language=fr-FR`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      // Réponse JSON récupérer de notre API TheMovieDB
      console.log(data)
      // On met à jour notre variable d'état qui stoquera le résultat retournée de notre API
      setMovies(data.results);
      // Gestion en cas d'erreur
    } catch (error) {
      console.error(error);
    }
  }

  // Mise à jour de la valeur du champ saisie par l'utilisateur
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  // Handler qui conditionnera notre action à la soumission de notre formulaire
  const handleSubmit = (event) => {
    // On empêche le comportement par défaut (rafraîchissement de la page à la soumission du formulaire)
    event.preventDefault();
    // Condition : si la valeur du champ (sans espace avant et après)
    if (searchTerm.trim() !== "") {
      // On fait appel à notre API
      fetchAPI(searchTerm);
    }
  }

  return (
    <>
      <SearchForm searchTerm={searchTerm} handleSubmit={handleSubmit} handleChange={handleChange} />
      <Cards title="Test API, résultat de la recherche (Films)">
        {movies.map((movie) => (
          <Card
            // Clé utile à React pour pouvoir afficher nos différents éléments
            key={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </Cards>
    </>
  )
}