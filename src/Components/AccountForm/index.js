import React from "react";

export default function AccountForm() {
    return (
        <>
            <form method="POST">
                <label htmlFor="email">Email
                    <input type="email" id="email" name="email" required></input>
                </label>
                <label htmlFor="password">Mot de passe
                    <input type="password" id="password" name="password" required></input>
                </label>
                <button type="submit">Valider</button>
            </form>
        </>
    )
}