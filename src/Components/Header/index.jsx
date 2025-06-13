import React from "react";

export default function Header({ children }) {
  // Ajout d'un parametre children qui correspond à la NavBar
  return (
    <header>
      <div>
        {/* Appel du sous composant navbar */}
        {children}
        {/* Chemin src à compléter avec l'image du logo */}
        <img src="#" alt="logo cine-delices" />
        <h1>Le goût du cinéma, dans votre assiette.</h1>
      </div>
    </header>
  );
}
