// Utilisation de props
// Dans un premier temps pour gérer le titre de niveau 2 lors de l'affichage du rendu
export default function Array({ title, data }) {
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
                ? Object.keys(data[0]).map((key, index) => <th key={`th-${index}`}>{key}</th>)
                : data.map((item, index) => <th key={`th-${index}`}>{item.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {isMultiRow ? (
              data.map((row, i) => (
                <tr key={`row-${i}`}>
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
