import React from 'react';
import styles from './products.module.css'
import packages from '../../assets/products/package.jpg'
import iceCream from '../../assets/products/iceCream.jpg'
import sunflower from '../../assets/products/sunflower.jpg'
import dairyGreen from '../../assets/products/dairyGreen.jpg'
import {Carousel, Col, Container, Row} from "react-bootstrap";

import lider from '../../assets/products/product-galarey/lider.jpg'
import qaymoqliPlombir from '../../assets/products/product-galarey/qaymoqliPlombir.jpg'
import qaymoqliPlombirShokolad from '../../assets/products/product-galarey/qaymoqliPlombriShokolad1.jpg'
import multimeva from '../../assets/products/product-galarey/multifrukt.jpg'
import mevaTamli from '../../assets/products/product-galarey/s-fruktom.jpg'
import mevaTamli2 from '../../assets/products/product-galarey/s-fruktom2.jpg'
import exotic from '../../assets/products/product-galarey/exotic.jpg'
import multifrukt2 from '../../assets/products/product-galarey/multifrukt2.jpg'
import shokolatGalzurniy from '../../assets/products/product-galarey/shokolad-glazurniy.jpg'
import vaflenniy from '../../assets/products/product-galarey/vaflinniy.jpg'
import rojka from '../../assets/products/product-galarey/rojka.jpg'
import stakanchik from '../../assets/products/product-galarey/stakanchik.jpg'
import palochka from '../../assets/products/product-galarey/palochka.jpg'
import ayranPalochka from '../../assets/products/product-galarey/ayran.jpg'
import konfetka from '../../assets/products/product-galarey/konfetka.jpg'
import miniVinetta from '../../assets/products/product-galarey/mini-vieta.png'
import plombirSlivka from '../../assets/products/product-galarey/plombir-slivka.jpg'
import smetana10 from '../../assets/products/product-galarey/smetana-10.jpg'
import qatiq from '../../assets/products/product-galarey/katik1L.jpg'
import chempion from '../../assets/products/product-galarey/chempion.jpg'
import konizar from '../../assets/products/product-galarey/konizar.jpg'
import qaymoq from '../../assets/products/product-galarey/qaymoq.png'
import xonadon from '../../assets/products/product-galarey/xonadon.jpg'
import ayron from '../../assets/products/product-galarey/ayran2.jpg'
import yogurt from '../../assets/products/product-galarey/yogurt.jpg'
import kefir from '../../assets/products/product-galarey/kefir.jpg'
import tvorog from '../../assets/products/product-galarey/tvorog.jpg'
import semechka from '../../assets/products/product-galarey/semechka.jpg'
import semechka25 from '../../assets/products/product-galarey/semechki25.jpg'
import paket from '../../assets/products/product-galarey/paket.jpg'

import iceCreamIcon from '../../assets/products/icon/icecream.png'
import dairyIcon from '../../assets/products/icon/dairy.png'
import seedsIcon from '../../assets/products/icon/seeds.png'
import packageIcon from '../../assets/products/icon/bag.png'

import bino from '../../assets/bino.jpg'
import {Parallax} from "react-parallax";

