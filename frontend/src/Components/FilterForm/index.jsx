// Composant parent de nos différents formulaire de filtrage
export default function FilterForm({ title, children }) {
    return (
        <div className="container-form">
            <span>{title}</span>
            {children}
        </div>
    )
}