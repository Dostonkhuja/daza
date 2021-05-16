import React from 'react';
import styles from "./productsGalarey.module.css";
import {Col, Container, Row} from "react-bootstrap";
import liderBanner from "../../../assets/products/product-galarey banner/lider.jpg";
import lider from "../../../assets/products/product-galarey/lider.jpg";
import qaymoqliPlombirBanner from "../../../assets/products/product-galarey banner/qaymoqliPlombir.jpg";
import qaymoqliPlombir from "../../../assets/products/product-galarey/qaymoqliPlombir.jpg";
import qaymoqliPlombirShokoladBanner
    from "../../../assets/products/product-galarey banner/qaymoqliPlombriShokolad1.jpg";
import qaymoqliPlombirShokolad from "../../../assets/products/product-galarey/qaymoqliPlombriShokolad1.jpg";
import multimevaBanner from "../../../assets/products/product-galarey banner/multifrukt.jpg";
import multimeva from "../../../assets/products/product-galarey/multifrukt.jpg";
import mevaTamliBanner from "../../../assets/products/product-galarey banner/s-fruktom.jpg";
import mevaTamli from "../../../assets/products/product-galarey/s-fruktom.jpg";
import mevaTamli2Banner from "../../../assets/products/product-galarey banner/s-fruktom2.jpg";
import mevaTamli2 from "../../../assets/products/product-galarey/s-fruktom2.jpg";
import exoticBanner from "../../../assets/products/product-galarey banner/exotic.jpg";
import exotic from "../../../assets/products/product-galarey/exotic.jpg";
import multifrukt2Banner from "../../../assets/products/product-galarey banner/multifrukt2.jpg";
import multifrukt2 from "../../../assets/products/product-galarey/multifrukt2.jpg";
import shokolatGalzurniyBanner from "../../../assets/products/product-galarey banner/shokolad-glazurniy.jpg";
import shokolatGalzurniy from "../../../assets/products/product-galarey/shokolad-glazurniy.jpg";
import vaflenniyBanner from "../../../assets/products/product-galarey banner/vaflinniy.jpg";
import vaflenniy from "../../../assets/products/product-galarey/vaflinniy.jpg";
import rojkaBanner from "../../../assets/products/product-galarey banner/rojka.jpg";
import rojka from "../../../assets/products/product-galarey/rojka.jpg";
import stakanchikBanner from "../../../assets/products/product-galarey banner/stakanchik.jpg";
import stakanchik from "../../../assets/products/product-galarey/stakanchik.jpg";
import palochkaBanner from "../../../assets/products/product-galarey banner/palochka.jpg";
import palochka from "../../../assets/products/product-galarey/palochka.jpg";
import ayranPalochkaBanner from "../../../assets/products/product-galarey banner/ayran.jpg";
import ayranPalochka from "../../../assets/products/product-galarey/ayran.jpg";
import konfetkaBanner from "../../../assets/products/product-galarey banner/konfetka.jpg";
import konfetka from "../../../assets/products/product-galarey/konfetka.jpg";
import miniVinettaBanner from "../../../assets/products/product-galarey banner/mini-vieta.png";
import miniVinetta from "../../../assets/products/product-galarey/mini-vieta.png";
import plombirSlivkaBanner from "../../../assets/products/product-galarey banner/plombir-slivka.jpg";
import plombirSlivka from "../../../assets/products/product-galarey/plombir-slivka.jpg";
import smetana10Banner from "../../../assets/products/product-galarey banner/smetana-10.jpg";
import smetana10 from "../../../assets/products/product-galarey/smetana-10.jpg";
import qatiqBanner from "../../../assets/products/product-galarey banner/katik1L.jpg";
import qatiq from "../../../assets/products/product-galarey/katik1L.jpg";
import chempionBanner from "../../../assets/products/product-galarey banner/chempion.jpg";
import chempion from "../../../assets/products/product-galarey/chempion.jpg";
import konizarBanner from "../../../assets/products/product-galarey banner/konizar.jpg";
import konizar from "../../../assets/products/product-galarey/konizar.jpg";
import qaymoqBanner from "../../../assets/products/product-galarey banner/qaymoq.png";
import qaymoq from "../../../assets/products/product-galarey/qaymoq.png";
import xonadonBanner from "../../../assets/products/product-galarey banner/xonadon.jpg";
import xonadon from "../../../assets/products/product-galarey/xonadon.jpg";
import ayronBanner from "../../../assets/products/product-galarey banner/ayran2.jpg";
import ayron from "../../../assets/products/product-galarey/ayran2.jpg";
import yogurtBanner from "../../../assets/products/product-galarey banner/yogurt.jpg";
import yogurt from "../../../assets/products/product-galarey/yogurt.jpg";
import kefirBanner from "../../../assets/products/product-galarey banner/kefir.jpg";
import kefir from "../../../assets/products/product-galarey/kefir.jpg";
import tvorogBanner from "../../../assets/products/product-galarey banner/tvorog.jpg";
import tvorog from "../../../assets/products/product-galarey/tvorog.jpg";
import semechkaBanner from "../../../assets/products/product-galarey banner/semechka.jpg";
import semechka from "../../../assets/products/product-galarey/semechka.jpg";
import semechka25Banner from "../../../assets/products/product-galarey banner/semechki25.jpg";
import semechka25 from "../../../assets/products/product-galarey/semechki25.jpg";
import paketBanner from "../../../assets/products/product-galarey banner/paket.jpg";
import paket from "../../../assets/products/product-galarey/paket.jpg";

