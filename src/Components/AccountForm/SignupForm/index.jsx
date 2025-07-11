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

    return (
        <form
            className="account__form"
            method="POST"
            // handler d'action à l'événement
            onSubmit={handleSubmit}
        >
            {/* Si message est true, alors on l'affiche */}
            {message && <p className="error__indication">{message}</p>}
            {/* Ajout d'un fieldset, pour mieux structurer sémantiquement le formulaire */}
            <fieldset>
                {/* Ajout d'une légende, qui sera "caché" visuellement, mais accessible via une lisseuse d'écran*/}
                <legend className="sr-only">Formulaire d'inscription :</legend>
                <div className="account__form__group">
                    {/* 
                    Concernant la gestion des classes CSS :
                    Utilisation de la synthaxe ternaire
                    SI isUsernameActive est vraie (donc si le focus est actif)
                    OU si le champs possède une valeur
                    ALORS ajout de la classe ``is-active``
                    SINON => Chaîne de caractère vide
                    */}
                    <label htmlFor="username" className={`account__form__label ${isUsernameActive || username ? "is-active" : ""}`}>
                        Nom d'utilisateur
                    </label>
                    <input
                        className="account__form__input"
                        type="text"
                        id="username"
                        name="username"
                        // prise en compte de la valeur du champ une fois rempli, ici spécifique au nom d'utilisateur
                        // puis par la suite adapté en fonction de la valeur des autres champs
                        onChange={(e) => setUsername(e.target.value)}
                        // Passe la valeur de username (variable d'état à true, lors du focus)
                        onFocus={() => handleFocus("username")}
                        // Passe la valeur de username (variable d'état à false, lors de la perte du focus)
                        onBlur={() => handleBlur("username")}
                        value={username}
                        required
                    />
                </div>
                <div className="account__form__group">
                    <label htmlFor="email" className={`account__form__label ${isEmailActive || email ? "is-active" : ""}`}>
                        <span>Email</span>
                        {/* Indication sur le format attendu accessible */}
                        <span className="sr-only">Exemple : nom@domaine.extension</span>
                    </label>
                    <input
                        className="account__form__input"
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
                        required
                    />
                </div>
                <div className="account__form__group">
                    <label htmlFor="password" className={`account__form__label ${isPasswordActive || password ? "is-active" : ""}`}>
                        <span>Mot de passe</span>
                        <span className="sr-only">Veuillez insérer votre mot de passe :</span>
                        {/* <span id="passwordHelp">Doit contenir au moins 12 caractères, une majuscule, un chiffre et un caractère spécial.</span> */}
                    </label>
                    <input
                        className="account__form__input"
                        type="password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        onFocus={() => handleFocus("password")}
                        onBlur={() => handleBlur("password")}
                        aria-describedby="passwordHelp"
                        minLength={12}
                        required
                    />
                </div>
                <div className="account__form__group">
                    <label htmlFor="retype-password" className={`account__form__label ${isConfirmedPasswordActive || confirmPassword? "is-active" : ""}`}>
                        <span>Confirmation de votre mot de passe</span>
                        <span className="sr-only">Veuillez valider votre mot de passe :</span>
                    </label>
                    <input
                        className="account__form__input"
                        type="password"
                        id="retype-password"
                        name="retype-password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        onFocus={() => handleFocus("confirmPassword")}
                        onBlur={() => handleBlur("confirmPassword")}
                        minLength={12}
                        required
                    />
                </div>
                <button type="submit" className="account__form__button">
                    S'inscrire
                </button>
            </fieldset>
        </form>
    );
}}
