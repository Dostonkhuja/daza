import React, {useEffect, useRef, useState} from 'react';
import styles from "./productsGalarey.module.css";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {products} from "./ProductsArray";
import iconDown from '../../../assets/products/icon/Down.ico'
import VanillaTilt from "vanilla-tilt";
import Viewer from 'react-viewer'
import {gsap} from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ProductGalarey = () => {
    const [count, setCount] = useState(6)
    const {t} = useTranslation()

    const options = {scale: 1.07, speed: 1000, max: 30};
    let tilts = useRef([]);
    useEffect(() => {tilts.current.map(el =>  VanillaTilt.init(el, options) )}, [options]);

    const [visible, setVisible] = useState(false);
    const [idViewer, setIdViewer] = useState(0);

    let ourProductTitle= useRef(null)
    useEffect(()=> {
        const tl = gsap.timeline()
        tl.fromTo(ourProductTitle,2, {y: 300 ,opacity:0}, {y: 0, opacity:1})
        ScrollTrigger.create({animation: tl, trigger: ourProductTitle, start: 'top 600px',})
    },[])


    return <div className={styles.ProductsbackgroundBlock} ref={el=>ourProductTitle = el}>
        <Viewer
            visible={visible}
            onClose={() => {setVisible(false)}}
            images={[{src:products[idViewer].photoBanner}, {src:products[idViewer].photo}]}
        />
        <Row>
            {products
                .filter(p => {
                    return p.id < count
                })
                .map((p,index) =>
                    <Col xl={4} sm={6} md={6} lg={4} key={p.id}>
                        <div className={styles.wrapperProductPhotos}
                             ref={(element) => tilts.current[index] = element}
                             onClick={() => {
                                 setVisible(true)
                                 setIdViewer(p.id)}
                             }
                        >
                            <img src={p.photoBanner} className={styles.ProductPhotoBanner}/>
                            <img src={p.photo} className={styles.ProductPhoto}/>
                        </div>
                        <h3 className={styles.productWrapperTitle}>{t(`product-galarey.${p.id}.product`)}</h3>
                    </Col>
                )
            }
            <Col xl={12} className={styles.wrapperButtonDown}>
                <button className={"btn"}
                        onClick={() => setCount(count + 6)}
                        disabled={count >= products.length ? true : false}
                >
                    <img src={iconDown}/>
                </button>
            </Col>
        </Row>
    </div>
}

export default ProductGalarey;