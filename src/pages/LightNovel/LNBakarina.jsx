import React from 'react';
import {Helmet} from "react-helmet";
import ModalImage from "react-modal-image";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import CarouselBAKARINA from '../../components/Carousel/CarouselBAKARINA';
import bakarina01 from '../../assets/images/bakarina/01.jpg';
import bakarina02 from '../../assets/images/bakarina/02.jpg';
import bakarina03 from '../../assets/images/bakarina/03.jpg';
import bakarina04 from '../../assets/images/bakarina/04.jpg';
import bakarina05 from '../../assets/images/bakarina/05.jpg';
import bakarina06 from '../../assets/images/bakarina/06.jpg';
import bakarina07 from '../../assets/images/bakarina/07.jpg';
import bakarina08 from '../../assets/images/bakarina/08.jpg';
export {bakarina01, bakarina02, bakarina03, bakarina04,
        bakarina05, bakarina06, bakarina07, bakarina08};

function LNBakarina(props) {

    const Titulo = "Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta"
    const linkNav = "bakarina"

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
                        <CarouselBAKARINA />
                    </Col>
                    <Col lg={6} sm={12}>
                        <h2 className="mt-2">Anime: <a href="https://www3.animeflv.net/anime/otome-game-no-hametsu-flag-shika-nai-akuyaku-reijou-ni-tensei-shiteshimatta" target="_blank" rel="noreferrer"><h4>1er Temporada</h4></a></h2>
                        <h2 className="mt-4">Genero: <h4>Comedia Romantica, Harem Inverso</h4></h2>
                        <h2 className="mt-4">Traductor: <a href="https://ferindradtraducciones.blogspot.com/" target="_blank" rel="noreferrer"><h4>ferindrad traducciones</h4></a></h2>
                        <h2 className="mt-4">Estado: <h4>En Publicación</h4></h2>
                        { props.subTitle && <h1 className="display-4 font-weight-light mt-4 mb-4">{props.subTitle}</h1> }
                    </Col>
                    <Col sm={12}>
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4 mb-4">{props.text}</h4> }
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={bakarina08} large={bakarina08} alt={`${Titulo} Volumen 08`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 08</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/hsJDiaYQ#XcF3Fzyxu7U94gsMZYrpKC-xy4cPdURJOnGAhtiGgak" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/08`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={bakarina07} large={bakarina07} alt={`${Titulo} Volumen 07`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 07</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/kxYnSQhJ#Z1RdD91jqUFwdhLEKH-q9ZiczyllqlrA__0X1-KIe28" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/07`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={bakarina06} large={bakarina06} alt={`${Titulo} Volumen 06`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 06</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/t1BjlAyB#o7Tftrdj179zdDbW-PwCv5zve8q35pIFko_OM5vvw-8" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/06`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={bakarina05} large={bakarina05} alt={`${Titulo} Volumen 05`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 05</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Rh5ESKyQ#iiIqqEvAtafCg1spJFXJSKT1CeGliV9g_nbujyw5-KQ" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/05`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={bakarina04} large={bakarina04} alt={`${Titulo} Volumen 04`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 04</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/d0Bj2IJC#g1_Kh-_5w3bTnYqBreANJD5_m1Xwg8Z02S0WgyOEF3I" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/04`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={bakarina03} large={bakarina03} alt={`${Titulo} Volumen 03`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 03</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/MwYjxIzI#ZETJg-P1VdJvh5a-NoBlOSWrurn6KyAJXkkWmSIAVng" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/03`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={bakarina02} large={bakarina02} alt={`${Titulo} Volumen 02`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 02</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/x4QlyY6A#_JWur1q0J_iklBUzQ1G93rhFoe4NPhetnHKmzW6PIP8" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/02`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={bakarina01} large={bakarina01} alt={`${Titulo} Volumen 01`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/EhQh1aKA#aq0q5Vj_ulsVOaTDrktk57eFC6tOKJNK-5Ape7XSYQc" target="_blank" rel="noreferrer">
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

export default LNBakarina;