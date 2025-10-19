
export default function Array({ title, data }) {
    /*La variable isMultiRow permet de savoir si les données qu’on veut afficher dans la table sont :
    - plusieurs objets (chaque ligne représente un objet avec plusieurs propriétés) → mode multi-lignes
    - des objets simples qui ont juste un label et une value → mode une seule ligne
    1/ On vérifie si le tabelau contient au moins 1 élément
    2/ On vérifie si le premier élément est un objet
    3/ On vérifie si le premier élément n’a pas de propriété label
    */
  const isMultiRow = data.length > 0 && typeof data[0] === "object" && !data[0].label;

  return (
    <div className="array-container">
      <h2>{title}</h2>
      <div className="table-wrapper">
        <table>
          <caption className="sr-only">{title}</caption>
          <thead>
            <tr>
              {isMultiRow
                // Si isMultiRow est vrai, on affiche les clés comme en-têtes de colonne
                // exemple: Si Object.keys(data[0]) = ["Nom", "Âge", "Métier"], alors on aura:
                // <th key="th-0">Nom</th>
                // <th key="th-1">Âge</th>
                // <th key="th-2">Métier</th>
                ? Object.keys(data[0]).map((key, index) => <th key={`th-${index}`}>{key}</th>)
                // Sinon, on affiche les labels des objets comme en-têtes de colonne
                // exemple: Si data = [{ label: "Nom", value: "Alice" }, { label: "Âge", value: 30 }], alors on aura:
                // <th key="th-0">Nom</th>
                // <th key="th-1">Âge</th>
                // <th key="th-2">Métier</th>
                : data.map((item, index) => <th key={`th-${index}`}>{item.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {/* Meme fonctionnement qu'au dessus pour le tbody*/}
            {isMultiRow ? (
                // i= index de la ligne
              data.map((row, i) => (
                <tr key={`row-${i}`}>
                    {/* j = index de la cellule */}
                  {Object.values(row).map((value, j) => (
                    <td key={`td-${i}-${j}`}>{value}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                {data.map((item, index) => (
                  <td key={`td-${index}`}>{item.value}</td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
