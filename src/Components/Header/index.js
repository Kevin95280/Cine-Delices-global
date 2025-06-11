import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      {/* Appel de notre composant NavBar */}
      <NavBar />
      <div>
        <img src="#" alt="logo cine-delices" />
        <h1>Le goût du cinéma, dans votre assiette.</h1>
      </div>
    </header>
  );
}
