// Appel de notre composant NavLink depuis react-router-dom
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      {/* liste de liens de navigation du footer */}
      <nav>
        <ul>
          <li>
            <NavLink to="/mentions-legales">Mentions légales</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/a-propos">À propos</NavLink>
          </li>
          <li>
            <NavLink to="/politique-de-confidentialite">
              Politique de confidentialité
            </NavLink>
          </li>
          <li>
            <NavLink to="/cgu">CGU</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}