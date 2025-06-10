import React from "react";

export default function Footer() {
  return (
    // liste de liens nous menant vers une page spécifique
    <footer>
      <nav>
        <ul>
          <li>
            <a href="/mentions-legales">Mentions légales</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/a-propos">À propos</a>
          </li>
          <li>
            <a href="/politique-de-confidentialite">
              Politique de confidentialité
            </a>
          </li>
          <li>
            <a href="/cgu">CGU</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
