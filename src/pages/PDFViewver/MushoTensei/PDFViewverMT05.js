import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMT05 from '../../../components/PDF/MushoTensei/PDFRReaderMT05';

function PDFViewverMT05(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 05 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMT05 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT05;