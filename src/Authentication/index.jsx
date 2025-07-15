/**
 * Gestion des routes autorisées avec React
 * Nous utiliserons ici les mécaniques de ``context``
 * @link https://fr.react.dev/reference/react/createContext
 * On va pouvoir créer un "environnement"
 * Qui nous permettra de véhiculer des données récurrentes
 * Sans avoir besoin de passer par des props
 */

import { createContext, useState, useEffect } from "react";

/**
 * On initialise un nouveau contexte qu'on exportera
 * @link https://fr.react.dev/reference/react/createContext#importing-and-exporting-context-from-a-file
*/

export const AuthContext = createContext(null);

/**
 * Nous initialiserons une fonction qui contiendra le ``Provider``
 * Qui fournira les valeurs récupérées à tous les composants lisant ce contexte
 * @link https://fr.react.dev/reference/react/createContext#provider
 */
export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Fonction lancée après chargement du rendu du composant
    useEffect(() => {
        // On récupère le token stocké dans localStorage
        const storedToken = localStorage.getItem("token");
        // Si le token a été généré et récupéré
        if (storedToken) {
            // On met à jour nos variables d'état
            setToken(storedToken);
            setIsAuthenticated(true)
        }
    /**
     * On souhaite lancer cette opération qu'une fois après le chargement du rendu
     * @link https://fr.react.dev/reference/react/useEffect#examples-dependencies
     */
    }, [])

    /**
     * Mise à jour des variables d'états à la connexion
     * @param {string} newToken - Token d'authentification 
     */
    const login = (newToken) => {
        setToken(newToken)
        setIsAuthenticated(true)
        localStorage.setItem("token", newToken)
    }

    /**
     * Le contexte fonctionne comme un composant React
     */
    return (
        <AuthContext.Provider value={{ token, isAuthenticated, login }}>
            { children }
        </AuthContext.Provider>
    )
}