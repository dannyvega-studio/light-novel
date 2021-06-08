import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CarouselSBY from '../components/CarouselSBY';
import seishun01 from '../assets/images/seishunbuta/01.jpg';
import seishun02 from '../assets/images/seishunbuta/02.jpg';
import seishun03 from '../assets/images/seishunbuta/03.jpg';
import seishun04 from '../assets/images/seishunbuta/04.jpg';
import seishun05 from '../assets/images/seishunbuta/05.jpg';
import seishun06 from '../assets/images/seishunbuta/06.png';
import seishun07 from '../assets/images/seishunbuta/07.png';
import seishun08 from '../assets/images/seishunbuta/08.png';
import seishun09 from '../assets/images/seishunbuta/09.png';
import seishun10 from '../assets/images/seishunbuta/10.jpg';
import seishun11 from '../assets/images/seishunbuta/11.jpg';

function LNSeishunButa(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                    </Col>
                    <Col sm={8}>
                        <CarouselSBY />
                    </Col>
                    <Col sm={12}>
                        { props.subTitle && <h3 className="display-4 font-weight-light mb-4">{props.subTitle}</h3> }
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4 mb-4">{props.text}</h4> }
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Seishun Buta Yarou wa Bunny Girl Senpai 03" src={seishun03} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 03</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Ft5V1CrZ#qikpg5sYqrIbZ_MmC3W2viNZRho7USstMzDRaSOEUhU" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/sby/03">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Seishun Buta Yarou wa Bunny Girl Senpai 02" src={seishun02} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 02</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/MsgXFA7I#i87-ep29sAwHOnRXH7qmfD7GVxpONJrA8oXFAwo-7is" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/sby/02">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Seishun Buta Yarou wa Bunny Girl Senpai 01" src={seishun01} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/VoxFSAZI#q5-x37tVBDjq0ZqgDEoq8-DY-KBMFrafGA2AGERQL14" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/sby/01">Leer</Link>
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

export default LNSeishunButa;