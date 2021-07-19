import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMT06 from '../../../components/PDF/MushoTensei/PDFRReaderMT06';

function PDFViewverMT06(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 06 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMT06 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT06;