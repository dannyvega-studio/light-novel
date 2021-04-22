import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card} from 'react-bootstrap';
import CarouselNGNL from '../components/CarouselNGNL';
import ngnl01 from '../assets/images/ngnl/01.jpg';
import ngnl02 from '../assets/images/ngnl/02.jpg';
import ngnl03 from '../assets/images/ngnl/03.jpg';
import ngnl04 from '../assets/images/ngnl/04.jpg';
import ngnl05 from '../assets/images/ngnl/05.jpg';
import ngnl06 from '../assets/images/ngnl/06.jpg';
import ngnl07 from '../assets/images/ngnl/07.jpg';
import ngnl08 from '../assets/images/ngnl/08.jpg';
import ngnl09 from '../assets/images/ngnl/09.jpg';

function LNNoGameNoLife(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || No Game No Life</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                    </Col>
                    <Col sm={8}>
                        <CarouselNGNL />
                    </Col>
                    <Col sm={12}>
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4">{props.text}</h4> }
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 09" src={ngnl09} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 09</Card.Title>
                                <Card.Text>
                                    <a class="nav-link btn-download" href="https://mega.nz/file/lwoQAKBa#2vexo96i8jO4sgHebgVhRV9ZOf8psCdoDQiOuqdsToQ" target="_blank" rel="noreferrer">DOWNLOAD</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 08" src={ngnl08} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 08</Card.Title>
                                <Card.Text>
                                    <a class="nav-link btn-download" href="https://mega.nz/file/klpyGYJA#LnoHI92JqUTWB-mKCd_MYLhx-empsU1zEFwHPmen9xs" target="_blank" rel="noreferrer">DOWNLOAD</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 07" src={ngnl07} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 07</Card.Title>
                                <Card.Text>
                                    <a class="nav-link btn-download" href="https://mega.nz/file/ZwhgyQoR#aXsbPuOFtTwYAMMLqzwZSutSN8yjHJmwQJiD02Okp1U" target="_blank" rel="noreferrer">DOWNLOAD</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 06" src={ngnl06} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 06</Card.Title>
                                <Card.Text>
                                    <a class="nav-link btn-download" href="https://mega.nz/file/tkgAEaaA#OESQQCp6XnyQSClG_FoCi4QYvyaEBkUCm3DY8A11__E" target="_blank" rel="noreferrer">DOWNLOAD</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 05" src={ngnl05} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 05</Card.Title>
                                <Card.Text>
                                    <a class="nav-link btn-download" href="https://mega.nz/file/wgxWjCAL#kpijRLyS0fiYytTHUOU05GwgmA2gxTUF9uSTiPz52lE" target="_blank" rel="noreferrer">DOWNLOAD</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 04" src={ngnl04} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 04</Card.Title>
                                <Card.Text>
                                    <a class="nav-link btn-download" href="https://mega.nz/file/VgoQwYQI#gdDIE4Uo7UZ-SM5DtvYKFtjGHasrWTQDlQ7b_PYQMa4" target="_blank" rel="noreferrer">DOWNLOAD</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 03" src={ngnl03} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 03</Card.Title>
                                <Card.Text>
                                    <a class="nav-link btn-download" href="https://mega.nz/file/RpAigBiB#EybAUZVGMmXv-aKpjJA4FvS47X5LzEPMtRHPF0ABQ5g" target="_blank" rel="noreferrer">DOWNLOAD</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 02" src={ngnl02} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 02</Card.Title>
                                <Card.Text>
                                    <a class="nav-link btn-download" href="https://mega.nz/file/95ZQ0brI#zqiZYF8e2uV7X1kuWDrJZ8G9R3bvEfZi1-yor222Ebs" target="_blank" rel="noreferrer">DOWNLOAD</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img className="update-img mt-4 mb-4" variant="top" alt="No Game No Life 01" src={ngnl01} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 01</Card.Title>
                                <Card.Text>
                                    <a class="nav-link btn-download" href="https://mega.nz/file/AgpSBAgA#fhowhYVNiSe6YRWsJXNM8D023PRL47sFNTmpyccR7MY" target="_blank" rel="noreferrer">DOWNLOAD</a>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LNNoGameNoLife;