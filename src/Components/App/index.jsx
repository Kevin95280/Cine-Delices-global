import Cards from "../Cards";
import Card from "../Cards/Card";
import AppRouter from "../Router";

export default function App() {
    return (
        <Cards title={"Top recettes"}>
            <Card 
            title={"Pancake aux fruits"}
            authorName={"Nom_Auteur"}
            image={"/assets/image-test.jpg"}
            />
            <Card 
            title={"Pancake aux fruits"}
            authorName={"Nom_Auteur"}
            image={"/assets/image-test.jpg"}
            />
            <Card 
            title={"Pancake aux fruits"}
            authorName={"Nom_Auteur"}
            image={"/assets/image-test.jpg"}
            />
        </Cards>
    )
}