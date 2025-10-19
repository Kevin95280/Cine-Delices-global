import "./style.scss";
import { Link } from "react-router-dom";

export default function Card({ id, title, authorName, image, type }) {
    return (
        <div className="card">
            <div className="card__header">
                {/* Image d'illustration de la recette */}
                <Link to={`/${type === "movie" ? "movies-and-series" : "recipes"}/${id}`}>
                <div className="card__figure">
                    <img src={image} alt={`Visuel de ${title}`} className="card__image" />
                </div>
                </Link>
            </div>

            <div className="card__body">
                {/* Titre de la recette et lien vers la page de détails */}
                  <Link to={`/${type === "movie" ? "movies-and-series" : "recipes"}/${id}`}
                    className="card__body__link"
                    aria-label={`Voir la fiche de ${title}`}
                >
                    <h4 className="card__title">{title}</h4>
                </Link>
                {authorName && (
                    <>
                <span> - </span>
                <Link to="#" className="card__author" aria-label={`Afficher toutes les recettes de ${authorName}`}>
                {authorName}
                </Link>
                   </>
                 )}
            </div>
        </div>
    )
}