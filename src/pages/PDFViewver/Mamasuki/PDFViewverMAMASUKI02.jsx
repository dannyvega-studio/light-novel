import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMAMASUKI02 from '../../../components/PDF/Mamasuki/PDFRReaderMAMASUKI02';

function PDFViewverMAMASUKI02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Musume Janakute Mama ga Suki nano!? 02 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMAMASUKI02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMAMASUKI02;