import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReader30003 from '../../../components/PDF/300/PDFRReader30003';

function PDFViewver30003(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita 03 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReader30003 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewver30003;