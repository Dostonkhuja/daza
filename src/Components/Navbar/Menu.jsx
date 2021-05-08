import React from 'react';
import styles from './menu.module.css'
import logo from '../../assets/logo.png'
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";

const Menu = (props) => (
    <Container>
        <Row>
            <Col xl={12}>
                <Navbar expand="lg" className={styles.navbar}>
                    <Navbar.Brand href="#home"><img src={logo} className={styles.logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <ul>
                                <li href="#" className={styles.menuItem}>ASOSIY</li>
                                <li href="#" className={styles.menuItem}>KOMPANIYA HAQIDA</li>
                                <li href="#" className={styles.menuItem}>MAHSULOTLAR</li>
                                <li href="#" className={styles.menuItem}>PRAYS-LIST</li>
                                <li href="#" className={styles.menuItem}>PORTFOLIO</li>
                                <li href="#" className={styles.menuItem}>KONTAKTLAR</li>
                                <li href="#" className={styles.menuLanguageOne}>UZ</li>
                                <li href="#" className={styles.menuLanguage}>УЗ</li>
                                <li href="#" className={styles.menuLanguage}>РУС</li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    </Container>
);

export default Menu;