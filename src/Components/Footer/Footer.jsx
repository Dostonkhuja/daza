import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import styles from './footer.module.css'
import logo from '../../assets/footer/logo1.jpg'
import collect from '../../assets/footer/collect.png'

const Footer = (props) => {
    return (<>
        <Container className={styles.footerWrapper}>
            <Row>
                <Col xl={6}>
                    <div className={styles.wrapperContent}>
                        <img src={logo}/>
                        <p>© {new Date().getFullYear()} barcha huquqlar himoyalangan</p>
                    </div>
                </Col>
                <Col xl={6}>
                    <div className={styles.wrapperContent}>
                        <p>
                            "DAZA FOODS"
                            <br/>
                            O'zbekiston-Bolgariya qo'shma korxonasi.
                            <br/>
                            Manzil: Farg'ona viloyati, <br/>
                            O'zbekiston tumani. <br/>
                            Tel.: (+998 90) 161 82 82 <br/>
                            Elektron manzil: support@dazafoods.com
                        </p>
                        <img src={collect}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </>);
};
export default Footer;