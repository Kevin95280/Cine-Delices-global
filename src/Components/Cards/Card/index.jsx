// Import d'une image pour les tests de rendu
import testImage from '../../../assets/image-test.jpg';

export default function Card({ title, authorName }) {
    return (
        <div className="card">
            <div className="card__header">
                {/* Image statique pour les tests d'affichage */}
                <img src={ testImage } alt="Image test" className="card__image"/>
            </div>
            <div className="card__body">
                <h4 className="card__title">{ title }</h4>
                <span className="author">{ authorName }</span>
            </div>
        </div>
    )
}