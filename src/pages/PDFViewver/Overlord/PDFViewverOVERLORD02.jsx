import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderOVERLORD02 from '../../../components/PDF/Overlord/PDFRReaderOVERLORD02';

function PDFViewverOVERLORD02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Overlord 02 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderOVERLORD02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverOVERLORD02;