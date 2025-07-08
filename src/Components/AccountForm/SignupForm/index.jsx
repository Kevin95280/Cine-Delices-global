import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  // définition des variables d'état avec pour état initial des chaînes de caractères vides
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    // condition pour la création du compte
    if (password !== confirmPassword) {
    alert("Vos mots de passe ne sont pas identiques");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Erreur backend :", result);
      alert(result.error || "Une erreur est survenue lors de l'inscription.");
      return;
    }

    alert("Nouveau compte créé !");
    navigate("/login");

  } catch (error) {
    console.error("Erreur fetch :", error);
    alert("Erreur réseau ou serveur.");
  }

  };
  return (
    <form
      className="account__form account__form__login"
      method="POST"
      // handler d'action à l'événement
      onSubmit={handleSubmit}
    >
      <label htmlFor="username" className="account__form__label">
        Nom d'utilisateur
        <input
          className="account__form__input"
          type="text"
          id="username"
          name="username"
          // prise en compte de la valeur du champ une fois rempli, ici spécifique au nom d'utilisateur
          // puis par la suite adapté en fonction de la valeur des autres champs
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Votre nom ici"
          required
        />
      </label>
      <label htmlFor="email" className="account__form__label">
        Email
        <input
          className="account__form__input"
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="nom@domaine.extension"
          required
        />
      </label>
      <label htmlFor="password" className="account__form__label">
        Mot de passe (12 caractères minimum)
        <input
          className="account__form__input"
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Votre mot de passe"
          minLength={12}
          required
        />
      </label>
      <label htmlFor="retype-password" className="account__form__label">
        Retapez votre mot de passe
        <input
          className="account__form__input"
          type="password"
          id="retype-password"
          name="retype-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="Votre mot de passe"
          minLength={12}
          required
        />
      </label>
      <button type="submit" className="account__form__button">
        S'inscrire
      </button>
    </form>
  );
}