import {useTranslation} from "react-i18next";

const ProductGalarey = () => {
    const {t} = useTranslation()
    return <div className={styles.ProductsbackgroundBlock}>
        <Row>
            <Col xl={4} sm={6} md={6} lg={4}>
                <div className={styles.wrapperProductPhotos}>
                    <img src={liderBanner} className={styles.ProductPhotoBanner}/>
                    <img src={lider} className={styles.ProductPhoto}/>
                </div>
                <h3 className={styles.productWrapperTitle}>{t("product-galarey.product1")}</h3>
            </Col>
            <Col xl={4} sm={6} md={6} lg={4}>
                <div className={styles.wrapperProductPhotos}>
                    <img src={qaymoqliPlombirBanner} className={styles.ProductPhotoBanner}/>
                    <img src={qaymoqliPlombir} className={styles.ProductPhoto}/>
                </div>
                <h3 className={styles.productWrapperTitle}>{t("product-galarey.product2")}</h3>
            </Col>
            <Col xl={4} sm={6} md={6} lg={4}>
                <div className={styles.wrapperProductPhotos}>
                    <img src={qaymoqliPlombirShokoladBanner} className={styles.ProductPhotoBanner}/>
                    <img src={qaymoqliPlombirShokolad} className={styles.ProductPhoto}/>
                </div>
                <h3 className={styles.productWrapperTitle}>{t("product-galarey.product3")}</h3>
            </Col>
            <Col xl={4} sm={6} md={6} lg={4}>
                <div className={styles.wrapperProductPhotos}>
                    <img src={multimevaBanner} className={styles.ProductPhotoBanner}/>
                    <img src={multimeva} className={styles.ProductPhoto}/>
                </div>
                <h3 className={styles.productWrapperTitle}>{t("product-galarey.product4")}</h3>
            </Col>
            <Col xl={4} sm={6} md={6} lg={4}>
                <div className={styles.wrapperProductPhotos}>
                    <img src={mevaTamliBanner} className={styles.ProductPhotoBanner}/>
                    <img src={mevaTamli} className={styles.ProductPhoto}/>
                </div>
                <h3 className={styles.productWrapperTitle}>{t("product-galarey.product5")}</h3>
            </Col>
            <Col xl={4} sm={6} md={6} lg={4}>
                <div className={styles.wrapperProductPhotos}>
                    <img src={mevaTamli2Banner} className={styles.ProductPhotoBanner}/>
                    <img src={mevaTamli2} className={styles.ProductPhoto}/>
                </div>
                <h3 className={styles.productWrapperTitle}>{t("product-galarey.product6")}</h3>
            </Col>
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={exoticBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={exotic} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product7")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={multifrukt2Banner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={multifrukt2} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product8")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={shokolatGalzurniyBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={shokolatGalzurniy} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product9")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={vaflenniyBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={vaflenniy} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product10")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={rojkaBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={rojka} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product11")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={stakanchikBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={stakanchik} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product12")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={palochkaBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={palochka} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product13")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={ayranPalochkaBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={ayranPalochka} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product14")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={konfetkaBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={konfetka} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product15")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={miniVinettaBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={miniVinetta} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product16")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={plombirSlivkaBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={plombirSlivka} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product17")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={smetana10Banner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={smetana10} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product18")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={qatiqBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={qatiq} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product19")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={chempionBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={chempion} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product20")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={konizarBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={konizar} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product21")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={qaymoqBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={qaymoq} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product22")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={xonadonBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={xonadon} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product23")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={ayronBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={ayron} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product24")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={yogurtBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={yogurt} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product25")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={kefirBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={kefir} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product26")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={tvorogBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={tvorog} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product27")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={semechkaBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={semechka} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product28")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={semechka25Banner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={semechka25} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product29")}</h3>*/}
            {/*</Col>*/}
            {/*<Col xl={4} sm={6} md={6} lg={4}>*/}
            {/*    <div className={styles.wrapperProductPhotos}>*/}
            {/*        <img src={paketBanner} className={styles.ProductPhotoBanner}/>*/}
            {/*        <img src={paket} className={styles.ProductPhoto}/>*/}
            {/*    </div>*/}
            {/*    <h3 className={styles.productWrapperTitle}>{t("product-galarey.product30")}*/}
            {/*    </h3>*/}
            {/*</Col>*/}
        </Row>
    </div>
};

export default ProductGalarey;