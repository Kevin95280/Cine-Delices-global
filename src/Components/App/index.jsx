// Test du rendu de nos composants
import FilterForm from "../FilterForm";
import QuickFinder from "../FilterForm/QuickFinder";

import AppRouter from "../Router";

export default function App() {
    return (
    <FilterForm title="Recherche Rapide" >
      <QuickFinder />
    </FilterForm>
  );
}