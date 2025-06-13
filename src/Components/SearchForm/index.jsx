// Import du hook useState pour gérer nos variables d'état
import { useState } from "react"

// Composant de la barre de recherche
export default function SearchForm() {

    // Initialisation de nos variables d'état
    // Gestion des entrées utilisateurs dans le champ de recherche
    const [ searchTerm, setSearchTerm ] = useState('');
    // Stockage dans un tableau du résultat renvoyé de notre réponse API à la soumission du formulaire
    const [ movies, setMovies ] = useState([]);

    // Mise à jour de la valeur du champ saisie par l'utilisateur
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    // Handler qui conditionnera notre action à la soumission de notre formulaire
    const handleSubmit = (event) => {
        // On empêche le comportement par défaut (rafraîchissement de la page à la soumission du formulaire)
        event.preventDefault();
        // On test avec un alert en renvoyé la mise à jour de notre variable d'état de notre champ
        alert(`${searchTerm}`);
    }

    return (
        // Prop d'événement qui vera appel à notre fonction handleSubmit à la soumission
        <form onSubmit={handleSubmit}>
            {/* Prop d'événement qui gère l'état de la valeur du champ de recherche */}
            <input onChange={handleChange} type="text" name="search" id="search" value={searchTerm} />
            <button>Envoyer</button>
        </form>
    )
}