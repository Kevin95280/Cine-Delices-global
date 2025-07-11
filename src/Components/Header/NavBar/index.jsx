// Appel de notre composant NavLink depuis react-router-dom
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Authentication/index.jsx";


export default function NavBar() {
  const navigate = useNavigate();
  const { isAuthenticated, username, logout, isLoadingUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAccountClick = () => {
    if (isAuthenticated) {
      navigate("/my-account");
    } else {
      setMenuOpen(prev => !prev); // toggle du menu
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

return (
// Composant navbar comprenant le logo et l'icône de compte utilisateur
<nav className="nav-bar">
  <ul>
    <li>
      <Link to="/">
      <img src="/assets/logo_home.png" alt="logo cine-delices" className="logo_home" />
      </Link>
    </li>

    {isAuthenticated && !isLoadingUser && (
    <li className="user-info">
      <span>Bienvenue <strong>{username}</strong></span>
      <button onClick={logout} className="logout-btn">Déconnexion</button>
    </li>
    )}

    <li className="account-link">
      <div className="logo_account_container" onClick={handleAccountClick}>
        <img src="/assets/user.png" alt="logo account" className="logo_account" />

        {!isAuthenticated && menuOpen && (
        <ul className="account-dropdown">
          <li onClick={()=> handleNavigate("/signup")}>S’inscrire</li>
          <li onClick={()=> handleNavigate("/login")}>Se connecter</li>
        </ul>
        )}
      </div>
    </li>
  </ul>
</nav>
);
}