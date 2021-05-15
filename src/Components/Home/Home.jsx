import React from 'react';
import {Element} from 'react-scroll'
import styles from './home.module.css'
import {Col, Container, Row} from "react-bootstrap";
import multifrukt from '../../assets/home/multifrukt.png'

const Home = (props) => {
    return <>
        <Element name='home'>
            <Container fluid>
                <Row>
                    <Col xl={12} lg={12} md={12} className={styles.homeCol}>
                        <div className={styles.wrapperHome}>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={12}>
                                    <div className={styles.wrapperHomeTitle}>
                                        <h1>DAZA</h1>
                                        <h3>tabiatdan andoza!</h3>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={12} className={styles.imageCol}>
                                    <div>
                                        <img src={multifrukt} className={styles.multifructImage}/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Element>
    </>
}

export default Home