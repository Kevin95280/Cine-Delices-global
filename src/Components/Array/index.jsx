// Utilisation de props
// Dans un premier temps pour gérer le titre de niveau 2 lors de l'affichage du rendu
export default function Array({ title, data }) {
    return (
        <>
            <div className="array-container">
                <h1>{ title }</h1>
                <div className="table-wrapper">
                    <table>
                        {/* Possibilité de ne pas le faire apparaître avec une classe sr-only pour garder le côté accessible */}
                        <caption className="sr-only">
                            Toutes les publications de mes différentes recettes
                        </caption>
                        <thead>
                            {/* Gestion dynamique des titres des colonnes en fonction de la page où le composant sera utilisé */}
                            <tr>
                                {/* Pour le test du premier rendu, utilisation statique de contenu */}
                                {data.map((item, index) => (
                                    <th key={`label-${index}`}>{item.label}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Ici, gestion dynamique de l'affichage en fonction des données récupéré */}
                            <tr>
                                {data.map((item, index) => (
                                    <td key={`value-${index}`}>{item.value}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}