import "./style.scss";
import { Link } from "react-router-dom";

export default function Card({ id, title, authorName, image }) {
    return (
        <div className="card">
            <div className="card__header">
                {/* Image statique pour les tests d'affichage */}
                <Link to={`/recipes/${id}`}>
                    <div className="card__figure">
                        <img src={image} alt={`Photo et lien vers la recette ${title}`} className="card__image" />
                    </div>
                </Link>

            </div>
            <div className="card__body">
                <Link to={`/recipes/${id}`} className="card__body__link" aria-label={`Voir la page détails de la recette ${title}`}>
                    <h4 className="card__title">{title}</h4>
                </Link>
                <span> - </span>
                <Link to="#" className="card__author" aria-label={`Afficher toutes les recettes de ${authorName}`}>
                {authorName}
                </Link>
            </div>
        </div>
    )
}