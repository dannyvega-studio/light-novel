import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderHIGE02 from '../../../components/PDF/Hige/PDFRReaderHIGE02';

function PDFViewverHIGE02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Hige wo Soru. Soshite Joshi Kōsei wo Hirou 02 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderHIGE02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverHIGE02;