import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CarouselMushokuTensei from '../components/CarouselMushokuTensei';
import mushoku01 from '../assets/images/mushoku/01.jpg';
import mushoku02 from '../assets/images/mushoku/02.jpg';
import mushoku03 from '../assets/images/mushoku/03.jpg';
import mushoku04 from '../assets/images/mushoku/04.jpg';
import mushoku05 from '../assets/images/mushoku/05.jpg';
import mushoku06 from '../assets/images/mushoku/06.jpg';
import mushoku07 from '../assets/images/mushoku/07.jpg';
import mushoku08 from '../assets/images/mushoku/08.jpg';
import mushoku09 from '../assets/images/mushoku/09.jpg';
import mushoku10 from '../assets/images/mushoku/10.jpg';
import mushoku11 from '../assets/images/mushoku/11.jpg';
import mushoku12 from '../assets/images/mushoku/12.jpg';
import mushoku13 from '../assets/images/mushoku/13.jpg';
import mushoku14 from '../assets/images/mushoku/14.jpg';
import mushoku15 from '../assets/images/mushoku/15.jpg';
import mushoku16 from '../assets/images/mushoku/16.jpg';
import mushoku17 from '../assets/images/mushoku/17.jpg';
import mushoku18 from '../assets/images/mushoku/18.jpg';
import mushoku19 from '../assets/images/mushoku/19.jpg';
import mushoku20 from '../assets/images/mushoku/20.jpg';
import mushoku21 from '../assets/images/mushoku/21.jpg';
import mushoku22 from '../assets/images/mushoku/22.jpg';
import mushoku23 from '../assets/images/mushoku/23.jpg';
import mushoku24 from '../assets/images/mushoku/24.jpg';

