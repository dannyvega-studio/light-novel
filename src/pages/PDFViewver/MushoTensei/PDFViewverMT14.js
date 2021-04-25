import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFRReaderMT14 from '../../../components/PDF/MushoTensei/PDFRReaderMT14';

function PDFViewverMT14(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 14 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFRReaderMT14 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT14;