import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css'
import 'react-owl-carousel2/src/owl.theme.green.css'
import {Element} from 'react-scroll'

import styles from './portfolio.module.css'
import video01 from '../../assets/portfolio-video/01.mp4'
import video02 from '../../assets/portfolio-video/02.mp4'
import video03 from '../../assets/portfolio-video/03.mp4'
import ReactPlayer from "react-player";

import lider from '../../assets/products/product-galarey/lider.jpg'
import qaymoqliPlombir from "../../assets/products/product-galarey/qaymoqliPlombir.jpg";
import qaymoqliPlombirShokolad from "../../assets/products/product-galarey/qaymoqliPlombriShokolad1.jpg";
import multimeva from "../../assets/products/product-galarey/multifrukt.jpg";
import mevaTamli from "../../assets/products/product-galarey/s-fruktom.jpg";
import mevaTamli2 from "../../assets/products/product-galarey/s-fruktom2.jpg";
import exotic from "../../assets/products/product-galarey/exotic.jpg";
import multifrukt2 from "../../assets/products/product-galarey/multifrukt2.jpg";
import shokolatGalzurniy from "../../assets/products/product-galarey/shokolad-glazurniy.jpg";
import vaflenniy from "../../assets/products/product-galarey/vaflinniy.jpg";
import rojka from "../../assets/products/product-galarey/rojka.jpg";
import stakanchik from "../../assets/products/product-galarey/stakanchik.jpg";
import palochka from "../../assets/products/product-galarey/palochka.jpg";
import ayranPalochka from "../../assets/products/product-galarey/ayran.jpg";
import konfetka from "../../assets/products/product-galarey/konfetka.jpg";
import miniVinetta from "../../assets/products/product-galarey/mini-vieta.png";
import plombirSlivka from "../../assets/products/product-galarey/plombir-slivka.jpg";
import smetana10 from "../../assets/products/product-galarey/smetana-10.jpg";
import qatiq from "../../assets/products/product-galarey/katik1L.jpg";
import chempion from "../../assets/products/product-galarey/chempion.jpg";
import konizar from "../../assets/products/product-galarey/konizar.jpg";
import qaymoq from "../../assets/products/product-galarey/qaymoq.png";
import xonadon from "../../assets/products/product-galarey/xonadon.jpg";
import ayron from "../../assets/products/product-galarey/ayran2.jpg";
import yogurt from "../../assets/products/product-galarey/yogurt.jpg";
import kefir from "../../assets/products/product-galarey/kefir.jpg";
import tvorog from "../../assets/products/product-galarey/tvorog.jpg";
import semechka from "../../assets/products/product-galarey/semechka.jpg";
import semechka25 from "../../assets/products/product-galarey/semechki25.jpg";


const Portfolio = (props) => {
    const options = {
        items: 6,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'>  <  </div>", "<div class='nav-btn next-slide'> > </div>"],
        rewind: true,
        autoplay: true,
        slideBy: 2,
    };

    return <>
        <Element name='portfolio'>
            <Container fluid className={styles.BackgroundImage}>
                <Row>
                    <Col
                        xl={{span: 5, offset: 1}}
                        lg={{span: 5, offset: 1}}
                        md={{span: 5, offset: 1}}
                        >
                        <div className={styles.VideoWrapper}>
                            <ReactPlayer url={video01}
                                         className='react-player'
                                         width='100%'
                                         height='80%'
                                         controls
                            />
                        </div>
                    </Col>
                    <Col xl={5} lg={5} md={5}>
                        <div className={styles.videoAtBox}>
                            <img src={rojka}/>
                        </div>
                    </Col>
                    <Col xl={{span: 5, offset: 1}}
                         lg={{span: 5, offset: 1}}
                         md={{span: 5, offset: 1}}
                    >
                        <div className={styles.videoAtBox}>
                            <img src={semechka25}/>
                        </div>
                    </Col>
                    <Col xl={5} lg={5} md={5}>
                        <div className={styles.VideoWrapper}>
                            <ReactPlayer url={video03}
                                         className='react-player'
                                         width='100%'
                                         height='80%'
                                         controls
                            />
                        </div>
                    </Col>

                    <Col xl={{span: 5, offset: 1}}
                         lg={{span: 5, offset: 1}}
                         md={{span: 5, offset: 1}}
                    >
                        <div className={styles.VideoWrapper}>
                            <ReactPlayer url={video02}
                                         className='react-player'
                                         width='100%'
                                         height='80%'
                                         controls
                            />
                        </div>
                    </Col>
                    <Col xl={5} lg={5} md={5}>
                        <div className={styles.videoAtBox}>
                            <img src={stakanchik}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} className={styles.carouselOwl}>
                        <OwlCarousel
                            options={options}
                        >
                            <div><img src={lider}/></div>
                            <div><img src={qaymoqliPlombir}/></div>
                            <div><img src={qaymoqliPlombirShokolad}/></div>
                            <div><img src={multimeva}/></div>
                            <div><img src={mevaTamli}/></div>
                            <div><img src={mevaTamli2}/></div>
                            <div><img src={exotic}/></div>
                            <div><img src={multifrukt2}/></div>
                            <div><img src={shokolatGalzurniy}/></div>
                            <div><img src={vaflenniy}/></div>
                            <div><img src={rojka}/></div>
                            <div><img src={stakanchik}/></div>
                            <div><img src={palochka}/></div>
                            <div><img src={ayranPalochka}/></div>
                            <div><img src={konfetka}/></div>
                            <div><img src={miniVinetta}/></div>
                            <div><img src={plombirSlivka}/></div>
                            <div><img src={smetana10}/></div>
                            <div><img src={qatiq}/></div>
                            <div><img src={chempion}/></div>
                            <div><img src={konizar}/></div>
                            <div><img src={qaymoq}/></div>
                            <div><img src={xonadon}/></div>
                            <div><img src={ayron}/></div>
                            <div><img src={yogurt}/></div>
                            <div><img src={kefir}/></div>
                            <div><img src={tvorog}/></div>
                            <div><img src={semechka}/></div>
                            <div><img src={semechka25}/></div>
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
        </Element>
    </>
};
export default Portfolio