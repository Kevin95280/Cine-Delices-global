import Cards from "../Cards";
import Card from "../Cards/Card";

export default function App() {
    return (
        <Cards title={'Top recettes'}>
            <Card title={'Recette 1'} authorName={'toto'}/>
            <Card title={'Recette 2'} authorName={'toto'}/>
            <Card title={'Recette 3'} authorName={'toto'}/>
        </Cards>
    )
}