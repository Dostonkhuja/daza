import React from 'react';
import styles from './footer.module.css'
import {Col, Container, Row} from "react-bootstrap";
import collect from '../../assets/footer/collect.png'
import logofooter from '../../assets/footer/logoFooter.png'
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation()
    return <>
        <Container fluid>
            <div className={styles.footerWrapper}>
            <Row>
                <Col xl={6}>
                    <div className={styles.wrapperContent}>
                        <img src={logofooter} className={styles.logo}/>
                        <p>© {new Date().getFullYear()} {t("footer.logo-description")}</p>
                    </div>
                </Col>
                <Col xl={6}>
                    <div className={styles.wrapperContent}>
                        <p>
                            "DAZA FOODS"
                            <br/>
                            {t("footer.company")}
                            <br/>
                            {t("footer.adress")}
                            <br/>
                            {t("footer.tel")}
                            <br/>
                            {t("footer.email")}
                        </p>
                        <img src={collect}/>
                    </div>
                </Col>
            </Row>
            </div>
        </Container>
    </>
}
export default Footer