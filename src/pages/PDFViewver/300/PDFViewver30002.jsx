import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReader30002 from '../../../components/PDF/300/PDFRReader30002';

function PDFViewver30002(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita 02 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReader30002 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewver30002;