function LNMushokuTensei(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                    </Col>
                    <Col sm={8}>
                        <CarouselMushokuTensei />
                    </Col>
                    <Col sm={12}>
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4">{props.text}</h4> }
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 24" src={mushoku24} />
                        <Card.Body>
                            <Card.Title> VOLUME 24</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/lshTFSZJ#C1Rb2WjiU_PBupzQ_aCjsgqdSONiytomLjZo5gP4dzA" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/24">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 23" src={mushoku23} />
                        <Card.Body>
                            <Card.Title> VOLUME 23</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/1sxXRaaS#hqHS9QbDVmDa8bcD9ijIjRxjuZqSobEBZPJiSm0KzWY" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/23">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 22" src={mushoku22} />
                        <Card.Body>
                            <Card.Title> VOLUME 22</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/A5xXFQAa#vP_8RAqCUM77WZRKuBJ3fUb7s7SOKs_j3IMbgVqRBNc" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/22">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 21" src={mushoku21} />
                        <Card.Body>
                            <Card.Title> VOLUME 21</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/otxXxA4b#baweT3TALxnfEBrCeDKPWWPWE2IDHK0j9cWVM0enOZk" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/21">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 20" src={mushoku20} />
                        <Card.Body>
                            <Card.Title> VOLUME 20</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/pkxFQYyY#LTHe02L-96GA2tA9tMqQ7yfs0A78bmvl8ufyxIia5f4" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/20">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 19" src={mushoku19} />
                        <Card.Body>
                            <Card.Title> VOLUME 19</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/lhxXwAAT#5-3NvZKt-6Srq-lta7GG9i38MtnRjXKlqt12hQEJ8nE" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/19">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 18" src={mushoku18} />
                        <Card.Body>
                            <Card.Title> VOLUME 18</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/1o4xUS7Z#Gjqb6AWVbSDKOFniwqRclPBIC_0LDYMz2HBuhIjlXPw" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/18">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 17" src={mushoku17} />
                        <Card.Body>
                            <Card.Title> VOLUME 17</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/MgxzCQQL#_LjrYAeoLyNR315AqknK4Ggov1viD8qdeYau6EAvY0A" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/17">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 16" src={mushoku16} />
                        <Card.Body>
                            <Card.Title> VOLUME 16</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/0ghzUKBA#OvLe0so_VCiKF1nvJL1_B7tHpZ-IQMv_b67JMhHAOd4" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/16">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 15" src={mushoku15} />
                        <Card.Body>
                            <Card.Title> VOLUME 15</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/JwwlmK7S#a2e_weeiFo5osUJ_UMXkiLGDYtkDDx75pUsDyR43vi0" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/15">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 14" src={mushoku14} />
                        <Card.Body>
                            <Card.Title> VOLUME 14</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/t051RYgD#0PLkdBVGyvvfUrX-ylLFOOnB_Ba4LfPr8if0K18WP74" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/14">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 13" src={mushoku13} />
                        <Card.Body>
                            <Card.Title> VOLUME 13</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/40oHQaBZ#6EAw7tYi6y5Dv77Sv1I5wsDnWgeG_0F_f80xZ5OCOOo" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/13">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 12" src={mushoku12} />
                        <Card.Body>
                            <Card.Title> VOLUME 12</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/k94jjSBR#jWqL31OwnrEp7d0x4E8gzNm9N-WhhT1wPi20xhQctO0" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/12">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 11" src={mushoku11} />
                        <Card.Body>
                            <Card.Title> VOLUME 11</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/M9onGYDC#Vie6tEEd7iRZUGRA8pNR72uwIUsrQdjGn5zrhepiv3Q" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/11">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 10" src={mushoku10} />
                        <Card.Body>
                            <Card.Title> VOLUME 10</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/tx430aqQ#7rxycDweT865-0E5rYMXM5CTBkQGs0o62RL15TPviBs" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/10">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 09" src={mushoku09} />
                        <Card.Body>
                            <Card.Title> VOLUME 09</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/JtwnEIwa#sOEtGAm3L0UcrhIFdph4gkMHzZuni3IPc6fVzKVFo8g" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/09">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 08" src={mushoku08} />
                        <Card.Body>
                            <Card.Title> VOLUME 08</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/s44lyYqa#fTvBZHbFWYp8vR3Wpu-rxR0cW9H0ZGs2mFwIf1N9LFI" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/08">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 07" src={mushoku07} />
                        <Card.Body>
                            <Card.Title> VOLUME 07</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/k4xhFSYD#CENdNyaHYL0Dk48PozNxI9PEk0tELdkJdeof7tPoLDY" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/07">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 06" src={mushoku06} />
                        <Card.Body>
                            <Card.Title> VOLUME 06</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/8x41iI4a#AEtIWXPaW6FfdHiR6NlXK3teFLN7RTy70V-PSLcR0ug" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/06">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 05" src={mushoku05} />
                        <Card.Body>
                            <Card.Title> VOLUME 05</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/UxxzkIgR#znn2v8wK6G44-ocZAwYOx5sWicFePZmHuvuAgJTk9FU" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/05">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 04" src={mushoku04} />
                        <Card.Body>
                            <Card.Title> VOLUME 04</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/tpp31AxA#Ypa3fLDCWUYuBlmsdBy_7RMcgNZmYLv1VeKjFLyQsnQ" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/04">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 03" src={mushoku03} />
                        <Card.Body>
                            <Card.Title> VOLUME 03</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/Ew5jUQIB#fNPZI_UEARSwoK-lhAkaN4S6QZW1_o-ICp9uAUPSKx8" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/03">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 02" src={mushoku02} />
                        <Card.Body>
                            <Card.Title> VOLUME 02</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/5loXwQrK#bTBxGmSTB8dK9DoXNAR7zsXSOuFu2VNH5U8CB2nsQBo" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/02">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 01" src={mushoku01} />
                        <Card.Body>
                            <Card.Title> VOLUME 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/Vx4BDaZT#AI8V5WnGi8b7mfZNag18R67y3I-HjmWJxOnlCq1rM5w" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/01">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LNMushokuTensei;