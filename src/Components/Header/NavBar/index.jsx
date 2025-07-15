// Appel de notre composant NavLink depuis react-router-dom
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    // Composant navbar comprenant le logo et l'icône de compte utilisateur
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">
            <img src="/assets/logo_home.png" alt="logo cine-delices" className="logo_home" />
          </Link>
        </li>
        <li className="account-link">
          <Link to="/signup" className="logo_account_container">
            <img src="/assets/user.png" alt="logo account" className="logo_account"/>
          </Link>
        </li>
      </ul>
    </nav>
  );
}