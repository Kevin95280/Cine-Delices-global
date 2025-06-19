import "./style.scss";

export default function Card({ title, authorName, image }) {
    return (
        <div className="card">
            <div className="card__header">
                {/* Image statique pour les tests d'affichage */}
                <a className="card" href="#">
                <img src={image} alt={`Photo et lien vers la recette ${ title }`} className="card__image"/>
                </a>
            </div>
            <div className="card__body">
                <a className="card__body__link" href="#" aria-label={`Voir la page détails de la recette ${ title }`}>
                    <h4 className="card__title">{ title }</h4>
                </a>
                <span className="author">{ authorName }</span>
            </div>
        </div>
    )
}