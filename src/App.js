import './app.css'
import Home from "./Components/Home/Home";
import Menu from "./Components/Navbar/Menu";
import Footer from "./Components/Footer/Footer";
import Company from "./Components/Company/Company";
import Products from "./Components/Products/Products";
import Contacts from "./Components/Contacts/Contacts";
import Portfolio from "./Components/Portfolio/Portfolio";
import {useEffect} from "react";
import i18next from "i18next";

const App = () => {

    useEffect(()=>{ i18next.changeLanguage("ру")},[])

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
