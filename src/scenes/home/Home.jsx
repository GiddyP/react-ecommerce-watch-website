// import ShoppingList from "./ShoppingList";
import About from "./About";
import Clients from "./Clients";
import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";

const Home = () => {
    return (
        <div className="home">
            <MainCarousel />
            <ShoppingList />
            <About />
            <Clients />
        </div>
    );
};

export default Home;
