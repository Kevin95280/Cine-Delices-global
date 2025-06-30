import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import NavBar from "../Components/Header/NavBar";
import SearchForm from "../Components/Header/SearchForm";
import Footer from "../Components/Footer";

export default function AboutUs() {
  return (
    <>
      {/* Helmet gère le contenu de la balise head, ici le titre ainsi que nos meta données afin d'améliorer le référencement (SEO)*/}
      <Helmet>
        <title>About - Ciné-Délices</title>
        <meta name="description" content="Apprenez en un peu plus sur nous" />
      </Helmet>

      {/* contenu de nos pages de navigation principales */}
      <Header>
        <NavBar />
        <SearchForm />
      </Header>

      {/* contenu principal de notre page */}
      <main className="main">
        <section className="about">
          <article
            className="about__intro"
            aria-labelledby="about-cine-delices"
          >
            <h1 id="about-cine-delices" className="about__title">
              À propos de Ciné-Délices
            </h1>
            <img className="about__logo" src="logo_pleine_page.png" alt="logo du site" />
          </article>

          <article
            className="about__section"
            aria-labelledby="what-is-cine-delices"
          >
            <h2 id="what-is-cine-delices" className="about__subtitle">
              Qu'est-ce que Ciné-Délices ?
            </h2>
            <p className="about__text">
              Ciné Délices, c'est la rencontre savoureuse entre la cuisine et le
              cinéma. Nous avons conçu et développé un site web de recettes de
              cuisine inspirée du cinéma et des séries télévisées, dans le but
              de proposer une expérience culinaire immersive, originale et
              ludique. Chaque recette puise son inspiration dans une œuvre, une
              scène culte ou un univers fictionnel. Qu'il s'agisse de reproduire
              un plat iconique aperçu à l'écran ou de créer une recette inédite
              évoquant l'ambiance d'un film, notre objectif est de faire voyager
              vos papilles autant que votre imagination.
            </p>
          </article>

          <article className="about__section" aria-labelledby="who-we-are">
            <h2 id="who-we-are" className="about__subtitle">
              Qui sommes-nous ?
            </h2>
            <p className="about__text">
              Ciné Délices est un projet porté par une entreprise fictive de
              divertissement spécialisée dans le streaming et la production
              cinématographique. En quête de nouvelles expériences interactives
              à proposer à ses utilisateurs, l'entreprise a imaginé ce site
              comme un prolongement gourmand de l'univers audiovisuel. Ce projet
              s'inscrit dans une démarche innovante : lier contenus culturels et
              expériences sensorielles pour renforcer l'attachement du public à
              ses œuvres favorites.
            </p>
          </article>

          <article className="about__section" aria-labelledby="for-whom">
            <h2 id="for-whom" className="about__subtitle">Pour qui ?</h2>
            <p className="about__text">
              Ce site s'adresse à tous les amoureux de saveurs et de fictions :
            </p>
            <nav className="about__nav" aria-label="target">
              <ul className="about__list">
                <li className="about__list__item">
                  Les amateurs de cuisine, qu'ils soient débutants ou
                  passionnés.
                </li>
                <li className="about__list__item">
                  Les cinéphiles et sérivores, en quête de nouvelles manières de
                  prolonger l'expérience de visionnage.
                </li>
                <li className="about__list__item">
                  Les curieux gourmands à la recherche d'inspiration, de
                  créativité et d'émotions partagées.
                </li>
              </ul>
            </nav>
          </article>
        </section>
      </main>

      {/* contenu de nos pages de navigation secondaires */}
      <Footer />
    </>
  );
}
