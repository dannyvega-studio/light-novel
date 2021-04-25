import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import mushoku19 from '../assets/images/mushoku/19.jpg';
import mushoku20 from '../assets/images/mushoku/20.jpg';
import mushoku21 from '../assets/images/mushoku/21.jpg';
import mushoku22 from '../assets/images/mushoku/22.jpg';
import mushoku23 from '../assets/images/mushoku/23.jpg';
import mushoku24 from '../assets/images/mushoku/24.jpg';

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
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 24" src={mushoku24} />
                        <Card.Body>
                            <Card.Title> VOLUME 24</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/lshTFSZJ#C1Rb2WjiU_PBupzQ_aCjsgqdSONiytomLjZo5gP4dzA" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/24">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 23" src={mushoku23} />
                        <Card.Body>
                            <Card.Title> VOLUME 23</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/1sxXRaaS#hqHS9QbDVmDa8bcD9ijIjRxjuZqSobEBZPJiSm0KzWY" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/23">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 22" src={mushoku22} />
                        <Card.Body>
                            <Card.Title> VOLUME 22</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/A5xXFQAa#vP_8RAqCUM77WZRKuBJ3fUb7s7SOKs_j3IMbgVqRBNc" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/22">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 21" src={mushoku21} />
                        <Card.Body>
                            <Card.Title> VOLUME 21</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/otxXxA4b#baweT3TALxnfEBrCeDKPWWPWE2IDHK0j9cWVM0enOZk" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/21">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 20" src={mushoku20} />
                        <Card.Body>
                            <Card.Title> VOLUME 20</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/pkxFQYyY#LTHe02L-96GA2tA9tMqQ7yfs0A78bmvl8ufyxIia5f4" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/20">Read</Link>
                                            
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="Mushoku Tensei 19" src={mushoku19} />
                        <Card.Body>
                            <Card.Title> VOLUME 19</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/lhxXwAAT#5-3NvZKt-6Srq-lta7GG9i38MtnRjXKlqt12hQEJ8nE" target="_blank" rel="noreferrer">
                                                Download</a>
                                            
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/mushoku/19">Read</Link>
                                            
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