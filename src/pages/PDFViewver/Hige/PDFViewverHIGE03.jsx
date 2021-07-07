import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderHIGE03 from '../../../components/PDF/Hige/PDFRReaderHIGE03';

function PDFViewverHIGE03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Hige wo Soru. Soshite Joshi Kōsei wo Hirou 03 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderHIGE03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverHIGE03;