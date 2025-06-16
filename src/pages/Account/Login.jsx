import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import NavBar from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer";
import { use, useState } from "react";

export default function Login () {

    /**
     *  Variable d'état qui nous permettra de récupérer l'email de connexion de l'adhérent
     *  Conforme à nos maquettes graphique mais possibilité de changer les noms lorsque la logique sera créé
     *  Demande d'email ou username pour la connexion pour la suite
     */
    const [isEmail, setEmail] = useState('')
    const [isPassword, setIsPassword] = useState('')

    const HandleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const HandlePasswordChange = (e) => {
        setIsPassword(e.target.value);
    }

    const HandleSubmit = (e) => {
        // Utilisation uniquement pour les tests mais A RETIRER une fois que la logique sera construite
        e.preventDefault()
        alert(`${isEmail} et ${isPassword}`)
    }

    return (
        <>
            <Helmet>
                <title>Connexion - Ciné-Délices</title>
                <meta name="description" content="Connexion adhérent Ciné-Délices" />
            </Helmet>
            <Header>
                <NavBar />
            </Header>
            <main className="main">
                <h1>Se connecter</h1>
                <form method="POST" action="/login" onSubmit={HandleSubmit} >
                    <div>
                        <label htmlFor="email" >
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={HandleEmailChange} />
                    </div>
                    <div>
                        <label htmlFor="password">
                            Mot de passe
                        </label>
                        <input type="password" name="password" id="password" onChange={HandlePasswordChange} />
                    </div>
                    <button>Connexion</button>
                </form>
            </main>
            <Footer />
        </>
    )
}