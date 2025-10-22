import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../Authentication";

export default function useLogin() {
    // définition des variables d'état
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate()

    const { login } = useContext(AuthContext)

    const API_URL = process.env.REACT_APP_API_URL;

    // handle pour la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        // conditions à la soumission pour être connecté
        try {
            const payload = {
                email,
                password
            }
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "charset": "utf-8"
                },
                body: JSON.stringify(payload)
            })
            // si les conditions ne sont pas remplies
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message)
                // utilisation de useNavigate dans le router pour la redirection
            } else {
                // Récupération du token, qui se trouve dans le corps de notre requêtes
                const data = await response.json()
                const token = data.token
                // On le stock dans le localStorage
                login(token)
                alert("Connexion réussie !");
                navigate('/my-account')
            }
            setMessage('')
        } catch (error) {
            setMessage(error.message)
        }
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        message,
        handleSubmit
    }
}