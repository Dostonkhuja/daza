import React from 'react';
import styles from "./ourProducts.module.css";
import {Col, Container, Row} from "react-bootstrap";
import packages from "../../../assets/products/icon/package.png";
import iceCream from "../../../assets/products/icon/iceCream.png";
import sunflower from "../../../assets/products/icon/sunflower.png";
import dairyGreen from "../../../assets/products/icon/dairyGreen.png";
import {useTranslation} from "react-i18next";

const OurProducts = () => {
    const {t} = useTranslation()
    return <Container fluid>
            <div className={styles.backgroundBlock}>
                <Row>
                    <Col xl={12} lg={12}>
                        <h1 className={styles.productTitle}>{t("our-products.product-title")}</h1>
                    </Col>
                    <Col xl={3} lg={3} sm={6}>
                        <div className={styles.overProductsItem}>
                            <img src={iceCream}/>
                            <h3>{t("our-products.ice-cream")}</h3>
                            <p>{t("our-products.ice-cream-description")}</p>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} sm={6}>
                        <div className={styles.overProductsItem}>
                            <img src={dairyGreen}/>
                            <h3>{t("our-products.dairy")}</h3>
                            <p>{t("our-products.dairy-description")}</p>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} sm={6}>
                        <div className={styles.overProductsItem}>
                            <img src={sunflower}/>
                            <h3>{t("our-products.seeds")}</h3>
                            <p>{t("our-products.seeds-description")}</p>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} sm={6}>
                        <div className={styles.overProductsItem}>
                            <img src={packages}/>
                            <h3>{t("our-products.bag")}</h3>
                            <p>{t("our-products.bag-description")}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
}

export default OurProducts