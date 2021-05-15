import React from 'react';
import styles from "./ourAdvice.module.css";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import blackquote from "../../../assets/products/icon/blackquote.png";

const OurAdvice = () => {
    return <Container fluid>
            <Row>
                <Col xl={12}>
                    <div className={styles.backgroundCoruselBox}>
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <div className={styles.wrapperCarouselElemts}>
                                    <img src={blackquote}/>
                                    <p className={styles.textCorousel}>
                                        Bizning maqsad – mahsulot foydali, demak tabiiy bo‘lishi shart. Asl mahsulot
                                        shtrix-kod, ishlab chiqaruvchi nomi, DST raqami, tarkibi, hajmi, yaroqlilik
                                        muddati va energetik qimmatiga ega bo‘ladi. Agar ovqat sifati va
                                        salomatligingizga e’tiborli bo‘lsangiz, bular juda qimmat va muhim
                                        axborotlardir!
                                    </p>
                                    <h3 className={styles.titleCarousel}>DAZA™</h3>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <div className={styles.wrapperCarouselElemts}>
                                    <img src={blackquote}/>
                                    <p className={styles.textCorousel}>
                                        Biz xaridorlarga : muzqaymoq, qatiq, qaymoq, kefir, smetana, tvorog, ayron,
                                        yogurt, suzma, brinza kabi sut mahsulotlarini taklif qilamiz. Doimiy xaridorlar
                                        bizning mahsulotlarimiz sifatini yuqori baholaydilar, bu haqida ularning ijobiy
                                        tavsiyalari dalolat beradi. Biz mahsulotlarimizning mazali sifatini yaxshilashga
                                        katta e’tibor qaratamiz.
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