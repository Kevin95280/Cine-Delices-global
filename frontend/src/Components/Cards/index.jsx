// Création du composant qui représentera nos carousels
/**
 * Props
 * title : Titre du carousel
 * children : card qui affichera la recette ou film correspondante
 */

import './style.scss'

export default function Cards({ title, children }) {
    return (
        <div className="carousel__wrapper">
            <h3 className="carousel__title">{title}</h3>
            <div className="card__wrapper">
                {children}
            </div>
        </div>
    )
}