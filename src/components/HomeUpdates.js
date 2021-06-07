import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import seishun01 from '../assets/images/seishunbuta/01.jpg';
import seishun02 from '../assets/images/seishunbuta/02.jpg';
import seishun03 from '../assets/images/seishunbuta/03.jpg';
import ngnl10 from '../assets/images/ngnl/10.jpg';
import kdgnk10 from '../assets/images/kumodesuga/10.png';
import kdgnk11 from '../assets/images/kumodesuga/11.png';

function HomeUpdates() {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Home Page</title>
            </Helmet>
            <Container>
                <Row className="justify-content-center py-5">
                    <Col sm={12}>
                    <h3 className="font-weight-bolder mb-4">LAST NOVEL UPLOADED</h3>
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="Seishun Buta Yarou 03" src={seishun03} />
                        <Card.Body>
                            <Card.Title> VOLUME 03</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Ft5V1CrZ#qikpg5sYqrIbZ_MmC3W2viNZRho7USstMzDRaSOEUhU" target="_blank" rel="noreferrer">
                                                Download</a>        
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/sby/03">Read</Link>   
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="Seishun Buta Yarou 02" src={seishun02} />
                        <Card.Body>
                            <Card.Title> VOLUME 02</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/MsgXFA7I#i87-ep29sAwHOnRXH7qmfD7GVxpONJrA8oXFAwo-7is" target="_blank" rel="noreferrer">
                                                Download</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/sby/02">Read</Link> 
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="Seishun Buta Yarou 01" src={seishun01} />
                        <Card.Body>
                            <Card.Title> VOLUME 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/VoxFSAZI#q5-x37tVBDjq0ZqgDEoq8-DY-KBMFrafGA2AGERQL14" target="_blank" rel="noreferrer">
                                                Download</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/sby/01">Read</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="No Game No Life 10" src={ngnl10} />
                        <Card.Body>
                            <Card.Title> VOLUME 10</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/p4o0lChJ#6AHv2G7cekROyC5rAMJRK6ACy44UHZiXB3LREW0UbuA" target="_blank" rel="noreferrer">
                                                Download</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/ngnl/10">Read</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="Kumo Desu Ga 11" src={kdgnk11} />
                        <Card.Body>
                            <Card.Title> VOLUME 11</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Fp4AkKSC#S3R-9Fwzf31z7WkAc-XrBffGosGjfp7MIIO4bvi6p8s" target="_blank" rel="noreferrer">
                                                Download</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/kdgnk/11">Read</Link>    
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover mt-4 mb-4" variant="top" alt="Kumo Desu Ga 10" src={kdgnk10} />
                        <Card.Body>
                            <Card.Title> VOLUME 10</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/4lhGHa6C#jEBw6I4qr1eaRm5DrsxON4j2EvfNnHsoDmx4jWuVXGI" target="_blank" rel="noreferrer">
                                                Download</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/kdgnk/10">Read</Link>
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

export default HomeUpdates;