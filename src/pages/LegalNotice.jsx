import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import NavBar from "../Components/Header/NavBar";
import SearchForm from "../Components/Header/SearchForm";
import Footer from "../Components/Footer";

export default function LegalNotice() {
  return (
    <>
      {/* Helmet gère le contenu de la balise head, ici le titre ainsi que nos meta données afin d'améliorer le référencement (SEO)*/}
      <Helmet>
        <title>Legal Notice - Ciné-Délices</title>
        <meta
          name="description"
          content="Mentions légales du site Ciné-Délices"
        />
      </Helmet>

      {/* contenu de nos pages de navigation principales */}
      <Header>
        <NavBar />
        <SearchForm />
      </Header>

      {/* contenu principal de notre page */}
      <main className="main">
        <section>
          <article className="legal__notice" aria-labelledby="legal-title">
            <h1 id="legal-title" className="legal__title">
              Mentions légales
            </h1>
          </article>

          <article className="legal__infos" aria-labelledby="legal-title">
            <h2 id="legal-infos-title" className="legal__subtitle">
              Informations légales
            </h2>
            <div className="legal__info">
              <p className="legal__label">Nom du site : Ciné-Délices</p>
            </div>
            <div className="legal__info">
              <p className="legal__label">
                Éditeur : O'Flix (projet fictif dans un cadre pédagogique)
              </p>
            </div>
            <div className="legal__info">
              <p className="legal__label">
                Responsable de la publication : Kevin Coelho (Scrum Master)
              </p>
            </div>
            <div className="legal__info">
              <p className="legal__label">
                Contact :
                <a
                  className="legal__link"
                  href="mailto:contact@cine-delices.fr"
                >
                  contact@cine-delices.fr
                </a>
              </p>
            </div>
            <div className="legal__info">
              <p className="legal__label">Hébergeur : Projet étudiant</p>
            </div>
            <div className="legal__info">
              <p className="legal__label">
                Statut : Projet étudiant - sans but commercial
              </p>
            </div>
          </article>
        </section>
      </main>

      {/* contenu de nos pages de navigation secondaires */}
      <Footer />
    </>
  );
}
