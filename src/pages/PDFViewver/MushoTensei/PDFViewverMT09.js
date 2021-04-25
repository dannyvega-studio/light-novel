import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMT09 from '../../../components/PDF/MushoTensei/PDFRReaderMT09';

function PDFViewverMT09(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 09 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMT09 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT09;