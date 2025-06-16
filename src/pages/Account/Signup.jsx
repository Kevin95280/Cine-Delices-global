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
            <title>Connexion - Ciné-Délices</title>
            <meta name="description" content="Connexion à l'espace réservé aux adhérents - Ciné-Délices" />
        </Helmet>
        <Header>
            <NavBar />
            <SearchForm />
        </Header>
        <SignupForm />
        <Footer />
    </>
    )
}