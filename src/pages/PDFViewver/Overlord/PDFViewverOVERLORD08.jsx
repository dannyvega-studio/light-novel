import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderOVERLORD08 from '../../../components/PDF/Overlord/PDFRReaderOVERLORD08';

function PDFViewverOVERLORD08(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Overlord 08 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderOVERLORD08 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverOVERLORD08;