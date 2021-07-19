import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderOVERLORD04 from '../../../components/PDF/Overlord/PDFRReaderOVERLORD04';

function PDFViewverOVERLORD04(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Overlord 04 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderOVERLORD04 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverOVERLORD04;