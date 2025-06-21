import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import NavBar from "../Components/Header/NavBar";
import SearchForm from "../Components/Header/SearchForm";
import Footer from "../Components/Footer";

export default function TermsAndConditions() {
  return (
    <>
      {/* Helmet gère le contenu de la balise head, ici le titre ainsi que nos meta données afin d'améliorer le référencement (SEO)*/}
      <Helmet>
        <title>Terms and conditions</title>
        <meta
          name="description"
          content="Conditions Générales d'Utilisation du site Ciné-Délices"
        />
      </Helmet>

      {/* contenu de nos pages de navigation principales */}
      <Header>
        <NavBar />
        <SearchForm />
      </Header>

      {/* contenu de notre page CGU */}
      <main className="main">
        <section className="terms__and__conditions">
          <article
            className="terms__and__conditions__item"
            aria-labelledby="terms__and__conditions-title"
          >
            <h1
              id="terms__and__conditions-title"
              className="terms__and__conditions__title"
            >
              Conditions Générales d'Utilisation
            </h1>
          </article>

          <article
            className="terms__and__conditions__item"
            aria-labelledby="object"
          >
            <h2 id="object" className="terms__and__conditions__subtitle">
              Objet
            </h2>
            <p className="terms__and__conditions__text">
              Les présentes Conditions Générales d'Utilisation encadrent l'accès
              au site Ciné-Délices et son utilisation.
            </p>
          </article>

          <article
            className="terms__and__conditions__item"
            aria-labelledby="sign__up"
          >
            <h2 id="sign__up" className="terms__and__conditions__subtitle">
              Inscription
            </h2>
            <p className="terms__and__conditions__text">
              La création d'un compte est nécessaire pour publier ou gérer des
              recettes.
            </p>
          </article>

          <article
            className="terms__and__conditions__item"
            aria-labelledby="publication__rules"
          >
            <h2
              id="publication__rules"
              className="terms__and__conditions__subtitle"
            >
              Règles de publication
            </h2>
            <p className="terms__and__conditions__text">
              Les utilisateurs s'engagent à publier des contenus respectueux de
              la loi, du droit d'auteur, et de la communauté.
            </p>
          </article>

          <article
            className="terms__and__conditions__item"
            aria-labelledby="responsability"
          >
            <h2
              id="responsability"
              className="terms__and__conditions__subtitle"
            >
              Responsabilité
            </h2>
            <p className="terms__and__conditions__text">
              Ciné-Délices n'est pas responsable des contenus publiés par ses
              membres. L'équipe se réserve le droit de supprimer tout contenu
              inapproprié.
            </p>
          </article>

          <article
            className="terms__and__conditions__item"
            aria-labelledby="responsability"
          >
            <h2
              id="responsability"
              className="terms__and__conditions__subtitle"
            >
              Responsabilité
            </h2>
            <p className="terms__and__conditions__text">
              Ciné-Délices n'est pas responsable des contenus publiés par ses
              membres. L'équipe se réserve le droit de supprimer tout contenu
              inapproprié.
            </p>
          </article>
          
        </section>
      </main>

      {/* contenu de nos pages de navigation secondaires */}
      <Footer />
    </>
  );
}
