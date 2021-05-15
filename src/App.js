import Home from "./Components/Home/Home";
import Menu from "./Components/Navbar/Menu";
import Footer from "./Components/Footer/Footer";
import Company from "./Components/Company/Company";
import Products from "./Components/Products/Products";
import Contacts from "./Components/Contacts/Contacts";
import Portfolio from "./Components/Portfolio/Portfolio";

const App = () => {
    return <>
        <Menu/>
        <Home/>
        <Company/>
        <Products/>
        <Portfolio/>
        <Contacts/>
        <Footer/>
    </>
}

export default App;
