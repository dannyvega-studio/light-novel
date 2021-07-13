import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderOVERLORD01 from '../../../components/PDF/Overlord/PDFRReaderOVERLORD01';

function PDFViewverOVERLORD01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Overlord 01 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderOVERLORD01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverOVERLORD01;