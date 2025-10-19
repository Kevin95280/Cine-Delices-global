import { useState } from "react"

export default function useFilterCheckbox() {
    /**
    * Variable d'état qui vérifie l'état de la checkbox
    * False en état initial
    */
    const [isChecked, setIsChecked] = useState(false)
    // Variable d'état qui gère la récupération de la valeur de la checkbox
    const [isValue, setIsValue] = useState('valeur')

    /**
     * Handler - Action à la soumission
     * @param {string} value - Valeur de la checkbox lors d'un clique
     */
    const handleSubmit = (value) => {
        // Affichage de la valeur de la checkbox coché en alert
        alert(`Valeur de la checkbox: ${value}`)
    }

    /**
     * Handler - Permet de modifier la valeur de notre état
     * Evènement associé à l'input
     */
    const handleChange = (e) => {
        // Modification de la variable d'état de la checkbox au clique
        setIsChecked(!isChecked);
        // Condition, si la checkbox est coché alors
        if (e.target.checked) {
            // On stock la valeur de l'attribut name dans une constante
            const value = e.target.name;
            // On modifie la variable d'état avec la valeur récupéré
            setIsValue(value)
            // On passe en argument cette même valeur lors de la soumission
            handleSubmit(value)
        }
    }

    return {
        isChecked,
        setIsChecked,
        isValue,
        setIsValue,
        handleChange,
        handleSubmit
    }
}
