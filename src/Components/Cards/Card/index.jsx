export default function Card({ title, authorName, image }) {
    return (
        <div className="card">
            <div className="card__header">
                {/* Image statique pour les tests d'affichage */}
                <img src={ image } alt="Image test" className="card__image"/>
            </div>
            <div className="card__body">
                <h4 className="card__title">{ title }</h4>
                <span className="author">{ authorName }</span>
            </div>
        </div>
    )
}