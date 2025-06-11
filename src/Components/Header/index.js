import React from "react";
// Import du composant NavBar
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      {/* Appel de notre composant NavBar pour la navigation principale*/}
      <NavBar />
      <div>
        {/* Chemin src à compléter avec l'image du logo */}
        <img src="#" alt="logo cine-delices" />
        <h1>Le goût du cinéma, dans votre assiette.</h1>
      </div>
    </header>
  );
}
