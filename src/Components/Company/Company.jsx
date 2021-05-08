import React from 'react';
import styles from './company.module.css'
import {Col, Container, Row} from "react-bootstrap";
import companyPhotoOne from '../../assets/company/1.jpg'
import companyPhotoTwo from '../../assets/company/2.jpg'
import companyPhotoThere from '../../assets/company/3.jpg'
import companyPhotoFour from '../../assets/company/4.jpg'
import companyPhotoFive from '../../assets/company/5.png'
import daza_cream from '../../assets/company/cream.png'
import daza_dairy from '../../assets/company/dairy.png'
import daza_seeds from '../../assets/company/seeds.jpg'

const Company = (props) => {
    return (<>
        <Container>
            <Row>
                <Col xl={12}>
                    <div className={styles.companyTitleBox}>
                        <h1>MChJ «DAZA FOODS» QK.</h1>
                        <div className={styles.titleLine}></div>
                        <p className={styles.infoCompany}>
                            MChJ «DAZA FOODS» O‘zbekiston-Bolgariya qo‘shma korxonasiga
                            2013 yilda tashkil qilingan sut zavodi bazasida asos solingan.
                        </p>
                        <p className={styles.infoCompany}>
                            MChJ "DAZA FOODS" QK Farg‘ona vodiysida sut mahsulotlari va
                            muzqaymoq ishlab chiqaruvchilar orasida yetakchi o‘rinlardan birini egallaydi.
                        </p>
                    </div>
                </Col>
                <Col xl={12}>
                    <div  className={styles.companyWrapper}>
                    <Row>
                        <Col xl={6} className={styles.titleBox}>
                            <h1 className={styles.photoOneTitle}>
                                30 nomdagi sertifikatlangan mahsulotlar
                            </h1>
                            <p className={styles.photoOneDescription}>
                                Hozirgi kunda korxonada «DAZA» brendi ostida 30 nomdagi sertifikatlangan mahsulotlar ishlab
                                chiqariladi. Ishlab chiqarish quvvati sutkasiga 7 tonnadan ortiq sutni qayta ishlash imkonini
                                beradi.
                            </p>
                        </Col>
                        <Col xl={6} className=''>
                            <img src={companyPhotoOne} className={styles.companyPhotoOne}/>
                            <div className={styles.companyPhotoFigureOne}></div>
                        </Col>
                    </Row>
                    </div>
                </Col>

                <Col xl={12}>
                    <div  className={styles.companyWrapper}>
                    <Row>
                        <Col xl={6} className=''>
                            <img src={companyPhotoTwo} className={styles.companyPhotoTwo}/>
                            <div className={styles.companyPhotoFigureTwo}></div>
                        </Col>
                        <Col xl={6} className={styles.titleBox}>
                            <h1 className={styles.photoOneTitle}>
                                zamonaviy Yevropa uskunalari
                            </h1>
                            <p className={styles.photoOneDescription}>
                                Korxonada zamonaviy Yevropa (Avstriya, Italiya, Chexiya) yuqori texnologik ishlab chiqarish
                                hamda qadoqlash uskunalari o‘rnatilgan.
                            </p>
                        </Col>
                    </Row>
                    </div>
                </Col>

                <Col xl={12}>
                    <div  className={styles.companyWrapper}>
                    <Row>
                        <Col xl={6} className={styles.titleBox}>
                            <h1 className={styles.photoOneTitle}>
                                Turli tamlar
                            </h1>
                            <p className={styles.photoOneDescription}>
                                Korporativ o‘qitish va bolgariyalik hamkorlarimizdan olinadigan o‘ziga xos retseptlar (an’anaviy
                                retseptlar bilan birgalikda) yangi va tansiq sut mahsulotlari hamda turli xil va ta’mdagi
                                muzqaymoqlarni ishlab chiqarish imkonini beradi.
                            </p>
                        </Col>
                        <Col xl={6} className=''>
                            <img src={companyPhotoThere} className={styles.companyPhotoOne}/>
                            <div className={styles.companyPhotoFigureOne}></div>
                        </Col>
                    </Row>
                    </div>
                </Col>

                <Col xl={12}>
                    <div  className={styles.companyWrapper}>
                    <Row>
                        <Col xl={6} className=''>
                            <img src={companyPhotoFour} className={styles.companyPhotoTwo}/>
                            <div className={styles.companyPhotoFigureTwo}></div>
                        </Col>
                        <Col xl={6} className={styles.titleBox}>
                            <h1 className={styles.photoOneTitle}>
                                Malakali mutaxasislar
                            </h1>
                            <p className={styles.photoOneDescription}>
                                Eng foydali va mazali mahsulotlar ishlab chiqarishga bo‘lgan o‘ziga xos munosabat, barcha
                                bosqichlar malakali mutaxassislarning qat’iy nazoratidan o‘tadi.
                            </p>
                        </Col>
                    </Row>
                    </div>
                </Col>

                <Col xl={12}>
                    <div className={styles.companyWrapper}>
                    <Row>
                        <Col xl={6} className={styles.titleBox}>
                            <h1 className={styles.photoOneTitle}>
                                Tozalik va sifat
                            </h1>
                            <p className={styles.photoOneDescription}>
                                xom ashyoning tozaligi,<br/>
                                zamonaviy ishlab chiqarish texnologiyalari <br/>
                                sifatli qadoqlash materiallari, <br/>
                                <img src={daza_dairy} className={styles.dazaLooks}/>,
                                <img src={daza_cream} className={styles.dazaLooks}/> va
                                <img src={daza_seeds} className={styles.dazaLooks}/> <br/>
                                seriyasidagi asl tabiiy fazilatlari saqlanib qolgan mahsulotlar.
                            </p>
                        </Col>
                        <Col xl={6} className=''>
                            <img src={companyPhotoFive} className={styles.companyPhotoOne}/>
                            <div className={styles.companyPhotoFigureOne}></div>
                        </Col>
                    </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Company;