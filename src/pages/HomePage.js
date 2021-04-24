import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaCloudDownloadAlt, FaReadme, FaBook } from 'react-icons/fa';
import ngnl01 from '../assets/images/ngnl/01.jpg';
import HomeUpdates from '../components/HomeUpdates';
import RequestWeebs from '../components/RequestWeebs';

function HomePage(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Home Page</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col lg={8} md={12} sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                        { props.text && <h3 className="lead font-weight-bold justify">{props.text}</h3> }
                        <HomeUpdates />
                    </Col>
                    <Col lg={4} md={12} sm={12}>
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        <Card.Img className="aside-img mt-4 mb-4" variant="top" alt="No Game No Life" src={ngnl01} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button variant="light" size="sm" className="mr-2">
                                            <a class="nav-link" href="https://mega.nz/file/AgpSBAgA#fhowhYVNiSe6YRWsJXNM8D023PRL47sFNTmpyccR7MY" target="_blank" rel="noreferrer">
                                                Download</a>
                                                <FaCloudDownloadAlt />
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/ngnl/01">Read</Link>
                                            <FaReadme />
                                        </Button>
                                        <Button variant="light" size="sm" className="mr-2">
                                            <Link className="nav-link" to="/light-novel/ngnl/">All Volumes</Link>
                                            <FaBook />
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                        <RequestWeebs />
                    </Col>
                </Row>
            </Container>

            
        </div>
    );
}

export default HomePage;