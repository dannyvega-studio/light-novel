import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMT01 from '../../../components/PDF/MushoTensei/PDFRReaderMT01';

function PDFViewverMT01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMT01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT01;