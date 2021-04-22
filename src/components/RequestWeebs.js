import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import profileHuron from '../assets/images/profile-huron.jpg';
import profileKuervo from '../assets/images/profile-kuervo.jpg';

function RequestWeebs(props) {

    return(
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <Card.Title>WEEBS PARTNERS REQUEST</Card.Title>
                    </Col>
                    <Col xs={4}>
                        <Link to="/light-novel/huron/"><img src={profileHuron} class="profile-request mt-4 mb-4" variant="top" alt="Señor Huron"/></Link>
                        <Card.Title>Sr.Hurón</Card.Title>
                    </Col>
                    <Col xs={4}>
                        <Link to="/light-novel/kuervo/"><img src={profileKuervo} class="profile-request mt-4 mb-4" variant="top" alt="Señor Kuervo"/></Link>
                        <Card.Title>Sr.Kuervo</Card.Title>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RequestWeebs;