import React from 'react';
import {Helmet} from "react-helmet";
import ModalImage from "react-modal-image";
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
import mushoku16 from '../assets/images/mushoku/16.png';
import mushoku17 from '../assets/images/mushoku/17.jpg';
import mushoku18 from '../assets/images/mushoku/18.jpg';
import mushoku19 from '../assets/images/mushoku/19.jpg';
import mushoku20 from '../assets/images/mushoku/20.jpg';
import mushoku21 from '../assets/images/mushoku/21.png';
import mushoku22 from '../assets/images/mushoku/22.jpg';
import mushoku23 from '../assets/images/mushoku/23.jpg';
import mushoku24 from '../assets/images/mushoku/24.jpg';
export {mushoku01, mushoku02, mushoku03, mushoku04, mushoku05, mushoku06, mushoku07, mushoku08,
        mushoku09, mushoku10, mushoku11, mushoku12, mushoku13, mushoku14, mushoku15, mushoku16,
        mushoku17, mushoku18, mushoku19, mushoku20, mushoku21, mushoku22, mushoku23, mushoku24}

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
                        { props.subTitle && <h3 className="display-4 font-weight-light mb-4">{props.subTitle}</h3> }
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4 mb-4">{props.text}</h4> }
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku24} large={mushoku24} alt="Mushoku Tensei Volumen 24" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 24</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/lshTFSZJ#C1Rb2WjiU_PBupzQ_aCjsgqdSONiytomLjZo5gP4dzA" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/24">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku23} large={mushoku23} alt="Mushoku Tensei Volumen 23" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 23</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/1sxXRaaS#hqHS9QbDVmDa8bcD9ijIjRxjuZqSobEBZPJiSm0KzWY" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/23">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku22} large={mushoku22} alt="Mushoku Tensei Volumen 22" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 22</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/A5xXFQAa#vP_8RAqCUM77WZRKuBJ3fUb7s7SOKs_j3IMbgVqRBNc" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/22">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku21} large={mushoku21} alt="Mushoku Tensei Volumen 21" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 21</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/otxXxA4b#baweT3TALxnfEBrCeDKPWWPWE2IDHK0j9cWVM0enOZk" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/21">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku20} large={mushoku20} alt="Mushoku Tensei Volumen 20" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 20</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/pkxFQYyY#LTHe02L-96GA2tA9tMqQ7yfs0A78bmvl8ufyxIia5f4" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/20">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku19} large={mushoku19} alt="Mushoku Tensei Volumen 19" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 19</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/lhxXwAAT#5-3NvZKt-6Srq-lta7GG9i38MtnRjXKlqt12hQEJ8nE" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/19">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku18} large={mushoku18} alt="Mushoku Tensei Volumen 18" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 18</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/1o4xUS7Z#Gjqb6AWVbSDKOFniwqRclPBIC_0LDYMz2HBuhIjlXPw" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/18">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku17} large={mushoku17} alt="Mushoku Tensei Volumen 17" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 17</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/MgxzCQQL#_LjrYAeoLyNR315AqknK4Ggov1viD8qdeYau6EAvY0A" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/17">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku16} large={mushoku16} alt="Mushoku Tensei Volumen 16" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 16</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/0ghzUKBA#OvLe0so_VCiKF1nvJL1_B7tHpZ-IQMv_b67JMhHAOd4" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/16">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku15} large={mushoku15} alt="Mushoku Tensei Volumen 15" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 15</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/JwwlmK7S#a2e_weeiFo5osUJ_UMXkiLGDYtkDDx75pUsDyR43vi0" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/15">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku14} large={mushoku14} alt="Mushoku Tensei Volumen 14" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 14</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/t051RYgD#0PLkdBVGyvvfUrX-ylLFOOnB_Ba4LfPr8if0K18WP74" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/14">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku13} large={mushoku13} alt="Mushoku Tensei Volumen 13" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 13</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/40oHQaBZ#6EAw7tYi6y5Dv77Sv1I5wsDnWgeG_0F_f80xZ5OCOOo" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/13">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku12} large={mushoku12} alt="Mushoku Tensei Volumen 12" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 12</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/k94jjSBR#jWqL31OwnrEp7d0x4E8gzNm9N-WhhT1wPi20xhQctO0" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/12">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku11} large={mushoku11} alt="Mushoku Tensei Volumen 11" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 11</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/M9onGYDC#Vie6tEEd7iRZUGRA8pNR72uwIUsrQdjGn5zrhepiv3Q" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/11">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku10} large={mushoku10} alt="Mushoku Tensei Volumen 10" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 10</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/tx430aqQ#7rxycDweT865-0E5rYMXM5CTBkQGs0o62RL15TPviBs" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/10">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku09} large={mushoku09} alt="Mushoku Tensei Volumen 09" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 09</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/JtwnEIwa#sOEtGAm3L0UcrhIFdph4gkMHzZuni3IPc6fVzKVFo8g" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/09">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku08} large={mushoku08} alt="Mushoku Tensei Volumen 08" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 08</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/s44lyYqa#fTvBZHbFWYp8vR3Wpu-rxR0cW9H0ZGs2mFwIf1N9LFI" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/08">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku07} large={mushoku07} alt="Mushoku Tensei Volumen 07" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 07</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/k4xhFSYD#CENdNyaHYL0Dk48PozNxI9PEk0tELdkJdeof7tPoLDY" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/07">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku06} large={mushoku06} alt="Mushoku Tensei Volumen 06" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 06</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/8x41iI4a#AEtIWXPaW6FfdHiR6NlXK3teFLN7RTy70V-PSLcR0ug" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/06">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku05} large={mushoku05} alt="Mushoku Tensei Volumen 05" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 05</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/UxxzkIgR#znn2v8wK6G44-ocZAwYOx5sWicFePZmHuvuAgJTk9FU" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/05">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku04} large={mushoku04} alt="Mushoku Tensei Volumen 04" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 04</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/tpp31AxA#Ypa3fLDCWUYuBlmsdBy_7RMcgNZmYLv1VeKjFLyQsnQ" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/04">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku03} large={mushoku03} alt="Mushoku Tensei Volumen 03" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 03</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Ew5jUQIB#fNPZI_UEARSwoK-lhAkaN4S6QZW1_o-ICp9uAUPSKx8" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/03">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku02} large={mushoku02} alt="Mushoku Tensei Volumen 02" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 02</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/5loXwQrK#bTBxGmSTB8dK9DoXNAR7zsXSOuFu2VNH5U8CB2nsQBo" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/02">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={mushoku01} large={mushoku01} alt="Mushoku Tensei Volumen 01" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Vx4BDaZT#AI8V5WnGi8b7mfZNag18R67y3I-HjmWJxOnlCq1rM5w" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/mushoku/01">Leer</Link>
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