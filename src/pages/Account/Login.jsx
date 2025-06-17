import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import NavBar from "../../Components/Header/NavBar";
import LoginForm from "../../Components/AccountForm/LoginForm";
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
                <h1>Se connecter</h1>
                <LoginForm />
            </main>
            <Footer />
        </>
    )
}