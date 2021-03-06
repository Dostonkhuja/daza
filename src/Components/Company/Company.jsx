import React, {useEffect, useRef} from 'react';
import {Element} from 'react-scroll'
import styles from './company.module.css'
import {Col, Container, Row} from "react-bootstrap";
import mevali from '../../assets/company/s-fruktom.png'
import daza_cream from '../../assets/company/cream.png'
import daza_dairy from '../../assets/company/dairy.png'
import daza_seeds from '../../assets/company/seeds.jpg'
import {useTranslation} from "react-i18next";

import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Company = () => {
    const {t} = useTranslation()

    let imageBlock = useRef(null)
    let titleBlock = useRef(null)
    let descBlock = useRef(null)
    let descBlockRight = useRef(null)

    useEffect(()=> {
        const tl = gsap.timeline()
        tl.fromTo(imageBlock,{y:300},{y:0})
        ScrollTrigger.create({animation:tl, trigger:imageBlock, start:'center 800px',})

        const tl1 = gsap.timeline()
        tl1.fromTo(titleBlock,2,{y:300, opacity:0},{y:-50, opacity:1})
        ScrollTrigger.create({animation:tl1, trigger:titleBlock, start:'top 1000px',})

        const tl2 = gsap.timeline()
        tl2.fromTo(descBlock,1,{x:-200, opacity:0},{x:0, opacity:1})
        ScrollTrigger.create({animation:tl2, trigger:descBlock, start:'top 300px'})

        const tl3 = gsap.timeline()
        tl2.fromTo(descBlockRight,1,{x:200, opacity:0},{x:0, opacity:1},"-=1")
        ScrollTrigger.create({animation:tl2, trigger:descBlockRight, start:'top 300px',})

    },[])


    return <>
        <Element name="company">
            <Container fluid>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12}>
                        <div className={styles.backgroundBlock} >
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={12}>
                                    <div className={styles.companyTitleBox} ref={el=> {titleBlock= el}}>
                                        <h1> {t('company.title-company')}</h1>
                                        <p>{t('company.born-company')}</p>
                                        <p>{t('company.level-company')}</p>
                                    </div>
                                </Col>
                                <Col xl={4} lg={4} ref={el=> {descBlock= el}}>
                                    <div className={styles.DespcriptionBox} >
                                        <h3>{t('company.prducts-title1')}</h3>
                                        <p>{t('company.prducts-description1')}</p>
                                        <h3>{t('company.prducts-title2')}</h3>
                                        <p>{t('company.prducts-description2')}</p>
                                        <h3>{t('company.prducts-title3')}</h3>
                                        <p>{t('company.prducts-description3')}</p>
                                    </div>
                                </Col>
                                <Col xl={4} lg={4}>
                                    <div className={styles.wrapperBoxImages}>
                                        <img src={mevali} ref={el=> {imageBlock= el}}/>
                                    </div>
                                </Col>
                                <Col xl={4} lg={4} ref={el=> {descBlockRight= el}}>
                                    <div className={styles.DespcriptionBox}>
                                        <h3>{t('company.prducts-title4')}</h3>
                                        <p>{t('company.prducts-description4')}</p>
                                        <br/>
                                        <h3>{t('company.prducts-title5')}</h3>
                                        <p>{t('company.prducts-description5')}</p>
                                        <p className={styles.dazaSery}>
                                            <br/><br/>
                                            <img src={daza_cream}/>, <img src={daza_dairy}/> <img src={daza_seeds}/>
                                            <br/> {t('company.prducts-description6')}
                                        </p>
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

export default Company