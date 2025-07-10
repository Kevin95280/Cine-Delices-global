import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Array from "../../Components/Array"; // Composant pour afficher les informations utilisateur
import NavBar from "../../Components/Header/NavBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function MyAccount() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:3000/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || "Erreur lors du chargement du profil");
        }

        setUserData(result);
      } catch (error) {
        console.error("Erreur chargement profil :", error);
      }
    };

    fetchUser();
  }, []);

  const userArray = userData
    ? [
        { label: "Nom", value: `${userData.username}` },
        { label: "Email", value: userData.email },
        { label: "Date de création du profil", value: userData.created_at ? new Date(userData.created_at).toLocaleDateString(): "Date inconnue" },
        { label: "Nombre de publications", value: typeof userData.publication_count === "number" ? userData.publication_count : "—" }
      ]
    : [];


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
        <p>Ma dernière publication : {/*user.lastPublicationDate*/}</p>
        <p>Note moyenne des publications: {/*user.averageRating*/}</p>
        <p><a href="/add-recipe">Ajouter une recette</a></p>
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