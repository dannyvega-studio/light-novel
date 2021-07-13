import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderOVERLORD11 from '../../../components/PDF/Overlord/PDFRReaderOVERLORD11';

function PDFViewverOVERLORD11(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Overlord 11 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderOVERLORD11 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverOVERLORD11;