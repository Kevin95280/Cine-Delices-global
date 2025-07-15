// Composant de la barre de recherche
export default function SearchForm({ searchTerm, handleSubmit, handleChange }) {
  return (
    // Prop d'événement qui fera appel à notre fonction handleSubmit à la soumission
    <form onSubmit={handleSubmit} className="search__form">
      {/* Prop d'événement qui gère l'état de la valeur du champ de recherche */}
      <label
        htmlFor="search-form"
        className="search__form__label sr-only"
      ></label>
      <input
        onChange={handleChange}
        type="text"
        name="search"
        id="search-form"
        value={searchTerm}
        className="search__form__input"
        placeholder="Rechercher la recette de votre choix..."
      />
      <button className="search__form__button">Rechercher</button>
    </form>
  );
}
