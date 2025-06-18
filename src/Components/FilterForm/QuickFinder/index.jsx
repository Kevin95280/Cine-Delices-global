export default function QuickFinder({ handleSubmit, children }) {
    const data = [
        {
            recepie1: {
                title: 'Titre de la recette 1',
                description: 'Description de la recette 1',
                category: "Entrée"
            }
        },
        {
            movie1: {
                title: 'Titre du film 1',
                description: 'Description du film 1',
                genre: "Thriller"
            }
        }
    ]
    return (
    <form method="POST" onSubmit={handleSubmit}>
        { children }
    </form>

    )
}