// Appel de notre composant NavLink depuis react-router-dom
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    // Composant navbar pour la navigation "Recettes" et "Films & Séries"
    <nav>
      <ul>
        <li>
          <a href="/">
            {/* Image du logo à compléter */}
            <img src="#" alt="logo cine-delices" />
          </a>
        </li>
        <li>
          <NavLink to="/recettes">Recettes</NavLink>
        </li>
        <li>
          <NavLink to="/films-series">Films & Séries</NavLink>
        </li>
      </ul>
    </nav>
  );
}