// Test du rendu de nos composants
import FilterForm from "../FilterForm";
import Finder from "../FilterForm/Finder";
import Checkbox from "../FilterForm/Checkbox";

// Import du hook personnalisé
import useFilterCheckbox from "../../Hook/useFilterCheckbox";

import AppRouter from "../Router";

export default function App() {
    // On simule un tableau de donnée pour nos tests statiques
    const data = {
        "categories": [
            {
                id: 1,
                name: "Entrée",
                slug: "entree"
            },
            {
                id: 2,
                name: "Plat",
                slug: "plat"
            },
            {
                id: 3,
                name: "Dessert",
                slug: "dessert"
            },
            {
                id: 4,
                name: "Boissons",
                slug: "boissons"
            }
        ],
        "genres": [
            {
                id: 1,
                name: "Thriller",
                slug: "thriller",
            },
            {
                id: 2,
                genre: "Action",
                genre_slug: "action",
            }
        ]
    }

    const { handleChange, handleSubmit } = useFilterCheckbox('');

    /**
     * Dans le cas ou nous serions sur la page recette
     * Nous souhaiterons afficher les categories "principales"
     * Pour notre formulaire de recherche rapide
     */

    // Nous filtrons nos catégories pour ne récupérer que les objets selon la condition suivante
    const quickSearch = data.categories.filter(categorie =>
        /**
         * Nous ne voulons récupéré que Entrée, Plat et Dessert
         * Si une correspondance entre la valeur de la propriété slug et de notre tableau de valeur existe
         * Alors renvoie true
         */
        // Return implicite car il n'y a qu'une instruction
        ["entree", "plat", "dessert"].includes(categorie.slug)
    )
    // On récupère bien nos objets qui inluent les slugs : entree, plat, dessert
    console.log(quickSearch)
    return (
        <>
            <FilterForm title="Recherche Rapide" >
                <Finder handleSubmit={handleSubmit}>
                    {/* Test d'appel de plusieurs sous-composants Checkbox avec leurs propos associées */}

                </Finder>
            </FilterForm>
            {/* Ici pour le filtre avancé */}
            <FilterForm title={"Recherche avancées"}>
                <Finder handleSubmit={handleSubmit}>

                </Finder>
            </FilterForm>
        </>
    );
}