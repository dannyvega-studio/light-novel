import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderOVERLORD07 from '../../../components/PDF/Overlord/PDFRReaderOVERLORD07';

function PDFViewverOVERLORD07(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Overlord 07 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderOVERLORD07 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverOVERLORD07;