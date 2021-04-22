import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import RequestHuron from '../components/RequestHuron';
import RequestKuervo from '../components/RequestKuervo';

function RequestPage(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Request Page</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col lg={12} md={12} sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                        { props.text && <h3 className="lead font-weight-bold">{props.text}</h3> }
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <RequestHuron />                        
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <RequestKuervo />                        
                    </Col>
                </Row>
            </Container>

            
        </div>
    );
}

export default RequestPage;