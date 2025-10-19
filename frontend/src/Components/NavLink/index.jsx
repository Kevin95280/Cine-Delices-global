// Appel de notre composant NavLink depuis react-router-dom
import { NavLink } from "react-router-dom";

export default function NavLink() {
  return (
    // Composant navlink pour la navigation "Recettes" et "Films & Séries"
    <nav className="nav-link">
              <li className="nav-item glass-effect">
                <NavLink to="/recipes">
                  <span className="glass-text">Recettes</span>
                </NavLink>
              </li>
              <li className="nav-item glass-effect">
                <NavLink to="/movies-and-series">
                  <span className="glass-text">Films & Séries</span>
                </NavLink>
              </li>
    </nav>
  );
}