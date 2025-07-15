import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Array from "../../Components/Array"; // Composant pour afficher les informations utilisateur
import NavBar from "../../Components/Header/NavBar";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../Authentication";


export default function MyAccount() {
  
  const { userData, isLoadingUser } = useAuth();

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
        <p>Note moyenne des publications: {/*user.averageRating*/}</p>
      </div>

    {/* Actions sur le compte */}
    <div className="user__actions">
      <Link to="/add-recipe" className="add-recipe-banner glass-effect">Créer une nouvelle recette</Link>
      <Link to="/my-recipes" className="user__button">Accéder à la liste de mes publications</Link>
      <Link to="/signup?edit=true" className="user__button">Modifier mes informations</Link>
      <button className="user__button__grey">Désactiver mon compte</button>
      <button className="user__button">Supprimer mon compte</button>
    </div>
  </main>
  {/* Footer avec liens utiles */}
  <Footer />
</>
);
}