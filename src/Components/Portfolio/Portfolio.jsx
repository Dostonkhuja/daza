import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import style from './portfolio.module.css'
import video01 from '../../assets/portfolio-video/01.mp4'
import video02 from '../../assets/portfolio-video/02.mp4'
import video03 from '../../assets/portfolio-video/03.mp4'
import ReactPlayer from "react-player";

const Portfolio = (props) => {
    const {Slider, Direction} = require('react-player-controls')
    return (<>
        <Container>
            <Row>
                <Col xl={12}>
                    <div>
                        <ReactPlayer url={video01}
                                     className='react-player'
                                     playing
                                     width='100%'
                                     height='100%'
                                     controls
                        />

                    </div>
                </Col>
                <Col xl={6}>
                    <div>
                        <ReactPlayer url={video02}
                                     className='react-player'
                                     playing
                                     width='100%'
                                     height='100%'
                                     controls
                        />

                    </div>
                </Col>
                <Col xl={6}>
                    <div>
                        <ReactPlayer url={video03}
                                     className='react-player'
                                     playing
                                     width='100%'
                                     height='100%'
                                     controls
                        />

                    </div>
                </Col>


            </Row>
        </Container>
    </>);
};
export default Portfolio;