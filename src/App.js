import {useEffect, useRef} from "react";
import './app.css'
import Home from "./Components/Home/Home";
import Menu from "./Components/Navbar/Menu";
import Footer from "./Components/Footer/Footer";
import Company from "./Components/Company/Company";
import Products from "./Components/Products/Products";
import Contacts from "./Components/Contacts/Contacts";
import Portfolio from "./Components/Portfolio/Portfolio";

import {gsap, Power3, TweenMax} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const App = () => {

    let main = useRef(null)
    let menu = useRef(null)
    let home = useRef(null)
    let company = useRef(null)
    let products = useRef(null)
    let portfolio = useRef(null)
    let contacts = useRef(null)
    let footer = useRef(null)

    useEffect(()=> {
            const tl = gsap.timeline()
        tl.fromTo(company,{x:'0%' ,y:'0'},{x:0})
        ScrollTrigger.create({
            animation:tl,
            trigger:main,
            start:'top top',
            end:'bottom',
            scrub:true,
            // pin:true
        })
    },[])

    return <div className='main' ref={e=>{main = e}}>
        <div className='section-menu' ref={e=>{menu = e}}> <Menu main={main}/> </div>
        <div className='section-home' ref={e=>{home = e}}> <Home/> </div>
        <div className='section-company' ref={e=>{company = e}}> <Company/> </div>
        <div className='section-products' ref={e=>{products = e}}> <Products/> </div>
        <div className='section-portfolio' ref={e=>{portfolio = e}}> <Portfolio/> </div>
        <div className='section-contacts' ref={e=>{contacts = e}}> <Contacts/> </div>
        <div className='section-footer' ref={e=>{footer = e}}> <Footer/> </div>
    </div>
}

export default App;
