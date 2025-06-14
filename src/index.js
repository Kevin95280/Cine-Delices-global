// Création de notre composant rooter
import { createRoot } from "react-dom/client";

// Import du composant App, qui s'occupera de renvoyer notre rendu
import App from "./Components/App";

// Nous ciblons notre élément racine
const rootContainer = createRoot(document.getElementById('root'));

// Nous renvoyons le rendu dans notre élément racine
rootContainer.render(<App />);