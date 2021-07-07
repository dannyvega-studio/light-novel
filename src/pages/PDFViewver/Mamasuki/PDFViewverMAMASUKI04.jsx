import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMAMASUKI04 from '../../../components/PDF/Mamasuki/PDFRReaderMAMASUKI04';

function PDFViewverMAMASUKI04(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Musume Janakute Mama ga Suki nano!? 04 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMAMASUKI04 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMAMASUKI04;