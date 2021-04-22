import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import profileHuron from '../assets/images/profile-huron.jpg';

function RequestHuron(props) {

    return(
        <div>
            <Container>
                <Row className="justify-content-center py-5">
                    <Col sm={12}>
                        <Link to="/light-novel/huron/"><img src={profileHuron} class="profile-request mt-4 mb-4" variant="top" alt="Señor Huron"/></Link>
                        <Card.Title>Sr. Hurón</Card.Title>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RequestHuron;