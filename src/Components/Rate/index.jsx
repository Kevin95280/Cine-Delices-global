import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "react-rating";

export default function RecipeRating({ userId }) {
  // Récupération de l'ID de la recette depuis les paramètres de l'URL
  const { recipeId } = useParams();
  // Déclaration des états pour la note, la moyenne, le nombre de votes et si l'utilisateur peut modifier sa note
  const [rating, setRating] = useState(0);
  const [average, setAverage] = useState(null);
  const [voteCount, setVoteCount] = useState(0);
  const [canEdit, setCanEdit] = useState(false);


  useEffect(() => {
    // Vérification que l'ID de la recette et l'ID de l'utilisateur sont valides
    if (!recipeId || !userId) return;

    // Récupération de la note stockée localement pour l'utilisateur et la recette
    // Cela permet de pré-remplir la note si l'utilisateur a déjà voté.
    const key = `rating_${userId}_${recipeId}`;
    const localRating = localStorage.getItem(key);

      // Si une note locale existe, on l'affiche immédiatement
    if (localRating) {
      // La note est stockée sous forme de chaîne de caractères, on la convertit en nombre
      setRating(parseFloat(localRating));
    }

    const fetchRatingInfo = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/recipes/${recipeId}`);
        const data = await response.json();

        // Vérification que les données contiennent une note moyenne et un nombre de votes
        if (data.average_rating != null) setAverage(data.average_rating);
        if (data.rating_count != null) setVoteCount(data.rating_count);
      } catch (error) {
        console.error("Erreur chargement des statistiques de notation :", error);
      }
    };

    fetchRatingInfo();
  }, [recipeId, userId]);

  const handleRating = async (rate) => {
    // Vérification que l'utilisateur a bien cliqué sur une note
    setRating(rate);
    // On empêche l'utilisateur de modifier sa note après avoir voté
    setCanEdit(false);

    // Cela stocke la note sous une clé unique par utilisateur et recette.
    const key = `rating_${userId}_${recipeId}`;
    // On récupère la note précédente de l'utilisateur pour cette recette
    const previousRating = parseFloat(localStorage.getItem(key)) || null;
    // On stocke la nouvelle note dans le localStorage
    localStorage.setItem(key, rate);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://localhost:3000/api/recipes/${recipeId}/rate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ rating: rate, previousRating })
      });

      const data = await response.json();
      console.log("Note enregistrée :", data);

      // Rafraîchir la moyenne après vote
      const refreshAverage = async () => {
        try {
          const res = await fetch(`http://localhost:3000/api/recipes/${recipeId}`);
          const updated = await res.json();

          // Vérification que les données mises à jour contiennent une note moyenne et un nombre de votes
          if (updated.average_rating != null) setAverage(updated.average_rating);
          if (updated.rating_count != null) setVoteCount(updated.rating_count);
        } catch (error) {
          console.error("Erreur lors du rafraîchissement :", error);
        }
      };

      await refreshAverage();
    } catch (error) {
      console.error("Erreur lors de l'enregistrement :", error);
    }
  };

  // Vérification si l'utilisateur a déjà noté cette recette
    const alreadyRated = localStorage.getItem(`rating_${userId}_${recipeId}`) != null;
  
  return (
    // Conteneur principal du composant avec la classe CSS "Notation"
    <div className="notation">
      <strong>Notez cette recette :</strong>
        <Rating
            // Permet d'afficher une note de 0.5 en 0.5
            fractions={2}
            // Permet de définir les symboles vides et pleins pour les étoiles
            emptySymbol={<i className="far fa-star fa-2x" style={{ color: "#B8860B" }}></i>}
            fullSymbol={<i className="fas fa-star fa-2x" style={{ color: "#D4A017" }}></i>}
            // Permet de définir la note initiale
            initialRating={rating}
            // Permet de définir la note sélectionnée
            onClick={alreadyRated && !canEdit ? () => {
              // Si l'utilisateur a déjà noté, on affiche un message d'alerte
              alert("Vous avez déjà noté cette recette. Cliquez sur 'Modifier ma note' pour changer votre vote.");
              // On renvoi l'utilisateur vers la fonction de modification de note
            } : handleRating}
        />
      <p>Votre note : {rating}</p>
      {/* Si l'utilisateur a déjà noté la recette et ne peut pas modifier sa note, on affiche un bouton pour modifier la note */}
      {alreadyRated && !canEdit && (
        <button onClick={() => setCanEdit(true)} className="btn-modifier-note">
          Modifier ma note
        </button>
      )}
      {/* Si une note moyenne est disponible, on l'affiche */}
      {average !== null && (
      <p className="recipe__note-moyenne">
        {/* Affichage de la note moyenne et du nombre de votes */}
        Note moyenne : ⭐ {average} / 5 ({voteCount} vote{voteCount > 1 ? "s" : ""})
      </p>
    )}
    </div>
  );
}
