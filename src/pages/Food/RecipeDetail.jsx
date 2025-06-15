import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Recipes() {
  return (
    <>
      {/* Helmet gère le contenu de la balise head, ici le titre ainsi que nos meta données afin d'améliorer le référencement (SEO)*/}
      <Helmet>
        <title>Recipe detail - Ciné-Délices</title>
        <meta
          name="description"
          content="Découvrez notre recette d'escalope de dinde à la feta et tomates cerise, un plat léger et savoureux."
        />
      </Helmet>

      {/* contenu de nos pages de navigation principales */}
      <Header />

      {/* contenu principal de notre page */}
      <main className="main">
        <section className="recipe">
          <article className="recipe__item" aria-labelledby="recipe-title">
            <h1 className="recipe__title" id="recipe-title">
              Escalope de dinde à la feta et tomates cerise
            </h1>
            <img
              className="recipe__image"
              src="#"
              alt="Escalope de dinde à la feta et tomates cerise"
            />
            <p className="recipe__description">
              Un plat à la fois léger, savoureux et plein de soleil ! Les
              escalopes de dinde, tendres et dorées sont accompagnées de tomates
              cerises juteuses rôties au four et de morceaux de feta fondants.
              Le tout est relevé d'un filet d'huile d'olive, d'herbes
              méditerranéennes et d'un soupçon d'ail pour exhaler les saveurs.
              C'est une recette simple, rapide et colorée, idéale pour un
              déjeuner en semaine ou un dîner léger, servie avec une salade
              croquante ou un peu de riz.
            </p>
          </article>

          {/* Informations pratiques */}
          <article className="recipe__item" aria-labelledby="recipe-infos">
            <h2 className="recipe__subtitle" id="recipe-infos">
              Informations :
            </h2>
            <ul className="recipe__infos__list">
              <li className="recipe__info">Nombres de parts : 2 personnes</li>
              <li className="recipe__info">
                Temps de préparation : 15 minutes
              </li>
              <li className="recipe__info">Temps de cuisson : 20 minutes</li>
              <li className="recipe__info">Budget : bon marché</li>
              <li className="recipe__info">Difficulté : facile</li>
            </ul>
          </article>

          {/* Ingrédients */}
          <article
            className="recipe__item"
            aria-labelledby="recipe-ingredients"
          >
            <h2 className="recipe__subtitle" id="recipe-ingredients">
              Ingrédients :
            </h2>
            <ul className="recipe__ingredients__list">
              <li className="recipe__ingredient">15 tomates</li>
              <li className="recipe__ingredient">Thym et herbes de Provence</li>
              <li className="recipe__ingredient">
                2 escalopes de dinde bien fines
              </li>
              <li className="recipe__ingredient">
                ½ bloc de feta (200g environ)
              </li>
              <li className="recipe__ingredient">Huile d'olive</li>
            </ul>
          </article>

          {/* Étapes de préparation */}
          <article className="recipe__steps" aria-labelledby="recipe-steps">
            <h2 className="recipe__subtitle" id="recipe-steps">
              Préparation :
            </h2>
            <ol className="recipe__steps__list">
              <li className="recipe__step">
                Étape 1 : Couper la feta dans la longueur, en fines tranches.
              </li>
              <li className="recipe__step">
                Étape 2 : Faites cuire légèrement les escalopes dans une poêle.
              </li>
              <li className="recipe__step">
                Étape 3 : Pendant ce temps, mettez les tomates cerises au four,
                arrosez-les d'huile d'olive et faites-les cuire à feu doux
                pendant une quinzaine de minutes.
              </li>
              <li className="recipe__step">
                Étape 4 : Dans un plat de service qui va au four, disposez les
                escalopes, en les séparant chaque fois d'une belle tranche de
                feta.
              </li>
              <li className="recipe__step">
                Étape 5 : Arrosez d'huile d'olive, d'herbes de Provence et
                versez également les tomates cerises cuites.
              </li>
              <li className="recipe__step">
                Étape 6 : Passez au four moyen (préchauffé à thermostat 6/180°C)
                environ 20 mn avant de passer à table.
              </li>
              <li className="recipe__step">
                Étape 7 : Servez avec des petites pommes de terre ou des
                croquettes.
              </li>
            </ol>
          </article>

          {/* Anecdote */}
          <article
            className="recipe__anecdote"
            aria-labelledby="recipe-anecdote"
          >
            <h2 className="recipe__subtitle" id="recipe-anecdote">
              Anecdote :
            </h2>
            <p className="recipe__anecdote__text">
              On raconte qu'un cuisinier pressé aurait renversé par mégarde des
              tomates cerises et de la feta sur des escalopes de dinde... Il a
              enfourné le tout pour ne rien gâcher et a créé une recette adorée
              depuis !
            </p>
          </article>
        </section>
      </main>

      {/* contenu de nos pages de navigation secondaires */}
      <Footer />
    </>
  );
}
