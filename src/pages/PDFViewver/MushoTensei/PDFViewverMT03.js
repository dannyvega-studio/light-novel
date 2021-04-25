import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMT03 from '../../../components/PDF/MushoTensei/PDFRReaderMT03';

function PDFViewverMT03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 03 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMT03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT03;