import { Helmet } from "react-helmet";
// Import de nos composants
import Header from "../../Components/Header";
import NavBar from "../../Components/Header/NavBar"
import SearchForm from "../../Components/Header/SearchForm"
import SignupForm from "../../Components/AccountForm/SignupForm";
import Footer from "../../Components/Footer";

export default function Signup() {
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
            <main className="main__form">
                <div className="account__form__wrapper">
                    <SignupForm />
                </div>
            </main>
            <Footer />
        </>
    )
}