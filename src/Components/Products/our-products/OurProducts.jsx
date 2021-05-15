import React from 'react';
import styles from "./ourProducts.module.css";
import {Col, Container, Row} from "react-bootstrap";
import packages from "../../../assets/products/icon/package.png";
import iceCream from "../../../assets/products/icon/iceCream.png";
import sunflower from "../../../assets/products/icon/sunflower.png";
import dairyGreen from "../../../assets/products/icon/dairyGreen.png";

const OurProducts = () => {
    return <Container fluid>
            <div className={styles.backgroundBlock}>
                <Row>
                    <Col xl={12} lg={12}>
                        <h1 className={styles.productTitle}>Bizning mahsulotlar</h1>
                    </Col>
                    <Col xl={3} lg={3} sm={6}>
                        <div className={styles.overProductsItem}>
                            <img src={iceCream}/>
                            <h3>MUZQAYMOQ</h3>
                            <p>Plombir, qaymoqlik, sutli, mayin...</p>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} sm={6}>
                        <div className={styles.overProductsItem}>
                            <img src={dairyGreen}/>
                            <h3>SUT MAHSULOTLARI</h3>
                            <p>Qatiq, qaymoq, kefir, smetana, tvorog, ayron, yogurt, suzma, brinza...</p>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} sm={6}>
                        <div className={styles.overProductsItem}>
                            <img src={sunflower}/>
                            <h3>QOVURILGAN KUNGABOQAR PISTALARI</h3>
                            <p>Pista ...</p>
                        </div>
                    </Col>
                    <Col xl={3} lg={3} sm={6}>
                        <div className={styles.overProductsItem}>
                            <img src={packages}/>
                            <h3>POLIMER PLYONKADAN PAKETLAR</h3>
                            <p>Polimer plyonkadan paketlar (shu jumladan dastaksiz)</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
}

export default OurProducts