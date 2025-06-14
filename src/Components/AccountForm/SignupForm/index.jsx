import React, { useState } from "react";

export default function SignupForm() {
    // définition des variables d'état avec pour état initial des chaînes de caractères vides
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    // fonction de soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault()
        // condition pour la création du compte
        if (password === confirmPassword) {
            return (
            alert("Nouveau compte créé !")
        )}
        // si celle-ci renvoie false
        else {
            return (alert('Vos mots de passe ne sont pas identiques')

        )}
    }
    return (
        <form className="account-form" method="POST"
            // handler d'action à l'événement
            onSubmit={handleSubmit}>
            <label htmlFor="username">Nom d'utilisateur
                <input
                    className=""
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
            <label htmlFor="email">Email
                <input
                    className=""
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="nom@domaine.extension"
                    required
                />
            </label>
            <label htmlFor="password">Mot de passe (12 caractères minimum)
                <input
                    className=""
                    type="password" id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Votre mot de passe"
                    minLength={12}
                    required
                />
            </label>
            <label htmlFor="retype-password">Retapez votre mot de passe
                <input
                    className=""
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
            <button type="submit">S'inscrire</button>
        </form >
    )
}