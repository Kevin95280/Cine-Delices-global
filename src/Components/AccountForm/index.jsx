import React from "react";

export default function AccountForm() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData(formData)
    }
    const handleChange = (e) => {
        e.preventDefault()
        setFormData(e.target.value)
    }
    return (
        <form className="account-form" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="username">Nom d'utilisateur
                <input
                    className=""
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                    placeholder="Votre nom ici"
                    required
                />
            </label>
            <label htmlFor="email">Email
                <input
                    className=""
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="nom@domaine.extension"
                    required
                />
            </label>
            <label htmlFor="password">Mot de passe (12 caractères minimum)
                <input
                    className=""
                    type="password" id="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    placeholder="Votre mot de passe"
                    minLength={12}
                    required
                />
            </label>
            <label htmlFor="retype-password">Retapez votre mot de passe
                <input
                    className=""
                    type="password"
                    id="retype-password"
                    name="retype-password"
                    onChange={handleChange}
                    value={formData.password}
                    placeholder="Votre mot de passe"
                    minLength={12}

                    required
                />
            </label>
            <button type="submit">S'inscrire</button>
        </form>
    )
}