import React, {useState} from 'react';
import styles from "./productsGalarey.module.css";
import {Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {products} from "./ProductsArray";
import iconDown from '../../../assets/products/icon/Down.ico'

const ProductGalarey = () => {
    const [count, setCount] = useState(6)
    const {t} = useTranslation()
    return <div className={styles.ProductsbackgroundBlock}>
        <Row>
            {products
                .filter(p => {
                    return p.id < count
                })
                .map(p =>
                    <Col xl={4} sm={6} md={6} lg={4}>
                        <div className={styles.wrapperProductPhotos}>
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
                    <img src={iconDown} />
                </button>
            </Col>
        </Row>
    </div>
};

export default ProductGalarey;