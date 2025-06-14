import react, { useState } from "react";
import bcrypt from "bcrypt"

export default function LoginForm() {
    // définition des variables d'état
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // hash du mot de passe entré dans le formulaire de connexion
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());


    const userEmail = "toto@tata.fr";
    const userPassword = "hello world!"

    // hash du mot de passe correspondant à l'email entré dans le formulaire de connexion
    const userHashedPassword = bcrypt.hashSync(userPassword, bcrypt.genSaltSync());

    // comparaison des 2 mots de passe - renvoie un boolén, true si les mots de passe correspondent, sinon false
    const doesPasswordMatch = bcrypt.compareSync(password, userHashedPassword)

    // handle pour la soumission du formulaire
    const handleSubmit =
        (e) => {

            e.preventDefault()

            // conditions à la soumission pour être connecté
            const authenticated = email === userEmail && doesPasswordMatch
            if (authenticated) {
                return (this.props.history.push('/'))
            }

            // si les conditions ne sont pas remplies
            else {
        return (
            alert("Email ou mot de passe incorrect")
        )
    }
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
                value={email}
                required
            />
        </label>
        <label htmlFor="password">Votre Mot de passe
            <input
                className=""
                type="password" id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                minLength={12}
                required
            />
        </label>
        <button type="submit">Se connecter</button>
    </form>
)
}