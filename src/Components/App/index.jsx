// Test du rendu du composant formulaire
import SearchForm from "../SearchForm";
import Cards from "../Cards";
import Card from "../Cards/Card";
// On importe notre hook personnalisé
import useSearch from "../../Hook/useSearch";

export default function App() {

  // On récupère les états et fonctions depuis le hook personnalisé
  const { searchTerm, movies, handleChange, handleSubmit } = useSearch();

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