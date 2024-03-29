import React from 'react';
import {Helmet} from "react-helmet";
import ModalImage from "react-modal-image";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import CarouselRZ from '../../components/Carousel/CarouselRZ';
import rz01 from '../../assets/images/rezero/01.png';
import rz02 from '../../assets/images/rezero/02.png';
import rz03 from '../../assets/images/rezero/03.png';
import rz04 from '../../assets/images/rezero/04.png';
import rz05 from '../../assets/images/rezero/05.png';
import rz06 from '../../assets/images/rezero/06.png';
import rz07 from '../../assets/images/rezero/07.png';
import rz08 from '../../assets/images/rezero/08.png';
import rz09 from '../../assets/images/rezero/09.png';
import rz10 from '../../assets/images/rezero/10.png';
import rz11 from '../../assets/images/rezero/11.png';
import rz12 from '../../assets/images/rezero/12.png';
import rz13 from '../../assets/images/rezero/13.png';
import rz14 from '../../assets/images/rezero/14.png';
import rz15 from '../../assets/images/rezero/15.png';
import rz16 from '../../assets/images/rezero/16.png';
import rz17 from '../../assets/images/rezero/17.png';
import rz18 from '../../assets/images/rezero/18.png';
import rz19 from '../../assets/images/rezero/19.png';
import rz20 from '../../assets/images/rezero/20.jpg';
import rz21 from '../../assets/images/rezero/21.png';
import rz22 from '../../assets/images/rezero/22.jpg';
import rz23 from '../../assets/images/rezero/23.jpg';
import rz24 from '../../assets/images/rezero/24.jpg';
import rz25 from '../../assets/images/rezero/25.jpg';
import rz26 from '../../assets/images/rezero/26.jpg';
export {rz01, rz02, rz03, rz04, rz05, rz06, rz07, rz08, rz09, rz10,
        rz11, rz12, rz13, rz14, rz15, rz16, rz17, rz18, rz19, rz20,
        rz21, rz22, rz23, rz24, rz25, rz26};

function LNReZero(props) {

    const Titulo = "Re:Zero kara Hajimeru Isekai Seikatsu"
    const linkNav = "rz"

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
                        <CarouselRZ />
                    </Col>
                    <Col lg={6} sm={12}>
                        <h2 className="mt-2">Anime: <a href="https://www3.animeflv.net/anime/rezero-kara-hajimeru-isekai-seikatsu" target="_blank" rel="noreferrer"><h4>1er Temporada</h4></a>
                            <a href="https://www3.animeflv.net/anime/rezero-kara-hajimeru-isekai-seikatsu-shin-henshuuban" target="_blank" rel="noreferrer"><h4>1er Temporada - Con Escenas Extras</h4></a>
                            <a href="https://www3.animeflv.net/anime/rezero-kara-hajimeru-isekai-seikatsu-2nd-season" target="_blank" rel="noreferrer"><h4>2da Temporada</h4></a></h2>
                        <h2 className="mt-4">Genero: <h4>Isekai, Sobrenatural, Drama, Fantasía</h4></h2>
                        <h2 className="mt-4">Traductor: <a href="https://www.facebook.com/EinherjarProject/" target="_blank" rel="noreferrer"><h4>Einherjar Project</h4></a></h2>
                        <h2 className="mt-4">Estado: <h4>En Publicación</h4></h2>
                        { props.subTitle && <h1 className="display-4 font-weight-light mt-4 mb-4">{props.subTitle}</h1> }
                    </Col>
                    <Col sm={12}>
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4 mb-4">{props.text}</h4> }
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={rz15} large={rz15} alt={`${Titulo} Volumen 15`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 15</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz15.pdf" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/15`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={rz14} large={rz14} alt={`${Titulo} Volumen 14`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 14</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz14.pdf" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/14`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={rz13} large={rz13} alt={`${Titulo} Volumen 13`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 13</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz13.pdf" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/13`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={rz12} large={rz12} alt={`${Titulo} Volumen 12`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 12</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz12.pdf" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to={`/light-novel/${linkNav}/12`} key={linkNav}>Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={rz11} large={rz11} alt={`${Titulo} Volumen 11`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 11</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz11.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={rz10} large={rz10} alt={`${Titulo} Volumen 10`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 10</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz10.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={rz09} large={rz09} alt={`${Titulo} Volumen 09`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 09</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz09.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={rz08} large={rz08} alt={`${Titulo} Volumen 08`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 08</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz08.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={rz07} large={rz07} alt={`${Titulo} Volumen 07`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 07</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz07.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={rz06} large={rz06} alt={`${Titulo} Volumen 06`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 06</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz06.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={rz05} large={rz05} alt={`${Titulo} Volumen 05`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 05</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz05.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={rz04} large={rz04} alt={`${Titulo} Volumen 04`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 04</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz04.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={rz03} large={rz03} alt={`${Titulo} Volumen 03`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 03</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz03.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={rz02} large={rz02} alt={`${Titulo} Volumen 02`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 02</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz02.pdf" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={rz01} large={rz01} alt={`${Titulo} Volumen 01`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://raw.githubusercontent.com/dannyvega-studio/ln-backup-001/8426fd6cd071d05aff5c12352b3ca2b61e4cc9fe/REZERO/rz01.pdf" target="_blank" rel="noreferrer">
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

export default LNReZero;