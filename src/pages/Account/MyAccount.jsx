import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Array from "../../Components/Array"; // Composant pour afficher les informations utilisateur


export default function MyAccount() {
  // Exemple de données utilisateur (à remplacer par une API)
  const user = [
    { label: "Nom", value: "Jean Dupont" },
    { label: "Email", value: "jean.dupont@example.com" },
    { label: "Date de naissance", value: "15/04/1985" },
    { label: "Date d'inscription", value: "12/02/2023" },
    { label: "Dernière publication", value: "01/06/2025" },
    { label: "Note moyenne", value: "4.5" },
  ];

  return (
<>
    {/* En tete de la page */}
    <Header />
    <main className="main">
      <h1>Profil Adhérent</h1>

      {/* Informations utilisateur */}
      <section className="user-info">
        {/* Affichage des infos avec le composant Array */}
        <Array data={user} />
        <p><strong>Ma dernière publication :</strong> {user.lastPublicationDate}</p>
        <p><strong>Note moyenne des publications:</strong> {user.averageRating}</p>
      </section>

      {/* Actions sur le compte */}
      <div className="actions">
        <button>Accéder à la liste de mes publications</button>
        <button>Modifier mes informations</button>
        <button>Désactiver mon compte</button>
        <button>Supprimer mon compte</button>
      </div>
    </main>
    {/* Footer avec liens utiles */}
    <Footer />
    </>
  );
}
