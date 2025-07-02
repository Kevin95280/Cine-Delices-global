import React, { useState } from "react";

export default function SignupForm() {
    // définition des variables d'état avec pour état initial des chaînes de caractères vides
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // fonction de soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // condition pour la création du compte
        if (password === confirmPassword) {
            alert("Nouveau compte créé !");
        }
        // si celle-ci renvoie false
        else {
            alert("Vos mots de passe ne sont pas identiques");
        }
    };
    return (
        <form
            className="account__form account__form__login"
            method="POST"
            // handler d'action à l'événement
            onSubmit={handleSubmit}
        >
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
