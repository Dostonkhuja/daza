import React from 'react';
import styles from './home.module.css'
import {Col, Container, Row} from "react-bootstrap";
import multifrukt from '../../assets/home/multifrukt.png'

const Home = (props) => {
    return (<>
        <Container fluid>
            <Row>
                <Col xl={12}>
                 <div className={styles.wrapperHome}>
                     <Row>
                         <Col xl={6}>
                             <div className={styles.wrapperHomeTitle}>
                                 <h1>DAZA</h1>
                                 <h3>tabiatdan andoza!</h3>
                             </div>
                         </Col>
                         <Col xl={6}>
                             <div>
                                 <img src={multifrukt} className={styles.multifructImage}/>
                             </div>
                         </Col>
                     </Row>
                 </div>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Home;