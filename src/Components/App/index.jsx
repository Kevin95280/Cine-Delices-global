// Test du rendu de nos composants
import FilterForm from "../FilterForm";
import QuickFinder from "../FilterForm/QuickFinder";
import Checkbox from "../FilterForm/Checkbox";

// Import du hook personnalisé
import useFilterCheckbox from "../../Hook/useFilterCheckbox";

import AppRouter from "../Router";

export default function App() {
    // On simule un tableau de donnée pour nos tests statiques
    const data = {
        "recipes": [
            {
                id: 1,
                title: 'Titre de la recette 1',
                description: 'Description de la recette 1',
                category: "Entrée",
                category_slug: "entree"
            },
            {
                id: 2,
                title: 'Titre de la recette 2',
                description: 'Description de la recette 2',
                category: "Plat",
                category_slug: "plat"
            },
                        {
                id: 3,
                title: 'Titre de la recette 3',
                description: 'Description de la recette 3',
                category: "Entrée",
                category_slug: "entree"
            }
        ],
        "movies": [
            {
                id: 1,
                title: 'Titre du film 1',
                description: 'Description du film 1',
                genre: "Thriller",
                genre_slug: "thriller",
            },
            {
                id: 2,
                title: 'Titre du film 2',
                description: 'Description du film 2',
                genre: "Action",
                genre_slug: "action",
            }
        ]
    }

    const { handleChange, handleSubmit } = useFilterCheckbox('');

    /**
     * Pour l'affichage de nos checkbox dans notre formulaire de recherche rapide
     * Nous souhaitons qu'une seule checkbox par catégorie (dans le cas des recettes)
     * Ne soit affichées
     */

    /**
     * Nous initialisons un objet Set
     * @link https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set
     * Qui nous permettra d'y stocker des valeurs uniques
     */
    const uniqueCategories = new Set();

    /**
     * On filtre nos recettes pour n'y récupérer qu'un exemplaire de recette par categorie
     * Nous les stockerons dans un nouveau tableau appelé categoriesFiltered
     */
    const categoriesFiltered = data.recipes.filter(recipe => {
        // Condition : Si la valeur de la propriété recipe.category_slug est présente dans notre objet uniqueCategories
        if (uniqueCategories.has(recipe.category_slug)) {
            // Alors nous retournons false
            return false;
            // Sinon
        } else {
            // La valeur de recipe.category_slug est ajouté dans uniqueCategories
            uniqueCategories.add(recipe.category_slug);
            return true;
        }
    })
    return (
        <FilterForm title="Recherche Rapide" >
            <QuickFinder handleSubmit={handleSubmit}>
                {/* Test d'appel de plusieurs sous-composants Checkbox avec leurs propos associées */}
                {
                    /**
                     * Ici, pour nos test, nous créons nos checkbox à partir de recettes fictives filtrées
                     * Mais dans l'idée, les filtres se feront directement sur l'entité Category de notre BDD
                     * Et l'affichage se ferra par correspondance des valeurs et sous conditions
                    */ 
                    categoriesFiltered.map(recipe => (
                        <Checkbox
                            key={recipe.id}
                            id={recipe.category_slug}
                            label={recipe.category}
                            handleChange={handleChange}
                        />
                    ))
                }
            </QuickFinder>
        </FilterForm>
    );
}