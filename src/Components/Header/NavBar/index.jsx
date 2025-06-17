// Appel de notre composant NavLink depuis react-router-dom
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    // Composant navbar pour la navigation "Recettes" et "Films & Séries"
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">
            {/* Image du logo à compléter */}
            <img src="#" alt="logo cine-delices" />
          </Link>
        </li>
        <li>
          <Link to="/my-account">
            {/* Image du logo de compte à compléter */}
            <img src="#" alt="logo account" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}