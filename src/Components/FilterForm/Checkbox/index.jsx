// Ajout des props pour la gestion des attribut et du label
export default function Checkbox( { id, label, isChecked, handleChange }) {
    return (
        <div>
            <input
                type="checkbox"
                id={id}
                name={id}
                checked={isChecked}
                onChange={handleChange}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}