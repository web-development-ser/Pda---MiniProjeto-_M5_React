import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import Teste from "./components/listData/listData";
import { MAIN_API } from "./components/main.api";

const Home = () => {
    return (
        <>
            <Header />
            <MAIN_API />
            <Footer />
            
        </>
    );
};

export { Home };