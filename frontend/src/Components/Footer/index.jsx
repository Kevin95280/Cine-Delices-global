// Appel de notre composant NavLink depuis react-router-dom
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      {/* liste de liens de navigation du footer */}
      <nav className="footer__nav" aria-label="Pied de page">
        <ul className="footer__list">
          <li className="footer__item">
            <NavLink to="/legal-notice" className="footer__link">
              Mentions légales
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/contact" className="footer__link">
              Contact
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/about-us" className="footer__link">
              À propos
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/privacy-policy" className="footer__link">
              Politique de confidentialité
            </NavLink>
          </li>
          <li className="footer__item">
            <NavLink to="/terms-and-conditions" className="footer__link">CGU</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
