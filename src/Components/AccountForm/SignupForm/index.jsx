import React, { useState } from "react";

export default function SignupForm() {
    // définition des variables d'état avec pour état initial des chaînes de caractères vides
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                    throw new Error(error)
                }
            } else {
                throw new Error("Les deux mots de passes ne correspondent pas.")
            }
            // On réinitialise le message si un est déjà affiché
            setMessage('')
        } catch (error) {
            setMessage(error.message)
        }
    };

    return (
        <form
            className="account__form account__form__login"
            method="POST"
            // handler d'action à l'événement
            onSubmit={handleSubmit}
        >
            {/* Si message est true, alors on l'affiche */}
            {message && <p>{message}</p>}
            {/* Ajout d'un fieldset, pour mieux structurer sémantiquement le formulaire */}
            <fieldset>
                {/* Ajout d'une légende, qui sera "caché" visuellement, mais accessible via une lisseuse d'écran*/}
                <legend className="sr-only">Formulaire d'inscription :</legend>
                <div>
                    <label htmlFor="username" className="account__form__label">
                        <span>Nom d'utilisateur</span>
                        <input
                            className="account__form__input"
                            type="text"
                            id="username"
                            name="username"
                            // prise en compte de la valeur du champ une fois rempli, ici spécifique au nom d'utilisateur
                            // puis par la suite adapté en fonction de la valeur des autres champs
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            placeholder="Votre nom ici"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="email" className="account__form__label">
                        <span>Email</span>
                        {/* Indication sur le format attendu accessible */}
                        <span className="sr-only">Exemple : nom@domaine.extension</span>
                        <input
                            className="account__form__input"
                            type="email"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            placeholder="nom@domaine.extension"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="password" className="account__form__label">
                        <span>Mot de passe :</span>
                        <span className="sr-only">Veuillez insérer votre mot de passe :</span>
                        <span id="passwordHelp">Doit contenir au moins 12 caractères, une majuscule, un chiffre et un caractère spécial.</span>
                        <input
                            className="account__form__input"
                            type="password"
                            id="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="Votre mot de passe"
                            aria-describedby="passwordHelp"
                            minLength={12}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="retype-password" className="account__form__label">
                        <span>Retapez votre mot de passe</span>
                        <span className="sr-only">Veuillez valider votre mot de passe :</span>
                        <input
                            className="account__form__input"
                            type="password"
                            id="retype-password"
                            name="retype-password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            placeholder="Votre mot de passe"
                            minLength={12}
                            required
                        />
                    </label>
                </div>
                <button type="submit" className="account__form__button">
                    S'inscrire
                </button>
            </fieldset>
        </form>
    );
}
