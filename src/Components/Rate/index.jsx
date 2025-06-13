import React, { useState } from "react";
import Rating from "react-rating";

// Définition du composant RecipeRating
export default function RecipeRating() {
  // Déclaration de la variable d'état pour stocker la note sélectionnée par l'utilisateur
  const [rating, setRating] = useState(0);

  return (
    // Conteneur principal du composant avec la classe CSS "Notation"
    <div className="notation">

      <strong>Module notation</strong>
        <Rating
            // Permet d'afficher une note de 0.5 en 0.5
            fractions={2}
            // Permet de définir les symboles vides et pleins pour les étoiles
            emptySymbol={<i className="far fa-star fa-2x" style={{ color: "#B8860B" }}></i>}
            fullSymbol={<i className="fas fa-star fa-2x" style={{ color: "#D4A017" }}></i>}
            // Permet de définir la note initiale
            initialRating={rating}
            // Permet de définir la fonction à appeler lors du clic sur une étoile
            onClick={(rate) => setRating(rate)}
        />
      <p>Votre note: {rating}</p>
    </div>
  );
}
