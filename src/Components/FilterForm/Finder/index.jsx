export default function Finder({ handleSubmit, children }) {
    return (
    <form method="POST" onSubmit={handleSubmit}>
        { children }
    </form>

    )
}