import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import profileHuron from '../assets/images/profile-huron.jpg';
import mushoku from '../assets/images/mushoku/01.jpg';

function HuronRequestPage(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Sr. Hurón Requests Page</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col lg={12} md={12} sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                        <img src={profileHuron} class="profile-request mt-4 mb-4" variant="top" alt="Señor Huron"/>
                        { props.subTitle && <h1 className="display-4 lead font-weight-light">{props.subTitle}</h1> }
                    </Col>
                    <Col lg={4} md={4} sm={6} xs={6}>
                        <Card.Img className="aside-img mt-4 mb-4" variant="top" alt="No Game No Life" src={mushoku} />
                        <Button variant="light" size="sm" className="mr-2">
                            <Link className="nav-link" to="/light-novel/mushoku/">View All Volumes</Link>
                        </Button>
                    </Col>
                </Row>
            </Container>

            
        </div>
    );
}

export default HuronRequestPage;