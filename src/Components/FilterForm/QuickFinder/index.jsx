export default function QuickFinder({ handleSubmit, children }) {
    return (
    <form method="POST" onSubmit={handleSubmit}>
        { children }
    </form>

    )
}