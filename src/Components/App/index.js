// Import de nos différents composants
import Header from "../Header";
import NavBar from "../Header/NavBar";
import Cards from "../Cards";
import Card from "../Cards/Card";
import Footer from "../Footer";

export default function App() {
    return (
        <>
          <Header>
              <NavBar/>
          </Header>
          <Cards title={'Top recettes'}>
              <Card title={'Recette 1'} authorName={'toto'}/>
              <Card title={'Recette 2'} authorName={'toto'}/>
              <Card title={'Recette 3'} authorName={'toto'}/>
          </Cards>
          <Footer />
        </> 
  )
} 