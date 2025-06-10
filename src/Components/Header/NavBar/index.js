import React from "react";

export default function NavBar() {
  return (
    // composant navbar pour la navigation "Recettes" et "Films & Séries"
    <nav>
      <ul>
        <li>
          <a href="#">
            <img src="#" alt="logo cine-delices" />
          </a>
        </li>
        <li>
          <a href="/recettes">Recettes</a>
        </li>
        <li>
          <a href="/films-series">Films & Séries</a>
        </li>
      </ul>
    </nav>
  );
}
