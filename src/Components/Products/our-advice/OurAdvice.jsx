import React, {useEffect, useRef} from 'react';
import styles from "./ourAdvice.module.css";
import {Carousel, Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import blackquote from "../../../assets/products/icon/blackquote.png";
gsap.registerPlugin(ScrollTrigger)

const OurAdvice = () => {
    const {t} = useTranslation()

    let fide= useRef(null)
    useEffect(()=> {
        const tl = gsap.timeline()
        tl.fromTo(fide,1, {y: 300 ,opacity:0}, {y: 0, opacity:1})
        ScrollTrigger.create({animation: tl, trigger: fide, start: 'top 100px',})
    },[])


    return  <div className={styles.backgroundCoruselBox} ref={el=>fide=el}>
    <Container fluid>
        <Row>
            <Col xl={12}>
                    <Carousel   slide={false}>
                        <Carousel.Item >
                            <div className={styles.wrapperCarouselElemts}>
                                <img src={blackquote}/>
                                <p className={styles.textCorousel}>
                                    {t("our-advice.text1")}
                                </p>
                                <h3 className={styles.titleCarousel}>DAZA™</h3>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item >
                            <div className={styles.wrapperCarouselElemts}>
                                <img src={blackquote}/>
                                <p className={styles.textCorousel}>
                                    {t("our-advice.text2")}
                                </p>
                                <h3 className={styles.titleCarousel}>DAZA™</h3>
                            </div>
                        </Carousel.Item>
                    </Carousel>
            </Col>
        </Row>
    </Container>
    </div>
}

export default OurAdvice