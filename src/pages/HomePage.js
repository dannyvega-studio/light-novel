import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ngnl01 from '../assets/images/ngnl/01.jpg';
import HomeUpdates from '../components/HomeUpdates';

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
                        <Card.Img className="aside-img mt-4 mb-4" variant="top" alt="No Game No Life 01" src={ngnl01} />
                        <Card.Body>
                            <Card.Title>No Game No Life VOLUME 01</Card.Title>
                                <Card.Text>
                                    <a href="https://mega.nz/file/AgpSBAgA#fhowhYVNiSe6YRWsJXNM8D023PRL47sFNTmpyccR7MY" target="_blank" rel="noreferrer">View Volume</a>
                                    <Link className="nav-link" to="/light-novel/ngnl/">View All NGNL Volumes</Link>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                </Row>
            </Container>

            
        </div>
    );
}

export default HomePage;