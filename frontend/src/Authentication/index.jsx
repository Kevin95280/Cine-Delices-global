/**
 * Gestion des routes autorisées avec React
 * Nous utiliserons ici les mécaniques de ``context``
 * @link https://fr.react.dev/reference/react/createContext
 * On va pouvoir créer un "environnement"
 * Qui nous permettra de véhiculer des données récurrentes
 * Sans avoir besoin de passer par des props
 */

import { createContext, useState, useEffect, useContext } from "react";


/**
 * On initialise un nouveau contexte qu'on exportera
 * @link https://fr.react.dev/reference/react/createContext#importing-and-exporting-context-from-a-file
*/
export const AuthContext = createContext(null);

// On crée un hook personnalisé pour accéder au contexte d'authentification
// Ce hook permet d'utiliser le contexte d'authentification dans n'importe quel composant
export function useAuth() {
  return useContext(AuthContext);
}
/**
 * Nous initialiserons une fonction qui contiendra le ``Provider``
 * Qui fournira les valeurs récupérées à tous les composants lisant ce contexte
 * @link https://fr.react.dev/reference/react/createContext#provider
 */
export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoadingUser, setIsLoadingUser] = useState(true);
    const [username, setUsername] = useState(null);
    const [userData, setUserData] = useState(null);

    // Fonction lancée après chargement du rendu du composant
    useEffect(() => {
        // On récupère le token stocké dans localStorage
        const storedToken = localStorage.getItem("token");
        // Si le token a été généré et récupéré
        if (storedToken) {
            // On met à jour nos variables d'état
            setToken(storedToken);
            setIsAuthenticated(true);

            // Appel à l’API pour récupérer le pseudo
            fetch(`${API_URL}/api/users/me`, {
                headers: { Authorization: `Bearer ${storedToken}` }
            })
                // On récupère les données de l'utilisateur
                .then(res => {
                    if (!res.ok) throw new Error("Erreur récupération user");
                    return res.json();
                    })
                .then(data => {
                    // On met à jour le pseudo de l'utilisateur
                    setUsername(data.username);
                    // On stocke les données utilisateur dans l'état
                    setUserData(data);
                })
                .catch(err => console.error("Erreur init AuthContext :", err.message))
                //quoi qu’il arrive, on arrête l’état de chargement (isLoadingUser) après la tentative de récupération du pseudo.
                .finally(() => setIsLoadingUser(false));
        // Si le token n'est pas présent, on met à jour l'état de chargement
        } else {
            setIsLoadingUser(false);
        }
    }, []);
    /**
     * On souhaite lancer cette opération qu'une fois après le chargement du rendu
     * @link https://fr.react.dev/reference/react/useEffect#examples-dependencies
     */

    /**
     * Mise à jour des variables d'états à la connexion
     * @param {string} newToken - Token d'authentification 
     */
    const login = async (newToken) => {
        setToken(newToken);
        setIsAuthenticated(true);
        localStorage.setItem("token", newToken);

        try {
            const response = await fetch(`${API_URL}/api/users/me`, {
            headers: { Authorization: `Bearer ${newToken}` }
            });

            if (!response.ok) throw new Error("Erreur récupération utilisateur");
            const data = await response.json();
            console.log("Données utilisateur reçues :", data);


            if (!data.is_active) {
                alert("Votre compte est désactivé. Veuillez contacter un administrateur.");
                localStorage.removeItem("token");
                setToken(null);
                setUserData(null);
                setIsAuthenticated(false);
                return; // Empêche la suite de la connexion
}
            setUsername(data.username); // Pour une mise à jour immédiate, sinon on devrait rafraichir la page pour avoir l'affichage du pseudo et le bouton de déconnexion
            setUserData(data); // On stocke les données utilisateur
        } catch (error) {
            console.error("Erreur lors du login :", error.message);
        } finally {
            setIsLoadingUser(false); // On arrête l'état de chargement}
        }
        };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setIsAuthenticated(false);
        setUsername(null);
        setUserData(null);
        };

    /**
     * Le contexte fonctionne comme un composant React
     */
    return (
        <AuthContext.Provider value={{ token, isAuthenticated, isLoadingUser, username, userData, login, logout}}>
            { children }
        </AuthContext.Provider>
    );
}