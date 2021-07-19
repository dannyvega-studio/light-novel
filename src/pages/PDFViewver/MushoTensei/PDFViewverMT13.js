import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFRReaderMT13 from '../../../components/PDF/MushoTensei/PDFRReaderMT13';

function PDFViewverMT13(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 13 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFRReaderMT13 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT13;