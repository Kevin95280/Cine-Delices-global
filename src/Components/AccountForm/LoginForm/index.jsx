
import { useState } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className="account-form" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="email">Email
                <input
                    className=""
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={formData.email}
                    required
                />
            </label>
            <label htmlFor="password">Votre Mot de passe
                <input
                    className=""
                    type="password" id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={12}
                    required
                />
            </label>
            <button type="submit">Se connecter</button>
        </form>
    )
}