import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Main = ({children}) => {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    );
}

export default Main;