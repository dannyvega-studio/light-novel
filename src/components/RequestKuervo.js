import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import profileKuervo from '../assets/images/profile-kuervo.jpg';

function RequestKuervo(props) {

    return(
        <div>
            <Container>
                <Row className="justify-content-center py-5">
                    <Col sm={12}>
                        <Link to="/light-novel/kuervo/"><img src={profileKuervo} class="profile-request mt-4 mb-4" variant="top" alt="Señor Kuervo"/></Link>
                        <Card.Title>Sr. Kuervo</Card.Title>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RequestKuervo;