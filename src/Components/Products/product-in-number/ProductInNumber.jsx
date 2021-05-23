import React, {useEffect, useRef} from 'react';

import styles from "./productsInNumber.module.css";
import {Parallax, Background} from "react-parallax";
import {Col, Container, Row} from "react-bootstrap";
import bgIconProductNumber from "../../../assets/products/icon/icon-bg.png";
import dairyIcon from "../../../assets/products/icon/number-Dairy-Icon.png";
import seedsIcon from "../../../assets/products/icon/number-Seeds-Icon.png";
import packageIcon from "../../../assets/products/icon/number-Bag-Icon.png";
import iceCreamIcon from "../../../assets/products/icon/number-IceCream-icon.png";
import paralaxBackground from "../../../assets/bino.jpg";
import {useTranslation} from "react-i18next";
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


const ProductInNumber = () => {
    const {t} = useTranslation()

    let fide= useRef(null)
    useEffect(()=> {
        const tl = gsap.timeline()
        tl.fromTo(fide,2, {x: 600 ,opacity:0}, {x: 0, opacity:1})
        ScrollTrigger.create({animation: tl, trigger: fide, start: 'top top',})
    },[])

    return <Parallax strength={500}>
            <Background className={styles.customBg}>
                <img src={paralaxBackground}/>
            </Background>
        <Container fluid>
            <Row>
                <Col xl={12} ref={el=>fide=el}>
                    <Row>
                        <Col xl={3} lg={3} md={6}>
                            <div className={styles.NumberIconWrapper}>
                                <img src={iceCreamIcon} className={styles.NumberIcon}/>
                                <img src={bgIconProductNumber} className={styles.iconCover}/>
                                <h1>17</h1>
                                <h4>{t("product-number.title1-part1")}<br/>{t("product-number.title1-part2")}</h4>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={6}>
                            <div className={styles.NumberIconWrapper}>
                                <img src={dairyIcon} className={styles.NumberIcon}/>
                                <img src={bgIconProductNumber} className={styles.iconCover}/>
                                <h1>10</h1>
                                <h4>{t("product-number.title2-part1")}<br/>{t("product-number.title2-part2")}</h4>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={6}>
                            <div className={styles.NumberIconWrapper}>
                                <img src={seedsIcon} className={styles.NumberIcon}/>
                                <img src={bgIconProductNumber} className={styles.iconCover}/>
                                <h1>2</h1>
                                <h4>{t("product-number.title3")}</h4>
                            </div>
                        </Col>
                        <Col xl={3} lg={3} md={6}>
                            <div className={styles.NumberIconWrapper}>
                                <img src={packageIcon} className={styles.NumberIcon}/>
                                <img src={bgIconProductNumber} className={styles.iconCover}/>
                                <h1>1</h1>
                                <h4>{t("product-number.title4-part1")} <br/>{t("product-number.title4-part2")}</h4>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
    </Container>
    </Parallax>
}

export default ProductInNumber