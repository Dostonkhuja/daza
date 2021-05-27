import React, {useEffect, useRef} from 'react';
import {Element} from 'react-scroll'
import styles from './home.module.css'
import {Carousel, Col, Container, Row} from "react-bootstrap";
import multifrukt from '../../assets/home/multifrukt.png'

import image2 from '../../assets/home/2.png'
import image3 from '../../assets/home/3t.png'
import image4 from '../../assets/home/4t.png'
import image5 from '../../assets/home/5t.png'
import image6 from '../../assets/home/6t.png'
import {gsap, Power3, TweenMax} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = (props) => {

    let titleItem= useRef(null)


    useEffect(()=>{
        TweenMax.to(titleItem,1,{opacity:1,y:-100,ease:Power3.easeOut})
    },[])

    return <>
        <Element name='home'>
            <Container fluid className={styles.wrapperHomeCol}>
                <Row>
                    <Col xl={12} lg={12} md={12} className={styles.homeCol}>
                        <div className={styles.wrapperHome}>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={12}>
                                    <div className={styles.wrapperHomeTitle} ref={el=> {titleItem = el}}>
                                        <h1>DAZA</h1>
                                        <h3>tabiatdan andoza!</h3>
                                    </div>
                                </Col>
                                <Col  xl={6} lg={6} md={6} className={styles.imageCol}>
                                    <div className={styles.wrapperCarousel}>
                                        <Carousel controls={false} indicators={false} slide={false}>
                                            <Carousel.Item interval={300}>
                                                <img src={multifrukt} className={styles.multifructImage}/>
                                            </Carousel.Item>
                                            <Carousel.Item interval={300}>
                                                <img src={image2} className={styles.multifructImage} />
                                            </Carousel.Item>
                                            <Carousel.Item interval={300}>
                                                <img src={image3} className={styles.multifructImage} />
                                            </Carousel.Item>
                                            <Carousel.Item interval={300}>
                                                <img src={image4} className={styles.multifructImage} />
                                            </Carousel.Item>
                                            <Carousel.Item interval={300}>
                                                <img src={image5} className={styles.multifructImage} />
                                            </Carousel.Item>
                                            <Carousel.Item interval={300}>
                                                <img src={image6} className={styles.multifructImage} />
                                            </Carousel.Item>
                                        </Carousel>
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