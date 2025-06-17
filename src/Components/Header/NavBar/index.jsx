// Appel de notre composant NavLink depuis react-router-dom
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    // Composant navbar pour la navigation "Recettes" et "Films & Séries"
    <nav>
      <div>
          <Link to="/">
            {/* Image du logo à compléter */}
            <img src="/assets/logo_home.png" alt="logo cine-delices" className="logo_home" />
          </Link>
        </div>
      <ul className="nav-links">
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