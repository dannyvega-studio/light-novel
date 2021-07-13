import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderOVERLORD05 from '../../../components/PDF/Overlord/PDFRReaderOVERLORD05';

function PDFViewverOVERLORD05(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Overlord 05 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderOVERLORD05 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverOVERLORD05;