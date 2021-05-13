import React from 'react';
import styles from './menu.module.css'
import logo from '../../assets/logo.png'
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

const Menu = (props) => (
    <Container fluid>
        <Row>
            <Col xl={12}>
                <Navbar expand="lg" className={styles.navbar}>
                    <Navbar.Brand href="#home"><img src={logo} className={styles.logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <ul className={styles.itemBlock}>
                                <li href="#" className={styles.menuItem}>Asosiy</li>
                                <li href="#" className={styles.menuItem}>Kompaniya haqida</li>
                                <li href="#" className={styles.menuItem}>Mahsulotlar</li>
                                <li href="#" className={styles.menuItem}>Prays-list</li>
                                <li href="#" className={styles.menuItem}>Portfolio</li>
                                <li href="#" className={styles.menuItem}>Kontaktlar</li>
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