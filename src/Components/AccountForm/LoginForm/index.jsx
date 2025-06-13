
import { useState } from "react";

export default function LoginForm() {
    // définition des variables d'état
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // handle pour la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="account-form" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="email">Email
                <input
                    className=""
                    type="email"
                    id="email"
                    name="email"
                    // prise en compte de la valeur du champ une fois rempli, ici spécifique à l'email
                    // puis par la suite adapté en fonction de la valeur des autres champs
                    onChange={(e) => setEmail(e.target.value)}
                    value={formData.email}
                    required
                />
            </label>
            <label htmlFor="password">Votre Mot de passe
                <input
                    className=""
                    type="password" id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={12}
                    required
                />
            </label>
            <button type="submit">Se connecter</button>
        </form>
    )
}