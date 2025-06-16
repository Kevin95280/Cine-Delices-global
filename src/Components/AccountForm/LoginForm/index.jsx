import react, { useState } from "react";
import bcrypt from "bcryptjs";
import { redirect } from "react-router-dom";

export default function LoginForm() {
    // définition des variables d'état
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // hachage du mot de passe entré dans le formulaire de connexion via une fonction asynchrone
    const hashPassword = async (password) => {
        // gestion d'erreur en cas d'erreur lors du hachage avec try & catch
        // cas où il n'y aurait pas d'erreur
        try {
            // définition du salage avec en argument le nombre de tours
            const salt = await bcrypt.genSalt(10);
            // mot de passe haché avec le salage
            const hashedPassword = await bcrypt.hash(password, salt);
            if (!hashedPassword) {
                throw error;
            }
        }
        // en cas d'erreur
        catch (error) {
            console.error("Erreur lors du hachage du mot de passe", error);
        }
    }

    //     récupération des données utilisateur dans la BDD
    //     fetch('https:localhost:3000', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             email: email,
    //             password: hashedPassword,
    //         }),
    //     })
    // }

    const userEmail = "toto@tata.fr";
    const userPassword = "hello world!"

    // hachage du mot de passe correspondant à l'email de connexion
    const userHashPassword = async (userPassword) => {
        // gestion d'erreur en cas d'erreur lors du hachage avec try & catch
        // cas où il n'y aurait pas d'erreur
        try {
            // définition du salage avec en argument le nombre de tours
            const salt = await bcrypt.genSalt(10);
            // mot de passe haché avec le salage
            const userHashedPassword = await bcrypt.hash(userPassword, salt);
            if (!userHashedPassword) {
                throw error;
            }
        }
        // en cas d'erreur
        catch (error) {
            console.error("Erreur lors du hachage du mot de passe", error);
        }
    }

    // comparaison des 2 mots de passe - renvoie un boolén, true si les mots de passe correspondent, sinon false
    const doesPasswordMatch = bcrypt.compareSync(password, userHashPassword)

    // handle pour la soumission du formulaire
    const handleSubmit =
        (e) => {

            e.preventDefault()

            // conditions à la soumission pour être connecté
            const authenticated = email === userEmail && doesPasswordMatch
            if (authenticated) {
                alert('Vous êtes maintenant connecté')
                // utilisation de useNavigate dans le router pour la redirection
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