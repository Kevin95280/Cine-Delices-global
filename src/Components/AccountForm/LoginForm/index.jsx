import "../style.scss"

import useLogin from "../../../Hook/useLogin";

export default function LoginForm() {

	const { email, setEmail, password, setPassword, message, handleSubmit } = useLogin();

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
