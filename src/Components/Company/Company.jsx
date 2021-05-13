import React from 'react';
import styles from './company.module.css'
import {Col, Container, Row} from "react-bootstrap";

import mevali from '../../assets/company/s-fruktom.png'

// import companyPhotoOne from '../../assets/company/1.jpg'
// import companyPhotoTwo from '../../assets/company/2.jpg'
// import companyPhotoThere from '../../assets/company/3.jpg'
// import companyPhotoFour from '../../assets/company/4.jpg'
// import companyPhotoFive from '../../assets/company/5.png'

import daza_cream from '../../assets/company/cream.png'
import daza_dairy from '../../assets/company/dairy.png'
import daza_seeds from '../../assets/company/seeds.jpg'

const Company = (props) => {
    return (<>
        <Container fluid>
            <Row>
                <Col xl={12}>
                    <div className={styles.backgroundBlock}>
                        <Row>
                            <Col xl={12}>
                                <div className={styles.companyTitleBox}>
                                    <h1>MChJ «DAZA FOODS» QK.</h1>
                                    <p>
                                        MChJ «DAZA FOODS» O‘zbekiston-Bolgariya qo‘shma korxonasiga
                                        2013 yilda tashkil qilingan sut zavodi bazasida asos solingan.
                                    </p>
                                    <p>
                                        MChJ "DAZA FOODS" QK Farg‘ona vodiysida sut mahsulotlari va
                                        muzqaymoq ishlab chiqaruvchilar orasida yetakchi o‘rinlardan birini egallaydi.
                                    </p>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={styles.DespcriptionBox}>
                                    <h3>30 nomdagi Mahsulotlar</h3>
                                    <p>
                                        Hozirgi kunda korxonada «DAZA» brendi ostida 30 nomdagi sertifikatlangan
                                        mahsulotlar ishlab chiqariladi. Ishlab chiqarish quvvati sutkasiga 7 tonnadan
                                        ortiq sutni qayta ishlash imkonini beradi.
                                    </p>
                                    <h3>Turli tamlar</h3>
                                    <p>
                                        Korporativ o‘qitish va bolgariyalik hamkorlarimizdan olinadigan o‘ziga xos
                                        retseptlar (an’anaviy retseptlar bilan birgalikda) yangi va tansiq sut
                                        mahsulotlari hamda turli xil va ta’mdagi muzqaymoqlarni ishlab chiqarish
                                        imkonini beradi.
                                    </p>
                                    <h3> Tozalik va sifat</h3>
                                    <p>
                                        Хom ashyoning tozaligi, zamonaviy ishlab chiqarish texnologiyalari,
                                        qadoqlash materiallari.
                                    </p>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={styles.wrapperBoxImages}>
                                    <img src={mevali}/>
                                </div>
                            </Col>
                            <Col xl={4}>
                                <div className={styles.DespcriptionBox}>
                                    <h3>Zamonaviy texnologiyalar</h3>
                                    <p>
                                        Korxonada zamonaviy Yevropa (Avstriya, Italiya, Chexiya) yuqori texnologik
                                        ishlab chiqarish hamda qadoqlash uskunalari o‘rnatilgan.
                                    </p>
                                    <br/><br/><br/>
                                    <h3>Malakali mutaxasislar</h3>
                                    <p>
                                        Eng foydali va mazali mahsulotlar ishlab chiqarishga bo‘lgan o‘ziga xos
                                        munosabat, barcha bosqichlar malakali mutaxassislarning qat’iy nazoratidan
                                        o‘tadi.
                                    </p>
                                    <p>
                                        <br/><br/>
                                        <img src={daza_cream}/>, <img src={daza_dairy}/>  <img src={daza_seeds}/>
                                        <br/>seriyalarining mahsulotlari asl tabiiy sifatlarini saqlab qoladi.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Company;