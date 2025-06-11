export default function Array() {
    return (
        <>
            <h2>Mes publications</h2>
            <table>
                {/* Possibilité de ne pas le faire apparaître avec une classe sr-only pour garder le côté accessible */}
                <caption>
                    Toutes les publications de mes différentes recettes
                </caption>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Categorie</th>
                        <th>Date de création</th>
                        <th>Note des utilisateurs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Recette 1</th>
                        <td>Plat</td>
                        <td>10/06/2025</td>
                        <td>&#9733; &#9733; &#9733; &#9734; &#9734;</td>
                    </tr>
                    <tr>
                        <th>Recette 2</th>
                        <td>Dessert</td>
                        <td>10/06/2025</td>
                        <td>&#9733; &#9733; &#9733; &#9733; &#9734;</td>
                    </tr>
                    <tr>
                        <th>Recette 3</th>
                        <td>Entrée</td>
                        <td>10/06/2025</td>
                        <td>&#9733; &#9734; &#9734; &#9734; &#9734;</td>
                    </tr>
                    <tr>
                        <th>Recette 4</th>
                        <td>Plat</td>
                        <td>10/06/2025</td>
                        <td>&#9733; &#9733; &#9733; &#9733; &#9734;</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}