    import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CarouselGS from '../components/CarouselGS';
import gs01 from '../assets/images/goblinslayer/01.jpg';
import gs02 from '../assets/images/goblinslayer/02.jpg';
import gs03 from '../assets/images/goblinslayer/03.jpg';
import gs04 from '../assets/images/goblinslayer/04.jpg';
import gs05 from '../assets/images/goblinslayer/05.jpg';
import gs06 from '../assets/images/goblinslayer/06.jpg';
import gs07 from '../assets/images/goblinslayer/07.jpg';
import gs08 from '../assets/images/goblinslayer/08.jpg';
import gs09 from '../assets/images/goblinslayer/09.jpg';
import gs10 from '../assets/images/goblinslayer/10.jpg';
import gs11 from '../assets/images/goblinslayer/11.jpg';
import gs12 from '../assets/images/goblinslayer/12.jpg';
import gs13 from '../assets/images/goblinslayer/13.png';
import gs14 from '../assets/images/goblinslayer/14.jpg';

function LNGoblinSlayer(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Goblin Slayer</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                    </Col>
                    <Col sm={8}>
                        <CarouselGS />
                    </Col>
                    <Col sm={12}>
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4">{props.text}</h4> }
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="Goblin Slayer 06" src={gs06} />
                        <Card.Body>
                            <Card.Title> VOLUME 06</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/g1xCFLrb#6zpVrfm4wqZCDIiTcQPtZqoO31vHa36sNiT4gtZtZJg" target="_blank" rel="noreferrer">
                                                Download</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/gs/06">Read</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="Goblin Slayer 05" src={gs05} />
                        <Card.Body>
                            <Card.Title> VOLUME 05</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/5kwWgBxD#WOHSNsEQRMfFlNA2DyRw0M4i_vBxCjUM-1P-0WQqYL8" target="_blank" rel="noreferrer">
                                                Download</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/gs/05">Read</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="Goblin Slayer 04" src={gs04} />
                        <Card.Body>
                            <Card.Title> VOLUME 04</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Iop2XZqS#b1s137LHpvlvQPMR7PLAJWEoI1dp7PZJ8_m27EwAj-A" target="_blank" rel="noreferrer">
                                                Download</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/gs/04">Read</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="Goblin Slayer 03" src={gs03} />
                        <Card.Body>
                            <Card.Title> VOLUME 03</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/ZooilTwR#n-qPhNOFgIrv-tOT5-gCJYlDoqwcRWE3FB7IDsgP7vs" target="_blank" rel="noreferrer">
                                                Download</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/gs/03">Read</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="Goblin Slayer 02" src={gs02} />
                        <Card.Body>
                            <Card.Title> VOLUME 02</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/k0xyAD4S#T7zyKQyuGh12DxpMxPbFvFIIwYWCoGo5TJZjcT71M0A" target="_blank" rel="noreferrer">
                                                Download</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/gs/02">Read</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="Goblin Slayer 01" src={gs01} />
                        <Card.Body>
                            <Card.Title> VOLUME 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/FppwXT7Q#rtSuQQnPLx4hJ8z64yphfbDwucfuTW2EzoIU4Ev7Et8" target="_blank" rel="noreferrer">
                                                Download</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/gs/01">Read</Link>
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

export default LNGoblinSlayer;