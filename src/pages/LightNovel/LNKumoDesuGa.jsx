import React from 'react';
import {Helmet} from "react-helmet";
import ModalImage from "react-modal-image";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import CarouselKDGNK from '../../components/Carousel/CarouselKDGNK';
import kdgnk01 from '../../assets/images/kumodesuga/01.jpg';
import kdgnk02 from '../../assets/images/kumodesuga/02.jpg';
import kdgnk03 from '../../assets/images/kumodesuga/03.jpg';
import kdgnk04 from '../../assets/images/kumodesuga/04.jpg';
import kdgnk05 from '../../assets/images/kumodesuga/05.jpg';
import kdgnk06 from '../../assets/images/kumodesuga/06.jpg';
import kdgnk07 from '../../assets/images/kumodesuga/07.jpg';
import kdgnk08 from '../../assets/images/kumodesuga/08.jpg';
import kdgnk09 from '../../assets/images/kumodesuga/09.jpg';
import kdgnk10 from '../../assets/images/kumodesuga/10.png';
import kdgnk11 from '../../assets/images/kumodesuga/11.png';
import kdgnk12 from '../../assets/images/kumodesuga/12.png';
import kdgnk13 from '../../assets/images/kumodesuga/13.jpg';
import kdgnk14 from '../../assets/images/kumodesuga/14.jpg';
export {kdgnk01, kdgnk02, kdgnk03, kdgnk04, kdgnk05, kdgnk06, kdgnk07, kdgnk08,
        kdgnk09, kdgnk10, kdgnk11}

function LNKumoDesuGa(props) {

    const Titulo = "Kumo Desu Ga, Nani Ka?"
    const linkNav = "kdgnk"

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
                        <CarouselKDGNK />
                    </Col>
                    <Col lg={6} sm={12}>
                        <h2 className="mt-2">Anime: <a href="https://www3.animeflv.net/anime/kumo-desu-ga-nani-ka" target="_blank" rel="noreferrer"><h4>1er Temporada</h4></a></h2>
                        <h2 className="mt-4">Genero: <h4>Isekai, Comedia, Aventura, Fantasía</h4></h2>
                        <h2 className="mt-4">Traductor: <a href="https://novelasligeras.net/" target="_blank" rel="noreferrer"><h4>NOVA</h4></a></h2>
                        <h2 className="mt-4">Estado: <h4>En Publicación</h4></h2>
                        { props.subTitle && <h1 className="display-4 font-weight-light mt-4 mb-4">{props.subTitle}</h1> }
                    </Col>
                    <Col sm={12}>
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4 mb-4">{props.text}</h4> }
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kdgnk11} large={kdgnk11} alt={`${Titulo} Volumen 11`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 11</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/686bc5c5fabd0d3b7d43b2514b1e1516913e9e2a/KDGNK/kdgnk11.pdf" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/11`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kdgnk10} large={kdgnk10} alt={`${Titulo} Volumen 10`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 10</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/686bc5c5fabd0d3b7d43b2514b1e1516913e9e2a/KDGNK/kdgnk10.pdf" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/10`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kdgnk09} large={kdgnk09} alt={`${Titulo} Volumen 09`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 09</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/686bc5c5fabd0d3b7d43b2514b1e1516913e9e2a/KDGNK/kdgnk09.pdf" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/09`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={kdgnk08} large={kdgnk08} alt={`${Titulo} Volumen 08`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 08</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/686bc5c5fabd0d3b7d43b2514b1e1516913e9e2a/KDGNK/kdgnk08.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={kdgnk07} large={kdgnk07} alt={`${Titulo} Volumen 07`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 07</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/686bc5c5fabd0d3b7d43b2514b1e1516913e9e2a/KDGNK/kdgnk07.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={kdgnk06} large={kdgnk06} alt={`${Titulo} Volumen 06`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 06</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/686bc5c5fabd0d3b7d43b2514b1e1516913e9e2a/KDGNK/kdgnk06.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={kdgnk05} large={kdgnk05} alt={`${Titulo} Volumen 05`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 05</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/686bc5c5fabd0d3b7d43b2514b1e1516913e9e2a/KDGNK/kdgnk05.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={kdgnk04} large={kdgnk04} alt={`${Titulo} Volumen 04`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 04</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/686bc5c5fabd0d3b7d43b2514b1e1516913e9e2a/KDGNK/kdgnk04.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={kdgnk03} large={kdgnk03} alt={`${Titulo} Volumen 03`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 03</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/686bc5c5fabd0d3b7d43b2514b1e1516913e9e2a/KDGNK/kdgnk03.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={kdgnk02} large={kdgnk02} alt={`${Titulo} Volumen 02`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 02</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/686bc5c5fabd0d3b7d43b2514b1e1516913e9e2a/KDGNK/kdgnk02.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={kdgnk01} large={kdgnk01} alt={`${Titulo} Volumen 01`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/686bc5c5fabd0d3b7d43b2514b1e1516913e9e2a/KDGNK/kdgnk01.pdf" target="_blank" rel="noreferrer">
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

export default LNKumoDesuGa;