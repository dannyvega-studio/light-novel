import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderHIGE01 from '../../../components/PDF/Hige/PDFRReaderHIGE01';

function PDFViewverHIGE01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Hige wo Soru. Soshite Joshi Kōsei wo Hirou 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderHIGE01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverHIGE01;