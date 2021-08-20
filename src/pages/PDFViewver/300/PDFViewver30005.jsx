import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReader30005 from '../../../components/PDF/300/PDFRReader30005';

function PDFViewver30005(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita 05 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReader30005 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewver30005;