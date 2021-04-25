import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFRReaderMT10 from '../../../components/PDF/MushoTensei/PDFRReaderMT10';

function PDFViewverMT10(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 10 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFRReaderMT10 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT10;