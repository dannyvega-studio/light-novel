import React from 'react';
import {Helmet} from "react-helmet";
import ModalImage from "react-modal-image";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import CarouselFMP from '../../components/Carousel/CarouselFMP';
import fmp01 from '../../assets/images/fmp/01.png';
import fmp02 from '../../assets/images/fmp/02.png';
import fmp03 from '../../assets/images/fmp/03.png';
import fmp04 from '../../assets/images/fmp/04.png';
import fmp05 from '../../assets/images/fmp/05.png';
import fmp06 from '../../assets/images/fmp/06.png';
import fmp07 from '../../assets/images/fmp/07.png';
import fmp08 from '../../assets/images/fmp/08.png';
import fmp09 from '../../assets/images/fmp/09.png';
import fmp10 from '../../assets/images/fmp/10.png';
import fmp11 from '../../assets/images/fmp/11.png';
import fmp12 from '../../assets/images/fmp/12.png';
export {fmp01, fmp02, fmp03, fmp04, fmp05, fmp06,
        fmp07, fmp08, fmp09, fmp10, fmp11, fmp12};

function LNFmp(props) {

    const Titulo = "Full Metal Panic!"
    const linkNav = "fmp"

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
                        <CarouselFMP />
                    </Col>
                    <Col lg={6} sm={12}>
                        <h2 className="mt-2">Anime: <a href="https://www3.animeflv.net/anime/full-metal-panic" target="_blank" rel="noreferrer"><h4>1er Temporada</h4></a>
                            <a href="https://www3.animeflv.net/anime/full-metal-panic-fumoffu" target="_blank" rel="noreferrer"><h4>2da Temporada - Fumoffu?!</h4></a>
                            <a href="https://www3.animeflv.net/anime/full-metal-panic-2" target="_blank" rel="noreferrer"><h4>3er Temporada - Second Raid</h4></a>
                            <a href="https://www3.animeflv.net/anime/full-metal-panic-invisible-victory" target="_blank" rel="noreferrer"><h4>4ta Temporada - Invincible Victory</h4></a></h2>
                        <h2 className="mt-4">Genero: <h4>Acción, Ciencia Ficción, Militar, Romance, Comedia</h4></h2>
                        <h2 className="mt-4">Traductor: <a href="https://lanovetranslations.blogspot.com/" target="_blank" rel="noreferrer"><h4>Lanove Translations</h4></a>
                            <a href="http://www.menudo-fansub.com/" target="_blank" rel="noreferrer"><h4>Menudo Fansub</h4></a></h2>
                        <h2 className="mt-4">Estado: <h4>Finalizado</h4></h2>
                        { props.subTitle && <h1 className="display-4 font-weight-light mt-4 mb-4">{props.subTitle}</h1> }
                    </Col>
                    <Col sm={12}>
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4 mb-4">{props.text}</h4> }
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <ModalImage className="ln-cover" small={fmp12} large={fmp12} alt={`${Titulo} Volumen 12`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 12</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/YtITxSKC#OG6zVoMoOxZXsoGL3bWIXefsjMeN0LaHjG8oJFsKBhI" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={fmp11} large={fmp11} alt={`${Titulo} Volumen 11`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 11</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/sgAnGa4R#nB1gByGU4UtN4f1k9rtFMmPRPhupF9eB1yBLeVxWUtw" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={fmp10} large={fmp10} alt={`${Titulo} Volumen 10`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 10</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/B1YXGQxB#TMY9ge2FgD58LyDDuaYhWeOI1mReObOMBM3MSS-hukc" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={fmp09} large={fmp09} alt={`${Titulo} Volumen 09`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 09</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/slw0kTLZ#HtZkmc7Pf9hGUR8lrycyZKAdVXC-Gc6UWBtACMh-0Bw" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={fmp08} large={fmp08} alt={`${Titulo} Volumen 08`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 08</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/lkoQTT6R#gACnl6qh9EAKjJnVOt_34yilewKLvP8Nxy4ZBSWFohM" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={fmp07} large={fmp07} alt={`${Titulo} Volumen 07`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 07</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/RxJTyY4C#0jfMe9_Wpx0fCH_n6rnEVG6oPwoxD2Sp679LNrUjOx4" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={fmp06} large={fmp06} alt={`${Titulo} Volumen 06`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 06</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/1thi2RCJ#6mz0i1JFLHA_0KeSuRwxg--ZiKFjtNADGUekkCOMrmI" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={fmp05} large={fmp05} alt={`${Titulo} Volumen 05`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 05</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/4thy3ZbA#1auKmWB62vm88IunCkU8WI7nL9oQoEhdBpS3XE6CI00" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={fmp04} large={fmp04} alt={`${Titulo} Volumen 04`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 04</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/toR3HArL#5Pw7zjYomoKo4iNmueUwpnRI2cj7a5OFhCL0KlpRHKU" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={fmp03} large={fmp03} alt={`${Titulo} Volumen 03`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 03</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/l9QxRI4Y#t4c33UjxE-pD81VqWXD-ft403M42qD4maVORpnYX8tY" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={fmp02} large={fmp02} alt={`${Titulo} Volumen 02`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 02</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/05YnUSoa#DKsZo7AaRZFJXxxw4KxjG21MRfRIsg0oVFU4GGFYxwI" target="_blank" rel="noreferrer">
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
                        <ModalImage className="ln-cover" small={fmp01} large={fmp01} alt={`${Titulo} Volumen 01`} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="dark" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/wtADgQ7L#P1ZVSscpFUCBnoTxL2qdYXz7Ch_ZYztLvPTgztZ2NfA" target="_blank" rel="noreferrer">
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

export default LNFmp;