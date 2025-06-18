export default function Checkbox( { isChecked, handleChange }) {
    return (
        <div>
            <input
                type="checkbox"
                id="test"
                name="test"
                checked={isChecked}
                onChange={handleChange}
            />
            <label htmlFor="test">Test</label>
        </div>
    )
}