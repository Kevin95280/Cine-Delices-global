// Test du rendu de nos composants
import FilterForm from "../FilterForm";
import QuickFinder from "../FilterForm/QuickFinder";
import Checkbox from "../FilterForm/Checkbox";

// Import du hook personnalisé
import useFilterCheckbox from "../../Hook/useFilterCheckbox";

import AppRouter from "../Router";

export default function App() {
    const { handleChange, handleSubmit } = useFilterCheckbox('');
    return (
    <FilterForm title="Recherche Rapide" >
      <QuickFinder handleSubmit={handleSubmit}>
        <Checkbox
        handleChange={handleChange}
        />
      </QuickFinder>
    </FilterForm>
  );
}