import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMT08 from '../../../components/PDF/MushoTensei/PDFRReaderMT08';

function PDFViewverMT08(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 08 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMT08 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT08;