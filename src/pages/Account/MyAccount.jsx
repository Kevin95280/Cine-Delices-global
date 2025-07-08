import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Array from "../../Components/Array"; // Composant pour afficher les informations utilisateur
import NavBar from "../../Components/Header/NavBar";
import { Link } from "react-router-dom";


export default function MyAccount() {
// Exemple de données utilisateur (à remplacer par une API)
const user = [
{ label: "Nom", value: "Jean Dupont" },
{ label: "Email", value: "jean.dupont@example.com" },
{ label: "Date de création", value: "JJ/MM/AAAA" },
{ label: "Nombre de publications", value: "XX" },
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
      <Array data={user} title={"Profil Utilisateur"}/>
    </section>
      <div className="user__stats">
        <p>Ma dernière publication : {user.lastPublicationDate}</p>
        <p>Note moyenne des publications: {user.averageRating}</p>
      </div>

    {/* Actions sur le compte */}
    <div className="user__actions">
      <Link to="/my-recipes" className="user__button">Accéder à la liste de mes publications</Link>
      <Link to="#" className="user__button">Modifier mes informations</Link>
      <button>Désactiver mon compte</button>
      <button>Supprimer mon compte</button>
    </div>
  </main>
  {/* Footer avec liens utiles */}
  <Footer />
</>
);
}