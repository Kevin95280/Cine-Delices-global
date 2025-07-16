// Import des styles pour react-slick
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";

// Création de notre composant rooter
import { createRoot } from "react-dom/client";

// Import du composant App, qui s'occupera de renvoyer notre rendu
import App from "./Components/App";

// Import de notre contexte
import { AuthProvider } from "./Authentication";

// Nous ciblons notre élément racine
const rootContainer = createRoot(document.getElementById('root'));

// Nous renvoyons le rendu dans notre élément racine
rootContainer.render(
    // Tous les composants enfants hériterons des valeurs du contexte
    <AuthProvider>
        <App />
    </AuthProvider>
);