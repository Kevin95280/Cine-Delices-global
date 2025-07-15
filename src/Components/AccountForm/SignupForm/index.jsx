import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useSignup from "../../../Hook/useSignup";

export default function SignupForm() {
  // définition des variables d'état avec pour état initial des chaînes de caractères vides
const { username, setUsername, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, message, handleSubmit } = useSignup()

    /**
     * Initialisation de variable d'état
     * Gestion via un booléen
     * true au focus de l'input / false défocus
     */
    const [focusState, setFocusState] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false
    })

    /**
     * Handler permettant la gestion des variable d'état au focus d'un champs
     * @param {string} field - Chaîne de caractère représentant la clé de notre objet stocké dans notre variable d'état
     */
    const handleFocus = (field) => {
        /**
         * ``prev`` représente notre objet stocké dans notre variable d'état
         * Donc nous récupèrons l'objet, ses clés et valeurs associées
         */
        setFocusState((prev) => ({
            /**
             * Utilisation du spread operator pour récupèrer cette objet
             * Et mettre à jour une première fois notre variable d'état
             * Nous indiquerons ensuite qu'il faudra asigner la valeur ``true``
             * A la clé [field] de notre objet 
             */
            ...prev, [field]: true
        }))
    }

    // Même chose que pour le handler précédent mais cette fois ci pour gérer la perte de focus
    const handleBlur = (field) => {
        setFocusState((prev) => ({
            ...prev, [field]: false
        }))
    }

    /**
     * On récupère séparément la valeur de chaque clé de notre objet stocké dans notre variable d'état
     * Elle nous servirons pour gérer la condition pour ajouter une classe au focus ou la retirer
     */
    const isUsernameActive = focusState.username;
    const isEmailActive = focusState.email;
    const isPasswordActive = focusState.password;
    const isConfirmedPasswordActive = focusState.confirmPassword;

    
    const [searchParams] = useSearchParams();
    // On vérifie si le paramètre de l'URL "edit" est égal à "true"
    // Cela nous permet de savoir si nous sommes en mode édition ou en mode création de compte
    const isEditMode = searchParams.get("edit") === "true";

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
                <h1>{isEditMode ? "Modifier votre compte" : "Créer votre compte"}</h1>
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
                    {isEditMode ? "Mettre à jour" : "S'inscrire"}
                </button>
            </fieldset>
        </form>
    );
}
