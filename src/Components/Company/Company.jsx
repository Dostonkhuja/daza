import React from 'react';
import {Element} from 'react-scroll'
import styles from './company.module.css'
import {Col, Container, Row} from "react-bootstrap";
import mevali from '../../assets/company/s-fruktom.png'
import daza_cream from '../../assets/company/cream.png'
import daza_dairy from '../../assets/company/dairy.png'
import daza_seeds from '../../assets/company/seeds.jpg'
import {useTranslation} from "react-i18next";

const Company = () => {
    const {t} = useTranslation()
    return <>
        <Element name="company">
            <Container fluid>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12}>
                        <div className={styles.backgroundBlock}>
                            <Row>
                                <Col xl={12} lg={12} md={12} sm={12}>
                                    <div className={styles.companyTitleBox}>
                                        <h1> {t('company.title-company')}</h1>
                                        <p>{t('company.born-company')}</p>
                                        <p>{t('company.level-company')}</p>
                                    </div>
                                </Col>
                                <Col xl={4} lg={4}>
                                    <div className={styles.DespcriptionBox}>
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
                                        <img src={mevali}/>
                                    </div>
                                </Col>
                                <Col xl={4} lg={4}>
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