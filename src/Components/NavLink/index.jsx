// Appel de notre composant NavLink depuis react-router-dom
import { NavLink } from "react-router-dom";

export default function NavLink() {
  return (
    // Composant navbar pour la navigation "Recettes" et "Films & Séries"
    <nav className="nav-link">
      <ul>
        <li>
          <NavLink to="/recipes">Recettes</NavLink>
        </li>
        <li>
          <NavLink to="/movies-and-series">Films & Séries</NavLink>
        </li>
      </ul>
    </nav>
  );
}