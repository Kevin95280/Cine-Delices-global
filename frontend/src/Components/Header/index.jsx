export default function Header({ children }) {
  // Ajout d'un parametre children qui correspond à la NavBar
  return (
    <header>
      <div>
        {/* Appel du sous composant navbar */}
        {children}
      </div>
    </header>
  );
}
