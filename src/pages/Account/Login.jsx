import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import NavBar from "../../Components/Header/NavBar";
import Footer from "../../Components/Footer";

export default function Login () {
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
                <form method="POST" action="/login" >
                    <div>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">
                            Mot de passe
                        </label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button>Connexion</button>
                </form>
            </main>
            <Footer />
        </>
    )
}