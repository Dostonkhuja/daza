import React from 'react';
import styles from "./ourAdvice.module.css";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import blackquote from "../../../assets/products/icon/blackquote.png";
import {useTranslation} from "react-i18next";

const OurAdvice = () => {
    const {t} = useTranslation()
    return <Container fluid>
        <Row>
            <Col xl={12}>
                <div className={styles.backgroundCoruselBox}>
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <div className={styles.wrapperCarouselElemts}>
                                <img src={blackquote}/>
                                <p className={styles.textCorousel}>
                                    {t("our-advice.text1")}
                                </p>
                                <h3 className={styles.titleCarousel}>DAZA™</h3>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <div className={styles.wrapperCarouselElemts}>
                                <img src={blackquote}/>
                                <p className={styles.textCorousel}>
                                    {t("our-advice.text2")}
                                </p>
                                <h3 className={styles.titleCarousel}>DAZA™</h3>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Col>
        </Row>
    </Container>
}

export default OurAdvice