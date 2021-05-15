import React from 'react';
import {Element} from 'react-scroll'
import styles from '../Contacts/contacts.module.css'
import {Col, Container, Row} from "react-bootstrap";

import {Parallax} from "react-parallax";
import office from "../../assets/office.jpg";
import youtubeIcon from '../../assets/contacts/youtube.png'
import telegramIcon from '../../assets/contacts/telegram.png'
import facebookIcon from '../../assets/contacts/facebook.png'
import instagramIcon from '../../assets/contacts/instagram.png'

const Contacts = (props) => {
    return <>
        <Element name='contacts'>
            <Container fluid>
                <Parallax bgImage={office} strength={250} className={styles.paralax}>
                    <Row className={styles.socialNetworkWrapper}>
                        <Col xl={3} lg={3} md={3} sm={6}>
                            <a target="_blank" href="https://www.facebook.com/dazafoods01/">
                                <div className={styles.socialNetwork}>
                                    <img src={facebookIcon}/>
                                    <p className={styles.facebookTitle}>Facebook</p>
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}>
                            <a target="_blank"
                               href="https://www.youtube.com/channel/UCLqnaaXXtiEZfGkqVIU1PUg?view_as=subscriber">
                                <div className={styles.socialNetwork}>
                                    <img src={youtubeIcon}/>
                                    <p className={styles.youtubeTitle}>YouTube</p>
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}>
                            <a target="_blank" href="https://t.me/callcentredaza">
                                <div className={styles.socialNetwork}>
                                    <img src={telegramIcon}/>
                                    <p className={styles.telegramTitle}>Telegram</p>
                                </div>
                            </a>
                        </Col>
                        <Col xl={3} lg={3} md={3} sm={6}>
                            <a target="_blank" href="https://www.instagram.com/daza.uz/">
                                <div className={styles.socialNetwork}>
                                    <img src={instagramIcon}/>
                                    <p className={styles.instagramTitle}>Instaram</p>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Parallax>
                <div className={styles.zigZag}/>
            </Container>
        </Element>
    </>
}
export default Contacts



