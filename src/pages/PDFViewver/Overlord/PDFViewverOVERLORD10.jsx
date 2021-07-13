import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderOVERLORD10 from '../../../components/PDF/Overlord/PDFRReaderOVERLORD10';

function PDFViewverOVERLORD10(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Overlord 10 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderOVERLORD10 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverOVERLORD10;