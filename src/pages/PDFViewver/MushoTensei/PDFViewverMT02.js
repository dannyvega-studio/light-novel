import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMT02 from '../../../components/PDF/MushoTensei/PDFRReaderMT02';

function PDFViewverMT02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 02 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMT02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT02;