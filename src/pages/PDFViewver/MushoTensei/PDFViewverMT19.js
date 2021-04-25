import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFRReaderMT19 from '../../../components/PDF/MushoTensei/PDFRReaderMT19';

function PDFViewverMT19(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 19 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFRReaderMT19 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT19;