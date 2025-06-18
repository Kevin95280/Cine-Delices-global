import { useState } from "react"
export default function QuickFinder() {
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

    /**
     * Variable d'état qui vérifie l'état de la checkbox
     * False en état initial
     */
    const [isChecked, setIsChecked] = useState(false)
    // Variable d'état qui gère la récupération de la valeur de la checkbox
    const [isValue, setIsValue] = useState('valeur')
    /**
     * Handler - Permet de modifier la valeur de notre état
     * Evènement associé à l'input
     */
    const handleChange = (e) => {
        setIsChecked(!isChecked);
    }

    return (
    // Fonction pas encore initialisé pour la soumission
    <form method="POST" onSubmit={(e) => null}>
        <div>
            <input
            type="checkbox"
            id="test"
            name="test"
            // Ce qui nous permet de contrôler notre input et donc de modifier grâce au booléen si checké ou non
            checked={isChecked}
            // Evènement associé
            onChange={handleChange}
            />
            <label htmlFor="test">Test</label>
        </div>
    </form>

    )
}