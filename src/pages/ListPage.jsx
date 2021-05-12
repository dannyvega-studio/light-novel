import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ngnl01 from '../assets/images/ngnl/01.jpg';
import mushoku01 from '../assets/images/mushoku/01.jpg';

function ListPage(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || List Page</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col lg={12} md={12} sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                        { props.subTitle && <h1 className="display-4 font-weight-bolder mb-4">{props.subTitle}</h1> }
                        { props.text && <h3 className="lead font-weight-bold">{props.text}</h3> }
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <Link to="/light-novel/mushoku/"><img src={mushoku01} class="profile-request mt-4 mb-4" variant="top" alt="Mushoku Tensei"/></Link>
                        <Card.Title>Mushoku Tensei: Isekai Ittara Honki Dasu</Card.Title>             
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <Link to="/light-novel/ngnl/"><img src={ngnl01} class="profile-request mt-4 mb-4" variant="top" alt="No Game No Life"/></Link>
                        <Card.Title>No Game No Life</Card.Title>                 
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default ListPage;