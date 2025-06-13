// Composant de la barre de recherche
export default function SearchForm({ searchTerm, handleSubmit, handleChange }) {
    return (
        // Prop d'événement qui vera appel à notre fonction handleSubmit à la soumission
        <form onSubmit={handleSubmit}>
            {/* Prop d'événement qui gère l'état de la valeur du champ de recherche */}
            <input onChange={handleChange} type="text" name="search" id="search" value={searchTerm} />
            <button>Envoyer</button>
        </form>
    )
}