// Appel de notre composant NavLink depuis react-router-dom
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      {/* liste de liens de navigation du footer */}
      <nav>
        <ul>
          <li>
            <NavLink to="/legal-notice">Mentions légales</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">À propos</NavLink>
          </li>
          <li>
            <NavLink to="/privacy-policy">
              Politique de confidentialité
            </NavLink>
          </li>
          <li>
            <NavLink to="/terms-and-conditions">CGU</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}