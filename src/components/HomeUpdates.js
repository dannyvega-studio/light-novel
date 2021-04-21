import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card} from 'react-bootstrap';
import ngnl04 from '../assets/images/ngnl/04.jpg';
import ngnl05 from '../assets/images/ngnl/05.jpg';
import ngnl06 from '../assets/images/ngnl/06.jpg';
import ngnl07 from '../assets/images/ngnl/07.jpg';
import ngnl08 from '../assets/images/ngnl/08.jpg';
import ngnl09 from '../assets/images/ngnl/09.jpg';

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
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 09" src={ngnl09} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 09</Card.Title>
                                <Card.Text>
                                    <a href="https://mega.nz/file/lwoQAKBa#2vexo96i8jO4sgHebgVhRV9ZOf8psCdoDQiOuqdsToQ" target="_blank" rel="noreferrer">View Volume</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 08" src={ngnl08} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 08</Card.Title>
                                <Card.Text>
                                    <a href="https://mega.nz/file/klpyGYJA#LnoHI92JqUTWB-mKCd_MYLhx-empsU1zEFwHPmen9xs" target="_blank" rel="noreferrer">View Volume</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 07" src={ngnl07} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 07</Card.Title>
                                <Card.Text>
                                    <a href="https://mega.nz/file/ZwhgyQoR#aXsbPuOFtTwYAMMLqzwZSutSN8yjHJmwQJiD02Okp1U" target="_blank" rel="noreferrer">View Volume</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 06" src={ngnl06} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 06</Card.Title>
                                <Card.Text>
                                    <a href="https://mega.nz/file/tkgAEaaA#OESQQCp6XnyQSClG_FoCi4QYvyaEBkUCm3DY8A11__E" target="_blank" rel="noreferrer">View Volume</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 05" src={ngnl05} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 05</Card.Title>
                                <Card.Text>
                                    <a href="https://mega.nz/file/wgxWjCAL#kpijRLyS0fiYytTHUOU05GwgmA2gxTUF9uSTiPz52lE" target="_blank" rel="noreferrer">View Volume</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 04" src={ngnl04} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 04</Card.Title>
                                <Card.Text>
                                    <a href="https://mega.nz/file/VgoQwYQI#gdDIE4Uo7UZ-SM5DtvYKFtjGHasrWTQDlQ7b_PYQMa4" target="_blank" rel="noreferrer">View Volume</a>
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