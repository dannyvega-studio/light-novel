import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFRReaderMT17 from '../../../components/PDF/MushoTensei/PDFRReaderMT17';

function PDFViewverMT17(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 17 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFRReaderMT17 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT17;