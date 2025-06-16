// Import du hook useState pour gérer nos variables d'état
import { useState } from "react"

// Initialisation de notre hook personnalisé qui nous permettra de gérer la barre de recherche
export default function useSearch() {

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
            // On met à jour notre variable d'état qui stoquera le résultat retournée de notre API
            setMovies(data.results);
            // Gestion en cas d'erreur
        } catch (error) {
            console.error(error);
        }
    }

    // Mise à jour de la valeur du champ saisie par l'utilisateur
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    // Handler qui conditionnera notre action à la soumission de notre formulaire
    const handleSubmit = (e) => {
        // On empêche le comportement par défaut (rafraîchissement de la page à la soumission du formulaire)
        e.preventDefault();
        // Condition : si la valeur du champ (sans espace avant et après)
        if (searchTerm.trim() !== "") {
            // On fait appel à notre API
            fetchAPI(searchTerm);
        }
    }

    /**
     * On retourne les variables d'état et les fonctions de gestion
     * Pour qu'elles puissent être utilisées dans d'autre composants
     */
    return {
    searchTerm,
    movies,
    handleChange,
    handleSubmit,
    }
}