import { Helmet } from "react-helmet";
// Import de nos composants
import Header from "../../Components/Header";
import NavBar from "../../Components/Header/NavBar"
import SearchForm from "../../Components/Header/SearchForm"
import SignupForm from "../../Components/AccountForm/SignupForm";
import Footer from "../../Components/Footer";

export default function Signup () {
    return (
    <>
        <Helmet>
            <title>Inscription - Ciné-Délices</title>
            <meta name="description" content="Création d'un compte utilisateur - Ciné-Délices" />
        </Helmet>
        <Header>
            <NavBar />
            <SearchForm />
        </Header>
        <h1>Créer votre compte </h1>
        <SignupForm />
        <Footer />
    </>
    )
}