import React from 'react';
import styles from '../Contacts/contacts.module.css'
import {Col, Container, Row} from "react-bootstrap";
import facebookIcon from '../../assets/products/social-network icon/facebook.png'
import youtubeIcon from '../../assets/products/social-network icon/youtube.png'
import telegramIcon from '../../assets/products/social-network icon/telegram.png'
import instagramIcon from '../../assets/products/social-network icon/instagram.png'
import {Parallax} from "react-parallax";
import office from "../../assets/office.jpg";

const Contacts = (props) => {
    return (<>
        <Container>
            <Parallax bgImage={office} strength={250} className={styles.paralax}>
            <Row className={styles.socialNetworkWrapper}>
                <Col xl={3} >
                    <a href="https://www.facebook.com/dazafoods01/">
                    <div className={styles.socialNetwork}>
                        <img src={facebookIcon} />
                        <p>FACEBOOK</p>
                    </div>
                    </a>
                </Col>
                <Col xl={3}>
                    <a href="https://www.youtube.com/channel/UCLqnaaXXtiEZfGkqVIU1PUg?view_as=subscriber">
                    <div className={styles.socialNetwork}>
                        <img src={youtubeIcon}/>
                        <p>YOUTUBE</p>
                    </div>
                    </a>
                </Col>
                <Col xl={3}>
                    <a href="https://t.me/callcentredaza">
                    <div className={styles.socialNetwork}>
                        <img src={telegramIcon}/>
                        <p>TELEGRAM</p>
                    </div>
                    </a>
                </Col>
                <Col xl={3}>
                    <a href="https://www.instagram.com/daza.uz/">
                    <div className={styles.socialNetwork}>
                        <img src={instagramIcon}/>
                        <p>INSTAGRAM</p>
                    </div>
                    </a>
                </Col>
            </Row>
            </Parallax>
        </Container>
    </>);
};
export default Contacts;