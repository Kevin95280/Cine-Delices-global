import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import NavBar from "../Components/Header/NavBar";
import SearchForm from "../Components/Header/SearchForm";
import Footer from "../Components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Helmet gère le contenu de la balise head, ici le titre ainsi que nos meta données afin d'améliorer le référencement (SEO)*/}
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Politique de confidentialité du site Ciné-Délices"
        />
      </Helmet>

      {/* contenu de nos pages de navigation principales */}
      <Header>
        <NavBar />
        <SearchForm />
      </Header>

      {/* contenu principal de notre page */}
      <main className="main">
        <section className="privacy__policy">
          <article
            className="privacy__policy__item"
            aria-labelledby="privacy-policy-title"
          >
            <h1 id="privacy-policy-title" className="privacy__policy__title">
              Politique de confidentialité
            </h1>
          </article>

          <article className="privacy__policy__item" aria-labelledby="data">
            <h2 id="data" className="privacy__policy__subtitle">
              Données collectées
            </h2>
            <ul className="privacy__policy__list">
              <li className="privacy__policy__list__item">
                Données d'identification (nom, email)
              </li>
              <li className="privacy__policy__list__item">
                Données de navigation (via cookies)
              </li>
              <li className="privacy__policy__list__item">
                Données de contributions (recettes publiées)
              </li>
            </ul>
          </article>

          <article className="privacy__policy__item" aria-labelledby="purpose">
            <h2 id="purpose" className="privacy__policy__subtitle">
              Finalité
            </h2>
            <ul className="privacy__policy__list">
              <li className="privacy__policy__list__item">
                Création et gestion de compte utilisateur
              </li>
              <li className="privacy__policy__list__item">
                Publication de recettes culinaires
              </li>
              <li className="privacy__policy__list__item">
                Modération du contenu
              </li>
              <li className="privacy__policy__list__item">
                Statistiques anonymes
              </li>
            </ul>
          </article>

          <article
            className="privacy__policy__item"
            aria-labelledby="retention"
          >
            <h2 id="retention" className="privacy__policy__subtitle">
              Conservation
            </h2>
            <p className="privacy__policy__text">
              Les données sont conservées tant que l'utilisateur est actif, puis
              supprimées après un délai de 12 mois d'inactivité
            </p>
          </article>

          <article
            className="privacy__policy__item"
            aria-labelledby="user-rights"
          >
            <h2 id="user-rights" className="privacy__policy__subtitle">
              Vos droits
            </h2>
            <ul className="privacy__policy__list">
              <li className="privacy__policy__list__item">
                Accès, modification et suppression des données personnelles
                depuis votre profil ou par mail
              </li>
              <li className="privacy__policy__list__item">
                Droit à la portabilité et à l'effacement selon le RGPD
              </li>
            </ul>
          </article>
        </section>
      </main>

      {/* contenu de nos pages de navigation secondaires */}
      <Footer />
    </>
  );
}
