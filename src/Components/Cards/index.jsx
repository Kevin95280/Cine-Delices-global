// Création du composant qui représentera nos carousels
/**
 * Props
 * title : Titre du carousel
 * children : card qui affichera la recette ou film correspondante
 */

export default function Cards({ title, children }) {
    return (
        <div className="container">
            <h3>{title}</h3>
            {children}
        </div>
    )
}