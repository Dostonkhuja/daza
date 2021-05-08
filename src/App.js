import './App.css';
import Home from "./Components/Home/Home";
import Menu from "./Components/Navbar/Menu";
import Company from "./Components/Company/Company";
import Products from "./Components/Products/Products";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return <div className='App'>
        <Menu/>
        <Home/>
        <Company/>
        <Products/>
        <Portfolio/>
        <Contacts/>
        <Footer/>
    </div>
}

export default App;
