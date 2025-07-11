import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Authentication";

export default function LoginForm() {
  // définition des variables d'état
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, isAuthenticated, userData } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Vérification des champs email et mot de passe
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Erreur lors de la connexion");
        return;
      }
      alert("Connexion réussie !");
      // Appelle la fonction de login du contexte d'authentification
      await login(result.token);

    } catch (error) {
      console.error("Erreur login :", error);
      alert("Une erreur est survenue");
    }
  };

  useEffect(() => {
  // Redirection vers la page "Mon compte" si l'utilisateur est authentifié et que les données utilisateur sont disponibles
  if (isAuthenticated && userData) {
    navigate("/my-account");
  }
  // Les dépendances de useEffect sont isAuthenticated et userData
}, [isAuthenticated, userData]);

  return (
    <form
      className="account__form account__form__login"
      method="POST"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="account__form__label">
        Email
        <input
          className="account__form__input"
          type="email"
          id="email"
          name="email"
          // prise en compte de la valeur du champ une fois rempli, ici spécifique à l'email
          // puis par la suite adapté en fonction de la valeur des autres champs
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="nom@domaine.extension"
          required
        />
      </label>
      <label htmlFor="password" className="account__form__label">
        Mot de passe
        <input
          className="account__form__input"
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          minLength={12}
          placeholder="Votre mot de passe"
          required
        />
      </label>
      <button type="submit" className="account__form__button">
        Connexion
      </button>
    </form>
  );
}
