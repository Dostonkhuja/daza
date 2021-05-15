import React from 'react';
import {Link} from 'react-scroll'
import styles from './menu.module.css'
import logo from '../../assets/logo.png'
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import menuIcon from '../../assets/menu.png'

const Menu = (props) => (
    <Container fluid >
        <Row>
            <Col xl={12} lg={12} md={12} sm={12} className={styles.navbarCol}>
                <Navbar expand="lg" className={styles.navbar} >
                    <Navbar.Brand href="#home"><img src={logo} className={styles.logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0'>
                        <img src={menuIcon}className={styles.menuIcon}/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto w-100">
                            <ul className={styles.itemBlock}>
                                <li className={styles.menuItem}>
                                    <Link to="home" spy={true} smooth={true} duration={500}>
                                        Asosiy
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to="company" spy={true} smooth={true} duration={500}>
                                        Kompaniya haqida
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to='product' spy={true} smooth={true} duration={500}>
                                        Mahsulotlar
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <a target="_blank" href="https://t.me/callcentredaza">Prays-list</a>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to='portfolio' spy={true} smooth={true} duration={500}>
                                        Portfolio
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link to='contacts' spy={true} smooth={true} duration={500}>
                                        Kontaktlar
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <a href="#" className={styles.menuLanguageOne}>UZ</a>
                                    <a href="#" className={styles.menuLanguage}>УЗ</a>
                                    <a href="#" className={styles.menuLanguage}>РУС</a>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    </Container>
);

export default Menu;