import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMAMASUKI01 from '../../../components/PDF/Mamasuki/PDFRReaderMAMASUKI01';

function PDFViewverMAMASUKI01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Musume Janakute Mama ga Suki nano!? 01 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMAMASUKI01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMAMASUKI01;