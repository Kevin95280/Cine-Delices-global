import { useState } from "react";
import useLogin from "../../../Hook/useLogin";

export default function LoginForm() {
	const { email, setEmail, password, setPassword, message, handleSubmit } = useLogin();

		const [focusState, setFocusState] = useState({
			email: false,
			password: false,
		})
	
		/**
		 * Handler permettant la gestion des variable d'état au focus d'un champs
		 * @param {string} field - Chaîne de caractère représentant la clé de notre objet stocké dans notre variable d'état
		 */
		const handleFocus = (field) => {
			setFocusState((prev) => ({
				...prev, [field]: true
			}))
		}

		const handleBlur = (field) => {
			setFocusState((prev) => ({
				...prev, [field]: false
			}))
		}

		const isEmailActive = focusState.email;
		const isPasswordActive = focusState.password;

	return (
		<form
			className="account__form"
			method="POST"
			onSubmit={handleSubmit}
		>
			{/* Si message est true, alors on l'affiche */}
			{message && <p className="error__indication">{message}</p>}
			{/* Ajout d'un fieldset, pour mieux structurer sémantiquement le formulaire */}
			<fieldset>
				{/* Ajout d'une légende, qui sera "caché" visuellement, mais accessible via une lisseuse d'écran*/}
				<legend className="sr-only">Formulaire de connexion :</legend>
				<span className="account__form__info">Tout les champs sont obligatoire</span>
				<div className="account__form__group">
					<label htmlFor="email" className={`account__form__label ${isEmailActive || email ? "is-active" : ""}`}>
						Email
						{/* Indication sur le format attendu accessible */}
						<span className="sr-only">Exemple : nom@domaine.extension</span>
					</label>
					<input
						className="account__form__input"
						type="email"
						id="email"
						name="email"
						// prise en compte de la valeur du champ une fois rempli, ici spécifique à l'email
						// puis par la suite adapté en fonction de la valeur des autres champs
						onChange={(e) => setEmail(e.target.value)}
						onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
						value={email}
						required
					/>
				</div>
				<div className="account__form__group">
					<label htmlFor="password" className={`account__form__label ${isPasswordActive || password ? "is-active" : ""}`}>
						Mot de passe
					</label>
					<input
						className="account__form__input"
						type="password"
						id="password"
						name="password"
						onChange={(e) => setPassword(e.target.value)}
						onFocus={() => handleFocus("password")}
                        onBlur={() => handleBlur("password")}
						value={password}
						minLength={12}
						required
					/>
				</div>
				<button type="submit" className="account__form__button">
					Connexion
				</button>
			</fieldset>
		</form>
	);
}
