import React from 'react';
import {Helmet} from "react-helmet";
import ModalImage from "react-modal-image";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import CarouselBOKUNOSENSEI from '../../components/Carousel/CarouselBOKUNOSENSEI';
import bokunosensei01 from '../../assets/images/bokunosensei/01.jpg';
export { bokunosensei01 };

function LNBokunosensei(props) {

    const Titulo = "Boku no Sensei wa, Houkago Kawaii Konyakusha"
    const linkNav = "bokunosensei"

    return(
        <div>
            <Helmet>
                <title>Light Novels || {Titulo}</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col sm={12}>
                        { props.title && <h1 className="display-4 font-weight-bolder mb-4">{props.title}</h1> }
                    </Col>
                    <Col lg={6} sm={8}>
                        <CarouselBOKUNOSENSEI />
                    </Col>
                    <Col lg={6} sm={12}>
                        <h2 className="mt-2">Anime: <h4>No tiene :'(</h4></h2>
                        <h2 className="mt-4">Genero: <h4>Comedia, Seinen, Romance, Vida Escolar</h4></h2>
                        <h2 className="mt-4">Traductor: <a href="https://oasistranslations.wordpress.com/" target="_blank"><h4>Oasis Translations</h4></a></h2>
                        <h2 className="mt-4">Estado: <h4>En Publicación</h4></h2>
                        { props.subTitle && <h1 className="display-4 font-weight-light mt-4 mb-4">{props.subTitle}</h1> }
                    </Col>
                    <Col sm={12}>
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4 mb-4">{props.text}</h4> }
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={bokunosensei01} large={bokunosensei01} alt={`${Titulo} Volumen 01`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/FlAjSQqT#F3xiQqPdtNW10rLDhtpA8793AmG16taTkz2a65B9wko" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/01`} key={linkNav}>Leer</Link>
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

export default LNBokunosensei;