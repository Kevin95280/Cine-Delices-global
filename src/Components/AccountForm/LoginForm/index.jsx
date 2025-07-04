import react, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // définition des variables d'état
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate()

  // handle pour la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    // conditions à la soumission pour être connecté
    try {
      const payload = {
        email,
        password
      }
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "charset": "utf-8"
        },
        body: JSON.stringify(payload)
      })
      // si les conditions ne sont pas remplies
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message)
      // utilisation de useNavigate dans le router pour la redirection
      } else {
        navigate('/')
      }
      setMessage('')
    } catch (error) {
      setMessage(error.message)
    }
  };

  return (
    <form
      className="account__form account__form__login"
      method="POST"
      onSubmit={handleSubmit}
    >
      {/* Si message est true, alors on l'affiche */}
      {message && <p>{message}</p>}
      {/* Ajout d'un fieldset, pour mieux structurer sémantiquement le formulaire */}
      <fieldset>
        {/* Ajout d'une légende, qui sera "caché" visuellement, mais accessible via une lisseuse d'écran*/}
        <legend className="sr-only">Formulaire de connexion :</legend>
        <p>Tout les champs sont obligatoire</p>
        <label htmlFor="email" className="account__form__label">
          <span>Email :</span>
          {/* Indication sur le format attendu accessible */}
          <span className="sr-only">Exemple : nom@domaine.extension</span>
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
          <span>Mot de passe :</span>
          <input
            aria-label="Veillez entrer votre mot de passe"
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
      </fieldset>
    </form>
  );
}
