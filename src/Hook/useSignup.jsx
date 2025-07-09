import { useState } from "react";
// Import de la fonction useNavigation de react-router pour permettre la redirection
import { useNavigate } from "react-router-dom";

export default function useSignup() {
    // définition des variables d'état avec pour état initial des chaînes de caractères vides
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    /**
     * On fait appel à notre fonction useNavigate pour permettre la redirection
     * @link https://api.reactrouter.com/v7/functions/react_router.useNavigate.html
     */
    const navigate = useNavigate();

    // Variable d'état qui gérera le message d'erreur à afficher
    const [message, setMessage] = useState('');

    // fonction de soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // On vérifie la correspondance de nos mots de passe
            if (password === confirmPassword) {
                /**
                 * On créé un objet avec les valeurs récupérées de nos variables d'état
                 * C'est cet objet que nous passerons dans le corps de notre requêtes
                 */
                const payload = {
                    username,
                    email,
                    password
                }
                // On réalise notre requête sur la route associée côté back
                const response = await fetch("http://localhost:3000/api/users/", {
                    // Méthode
                    method: "POST",
                    // Header de la requête
                    headers: {
                        "Content-type": "application/json",
                        "charset": "utf-8"
                    },
                    // Body de la requête
                    body: JSON.stringify(payload)
                })
                /**
                 * Nous souhaitons récupérer en cas d'erreur le message associé
                 * Par exemple si un email est déjà utilisé pour la création d'un compte
                 * Impossibilité de créer un nouvel enregistrement donc un nouveau compte
                 * 
                 * Utilisation de la propriété en lecture seule ``.ok``
                 * @link https://developer.mozilla.org/fr/docs/Web/API/Response/ok
                 * Si le status code n'est pas compris entre 200 et 299
                 * Alors renvoie false
                 */
                if (!response.ok) {
                    // On récupère notre réponse json
                    const error = await response.json()
                    // On jette l'erreur associée
                    throw new Error(error.message)
                } else {
                    navigate("/login")
                }
            } else {
                throw new Error("Les deux mots de passes ne correspondent pas.")
            }
            // On réinitialise le message si un est déjà affiché
            setMessage('')
        } catch (error) {
            setMessage(error.message)
        }
    }

    return {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        message,
        handleSubmit
    }
}