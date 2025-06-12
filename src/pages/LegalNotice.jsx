import { Helmet } from "react-helmet";

export default function LegalNotice() {
  return (
    <>
      <Helmet>
        <title>Legal Notice - Ciné-Délices</title>
        <meta
          name="description"
          content="Mentions légales du site Ciné-Délices"
        />
      </Helmet>

      <section className="legal__notice" aria-labelledby="legal-title">
        <h1 id="legal-title" className="legal__title">
          Mentions légales
        </h1>
      </section>

      <section className="legal__infos" aria-labelledby="legal-title">
        <h2 id="legal-infos-title" className="legal__subtitle">
          Informations légales
        </h2>
        <div className="legal__info">
          <p className="legal__label">Nom du site : Cine-Delices</p>
        </div>
        <div className="legal__info">
          <p className="legal__label">
            Éditeur : O'Flix (projet fictif dans un cadre pedagogique)
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
            <a className="legal__link" href="mailto:contact@cine-delices.fr">
              contact@cine-delices.fr
            </a>
          </p>
        </div>
        <div className="legal__info">
          <p className="legal__label">
            Hebergeur : [Nom de l'hebergeur ecoresponsable]
          </p>
        </div>
        <div className="legal__info">
          <p className="legal__label">
            Statut : Projet etudiant - sans but commercial
          </p>
        </div>
      </section>
    </>
  );
}
