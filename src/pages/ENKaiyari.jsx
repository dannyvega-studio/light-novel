import React from 'react';
import {Helmet} from "react-helmet";
import ModalImage from "react-modal-image";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CarouselKAIYARI from '../components/CarouselKAIYARI';
import kaiyari01 from '../assets/images/kaiyari/01.jpg';
import kaiyari02 from '../assets/images/kaiyari/02.jpg';
import kaiyari03 from '../assets/images/kaiyari/03.jpg';
import kaiyari04 from '../assets/images/kaiyari/04.jpg';
import kaiyari05 from '../assets/images/kaiyari/05.jpg';
import kaiyari06 from '../assets/images/kaiyari/06.jpg';
import kaiyari07 from '../assets/images/kaiyari/07.jpg';
import kaiyari08 from '../assets/images/kaiyari/08.jpg';
export {kaiyari01, kaiyari02, kaiyari03, kaiyari04, kaiyari05, kaiyari06,
        kaiyari07, kaiyari08}

function ENKaiyari(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahō to Skill Copy no Chōetsu Heal</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col sm={12}>
                        { props.title && <h1 className="font-weight-bolder mb-4">{props.title}</h1> }
                    </Col>
                    <Col sm={8}>
                        <CarouselKAIYARI />
                    </Col>
                    <Col sm={12}>
                        { props.subTitle && <h3 className="display-4 font-weight-light mb-4">{props.subTitle}</h3> }
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4 mb-4">{props.text}</h4> }
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kaiyari08} large={kaiyari08} alt="Kaifuku Jutsushi no Yarinaoshi Volumen 08" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 08</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/dkxlSCRR#DbM5MeMo94J7GJLmPmhy9bLIDMH4-s-smUgDe-D3W5I" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/kaiyari/08">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kaiyari07} large={kaiyari07} alt="Kaifuku Jutsushi no Yarinaoshi Volumen 07" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 07</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/R9hyEA5J#oB0p8wQD8PWTAmeenItb8OVtxwaBvnfKNwsuh2XeErs" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/kaiyari/07">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kaiyari06} large={kaiyari06} alt="Kaifuku Jutsushi no Yarinaoshi Volumen 06" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 06</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/R04iHK4J#L4NCi7vZU-FlCNGFNloLntASjz87kRD7WSq2BwTyy2g" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/kaiyari/06">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kaiyari05} large={kaiyari05} alt="Kaifuku Jutsushi no Yarinaoshi Volumen 05" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 05</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Akh20STB#O_yVbx8coa4InsrO8AtyLUk-f7lssZPO8maoKfCyywE" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/kaiyari/05">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kaiyari04} large={kaiyari04} alt="Kaifuku Jutsushi no Yarinaoshi Volumen 04" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 04</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/UkwmESZA#-N3ukkmspz7RbuOaoZ15ho03Y6GgDIzD1AX2mo2Ce6A" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/kaiyari/04">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kaiyari03} large={kaiyari03} alt="Kaifuku Jutsushi no Yarinaoshi Volumen 03" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 03</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Ag5gXKjb#fb_lIhfnPY9SyJEG3QB19Df72cDPkcQtCuRlQwHxG6U" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/kaiyari/03">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kaiyari02} large={kaiyari02} alt="Kaifuku Jutsushi no Yarinaoshi Volumen 02" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 02</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/I14w2QxI#CClw5euL3HCz74LDeVbCIPQn8FsyK4oCD68GFMyOliQ" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/kaiyari/02">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kaiyari01} large={kaiyari01} alt="Kaifuku Jutsushi no Yarinaoshi Volumen 01" />
                        <Card.Body>
                            <Card.Title> VOLUMEN 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/oxgiyIRQ#GuXogw0RIXQ5zmnSSuwTV1h-P0FBhPYEWFqmDKtwRaQ" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/kaiyari/01">Leer</Link>
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

export default ENKaiyari;