const Products = (props) => {
    return (<>
        <Container>
            <div className={styles.productsBlock}>
            <Row>
                    <Col xl={12}>
                        <h1 className={styles.productBigTitle}>Bizning mahsulotlar</h1>
                    </Col>
                    <Col xl={3}>
                        <div className={styles.iceCream}>
                            <img src={iceCream} />
                            <h1>MUZQAYMOQ</h1>
                            <p>Plombir,qaymoqlik,sutlik,mayin...</p>
                        </div>
                    </Col>
                    <Col xl={3} >
                        <div className={styles.dairy}>
                            <img src={dairyGreen} />
                            <h1>SUT MAHSULOTLARI</h1>
                            <p>qatiq,qaymoq,yogurt,brinza...</p>
                        </div>
                    </Col>
                    <Col xl={3} >
                        <div className={styles.seeds}>
                            <img src={sunflower} />
                            <h1>QOVURILGAN KUNGABOQAR <br/> PISTALARI</h1>
                            <p>pista...</p>
                        </div>
                    </Col>
                    <Col xl={3} >
                        <div className={styles.packages}>
                            <img src={packages} />
                            <h1>POLIMER PLYONKADAN <br/> PAKETLAR</h1>
                            <p>Polimer plyonkadan paketlar <br/>(shu jumladan dastaksiz)</p>
                        </div>
                    </Col>
            </Row>
            </div>
            <div className={styles.products}>
            <Row>
                <Col xl={4}><div><img src={lider} className={styles.productImage}/> <p className={styles.productTitle}>LIDER(UZ)</p></div></Col>
                <Col xl={4}><div><img src={qaymoqliPlombir} className={styles.productImage}/><p className={styles.productTitle}>QAYMOQLI PLOMBIR</p></div></Col>
                <Col xl={4}><div><img src={qaymoqliPlombirShokolad} className={styles.productImage}/> <p className={styles.productTitle}>QAYMOQLI PLOMBIR - SHOKOLADLI</p></div></Col>
                <Col xl={4}><div><img src={multimeva} className={styles.productImage}/> <p className={styles.productTitle}>MULTIMEVA</p></div></Col>
                <Col xl={4}><div><img src={mevaTamli} className={styles.productImage}/><p className={styles.productTitle}>MEVA TA’MLI QAYMOQLIK MUZQAYMOQ</p></div></Col>
                <Col xl={4}><div><img src={mevaTamli2} className={styles.productImage}/><p className={styles.productTitle}>MEVA TA’MLI QAYMOQLIK MUZQAYMOQ</p></div></Col>
                <Col xl={4}><div><img src={exotic} className={styles.productImage}/><p className={styles.productTitle}>KREMLI MUZQAYMOQ - DF EXOTIC</p></div></Col>
                <Col xl={4}><div><img src={multifrukt2} className={styles.productImage}/><p className={styles.productTitle}>QAYMOQLI MUZQAYMOQ – MULTIFRUKT</p></div></Col>
                <Col xl={4}><div><img src={shokolatGalzurniy} className={styles.productImage}/><p className={styles.productTitle}>SHOKOLAD BILAN QOPLANGAN QAYMOQLI MUZQAYMOQ</p></div></Col>
                <Col xl={4}><div><img src={vaflenniy} className={styles.productImage}/><p className={styles.productTitle}>VAFLILI MUZQAYMOQ</p></div></Col>
                <Col xl={4}><div><img src={rojka} className={styles.productImage}/><p className={styles.productTitle}>VAFLILI-SHOKOLAD BILAN QOPLANGAN QAYMOQLI MUZQAYMOQ</p></div></Col>
                <Col xl={4}><div><img src={stakanchik} className={styles.productImage}/><p className={styles.productTitle}>VAFLI STAKANLI MUZQAYMOQ</p></div></Col>
                <Col xl={4}><div><img src={palochka} className={styles.productImage}/><p className={styles.productTitle}>TAYOQCHALI QAYMOQLI MUZQAYMOQ</p></div></Col>
                <Col xl={4}><div><img src={ayranPalochka} className={styles.productImage}/><p className={styles.productTitle}>TAYOQCHADAGI MUZLATILGAN AYRON</p></div></Col>
                <Col xl={4}><div><img src={konfetka} className={styles.productImage}/><p className={styles.productTitle}>TAYOQCHADAGI QAYMOQLI MUZQAYMOQ - "KONFETKA"</p></div></Col>
                <Col xl={4}><div><img src={miniVinetta} className={styles.productImage}/><p className={styles.productTitle}>MINI-VIENETTA</p></div></Col>
                <Col xl={4}><div><img src={plombirSlivka} className={styles.productImage}/><p className={styles.productTitle}>QAYMOQLI PLOMBIR</p></div></Col>
                <Col xl={4}><div><img src={smetana10} className={styles.productImage}/><p className={styles.productTitle}>10%, 15%, 20% YOG‘LI SMETANA</p></div></Col>
                <Col xl={4}><div><img src={qatiq} className={styles.productImage}/><p className={styles.productTitle}>OLIY NAVLI QATIQ - 1 L.</p></div></Col>
                <Col xl={4}><div><img src={chempion} className={styles.productImage}/><p className={styles.productTitle}>OLIY NAVLI QATIQ - CHEMPION, CHEMPION+</p></div></Col>
                <Col xl={4}><div><img src={konizar} className={styles.productImage}/><p className={styles.productTitle}>PARHEZLI QATIQ - "YANGI HAYOT", "KONIZAR"</p></div></Col>
                <Col xl={4}><div><img src={qaymoq} className={styles.productImage}/><p className={styles.productTitle}>QAYMOQ</p></div></Col>
                <Col xl={4}><div><img src={xonadon} className={styles.productImage}/><p className={styles.productTitle}>QATIQ - "XONADON" - 1 L.</p></div></Col>
                <Col xl={4}><div><img src={ayron} className={styles.productImage}/><p className={styles.productTitle}>AYRON</p></div></Col>
                <Col xl={4}><div><img src={yogurt} className={styles.productImage}/><p className={styles.productTitle}>YOGURT</p></div></Col>
                <Col xl={4}><div><img src={kefir} className={styles.productImage}/><p className={styles.productTitle}>KEFIR</p></div></Col>
                <Col xl={4}><div><img src={tvorog} className={styles.productImage}/><p className={styles.productTitle}>OLIY NAVLI YOG‘SIZ TVOROG</p></div></Col>
                <Col xl={4}><div><img src={semechka} className={styles.productImage}/><p className={styles.productTitle}>QOVURILGAN KUNGA BOQAR PISTASI</p></div></Col>
                <Col xl={4}><div><img src={semechka25} className={styles.productImage}/><p className={styles.productTitle}>QOVURILGAN KUNGA BOQAR PISTASI - 25 GR.</p></div></Col>
                <Col xl={4}><div><img src={paket} className={styles.productImage}/><p className={styles.productTitle}>POLIMER PLENKADAN TAYYORLANGAN PAKETLAR</p></div></Col>
            </Row>
            </div>
            <Row>
                <Col xl={12}>
                    <Carousel
                        slide
                        className={styles.carusel}
                        nextIcon={<div className={styles.nextIc}> <p> > </p> </div>}
                        prevIcon={<div className={styles.prevIc}> <p> {'<'} </p> </div>}
                    >
                        <Carousel.Item>
                            <div className={styles.aboutWrapper}>
                                <span>,,</span>
                                <p>
                                    Bizning maqsad – mahsulot foydali, demak tabiiy bo‘lishi shart. Asl mahsulot shtrix-kod,
                                    ishlab chiqaruvchi nomi, DST raqami, tarkibi, hajmi, yaroqlilik muddati va energetik
                                    qiymatiga ega bo‘ladi. Agar ovqat sifati va salomatligingizga e’tiborli bo‘lsangiz, bular
                                    juda qimmat va muhim axborotlardir!
                                </p>
                                <h4> DAZA™</h4>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={styles.aboutWrapper}>
                                <span>,,</span>
                                <p>
                                    Biz xaridorlarga : muzqaymoq, qatiq, qaymoq, kefir, smetana, tvorog, ayron, yogurt,
                                    suzma, brinza kabi sut mahsulotlarini taklif qilamiz. Doimiy xaridorlar bizning
                                    mahsulotlarimiz sifatini yuqori baholaydilar, bu haqida ularning ijobiy tavsiyalari
                                    dalolat beradi. Biz mahsulotlarimizning mazali sifatini yaxshilashga katta e’tibor
                                    qaratamiz.
                                </p>
                                <h4> DAZA™</h4>
                            </div>

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Parallax bgImage={bino} strength={250} className={styles.paralax}>
            <Row className={styles.productInfoWrapper}>
                <Col xl={3} >
                    <div className={styles.productsInfo}>
                        <img src={iceCreamIcon} />
                        <h3>17</h3>
                        <p>MUZQAYMOQ</p>
                    </div>
                </Col>
                <Col xl={3} >
                    <div className={styles.productsInfo}>
                        <img src={dairyIcon}/>
                        <h3>10</h3>
                        <p>SUT MAHSULOTLARI</p>
                    </div>
                </Col>
                <Col xl={3} >
                    <div className={styles.productsInfo}>
                        <img src={seedsIcon}/>
                        <h3>2</h3>
                        <p>QOVURILGAN KUNGABOQAR PISTASI</p>
                    </div>
                </Col>
                <Col xl={3} >
                    <div className={styles.productsInfo}>
                        <img src={packageIcon}/>
                        <h3>1</h3>
                        <p>POLIMER PLYONKADAN <br/> PAKETLAR</p>
                    </div>
                </Col>

            </Row>
            </Parallax>
        </Container>
    </>);
};
export default Products;