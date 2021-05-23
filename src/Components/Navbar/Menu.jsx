import React, {useEffect, useRef} from 'react';
import {Link} from 'react-scroll'
import styles from './menu.module.css'
import logo from '../../assets/logo.png'
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import menuIcon from '../../assets/menu.png'
import i18next from "i18next";
import {useTranslation} from "react-i18next";

import {gsap, Power3, TweenMax} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const Menu = (props) => {
    const {t} = useTranslation()

    let navbar = useRef(null)

    useEffect(()=> {
        const tl = gsap.timeline()
        tl.fromTo(navbar,1,{},{position:"fixed",backgroundColor:"#ff0032", paddingTop:'10px',paddingBottom:'10px'})
        ScrollTrigger.create({
            animation:tl,
            trigger:navbar,
            start:'bottm -400vw',
            end:'bottom',
            scrub:true,
            // pin:true
        })
    },[])


    return <Container fluid className='p-0'>
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} className={styles.navbarCol}  ref={el => navbar = el} >
                <Navbar expand="lg"   >
                    <Navbar.Brand href="#home"><img src={logo} className={styles.logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0'>
                        <img src={menuIcon} className={styles.menuIcon}/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto w-100">
                            <ul className={styles.itemBlock}>
                                <li className={styles.menuItem}>
                                    <Link to="home" spy={true} smooth={true} duration={500}>
                                        {t('nav.item1')}
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to="company" spy={true} smooth={true} duration={500}>
                                        {t('nav.item2')}
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to='product' spy={true} smooth={true} duration={500}>
                                        {t('nav.item3')}
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <a target="_blank" href="https://t.me/callcentredaza">  {t('nav.item6')}</a>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to='portfolio' spy={true} smooth={true} duration={500}>
                                        {t('nav.item4')}
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to='contacts' spy={true} smooth={true} duration={500}>
                                        {t('nav.item5')}
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <a className={styles.menuLanguageOne}
                                       onClick={() => i18next.changeLanguage("uz")}>O'Z</a>
                                    <a className={styles.menuLanguage}
                                       onClick={() => i18next.changeLanguage("ўз")}>ЎЗ</a>
                                    <a className={styles.menuLanguage}
                                       onClick={() => i18next.changeLanguage("ру")}>РУС</a>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    </Container>
}

export default Menu;