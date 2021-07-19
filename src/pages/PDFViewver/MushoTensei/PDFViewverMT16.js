import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFRReaderMT16 from '../../../components/PDF/MushoTensei/PDFRReaderMT16';

function PDFViewverMT16(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 16 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFRReaderMT16 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT16;