import { useEffect, useState } from "react";
import { useAuth } from "../../Authentication";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Array from "../../Components/Array"; // Composant pour afficher les informations utilisateur
import NavBar from "../../Components/Header/NavBar";



export default function MyAccount() {
  
  const { userData, isLoadingUser, logout } = useAuth();
  const [averageRating, setAverageRating] = useState(null);
  const navigate = useNavigate();

useEffect(() => {
  async function fetchAverageRating() {
    try {
      const res = await fetch(`http://localhost:3000/api/users/${userData.id}/average-rating`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setAverageRating(parseFloat(data.average_rating));
    } catch (err) {
      console.error("Erreur récupération moyenne :", err.message);
    }
  }

  if (userData?.id) {
    fetchAverageRating();
  }
}, [userData?.id]);



  if (isLoadingUser) {
    return (
      <>
        <Header>
          <NavBar />
        </Header>
        <main className="main">
          <p>Chargement des infos utilisateur...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (!userData) {
    // Si l'utilisateur n'est pas connecté, rediriger vers la page d'accueil
    return <Navigate to="/" replace />;
    }

  const userArray = [
        { label: "Nom", value: userData.username },
        { label: "Email", value: userData.email },
        { label: "Date de création du profil", value: userData.created_at ? new Date(userData.created_at).toLocaleDateString(): "Date inconnue" },
        { label: "Nombre de publications", value: typeof userData.publication_count === "number" ? userData.publication_count : "—" }
      ];

    const handleDeactivateAccount = async () => {
    const confirmed = window.confirm(
      "Êtes-vous sûr de vouloir désactiver votre compte ?\nVous pourrez le réactiver en contactant l'administrateur."
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`http://localhost:3000/api/users/${userData.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ is_active: false })
      });

      if (!response.ok) throw new Error("Échec de la désactivation");

      alert("Votre compte a été désactivé");
      // Déconnexion de l'utilisateur
      logout();
      // Redirection vers la page d'accueil
      navigate("/");
    } catch (error) {
      console.error("Erreur désactivation :", error.message);
      alert("Une erreur est survenue lors de la désactivation");
    }
  };


  const handleDeleteAccount = async () => {
  const confirmed = window.confirm(
    "Êtes-vous sûr de vouloir supprimer votre compte ?\n⚠️ Cette action est irréversible et entrainera la suppression de toutes vos publications."
  );

  if (!confirmed) return;

  try {
    const response = await fetch(`http://localhost:3000/api/users/${userData.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });

    if (!response.ok) throw new Error("Erreur lors de la suppression");

    alert("Votre compte a bien été supprimé");
    // Déconnexion de l'utilisateur
    logout();
    // Redirection vers la page d'accueil
    navigate("/");

  } catch (error) {
    console.error("Suppression échouée :", error.message);
    alert("Une erreur est survenue pendant la suppression du compte");
  }
};

return (
<>
  {/* En tete de la page */}
  <Header>
    <NavBar />
  </Header>
  <main className="main">
    {/* Informations utilisateur */}
    <section className="user__info">
      {/* Affichage des infos avec le composant Array */}
      <Array data={userArray} title={"Profil Utilisateur"} />
    </section>
      <div className="user__stats">
        <p>Ma dernière publication : { userData.last_publication_date ? new Date(userData.last_publication_date).toLocaleDateString("fr-FR") : "Aucune recette publiée" }</p>
        <p>Note moyenne des publications :{" "} {averageRating !== null ? `${averageRating} ⭐` : "Non notée"}</p>
      </div>

    {/* Actions sur le compte */}
    <div className="user__actions">
      <Link to="/add-recipe" className="add-recipe-banner glass-effect">Créer une nouvelle recette</Link>
      <Link to="/my-recipes" className="user__button">Accéder à la liste de mes publications</Link>
      <Link to="/signup?edit=true" className="user__button">Modifier mes informations</Link>
      <button className="user__button__grey" onClick={handleDeactivateAccount}>Désactiver mon compte</button>
      <button className="user__button" onClick={handleDeleteAccount}>Supprimer mon compte</button>
    </div>
  </main>
  {/* Footer avec liens utiles */}
  <Footer />
</>
);
}