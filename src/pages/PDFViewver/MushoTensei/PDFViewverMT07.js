import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMT07 from '../../../components/PDF/MushoTensei/PDFRReaderMT07';

function PDFViewverMT07(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 07 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMT07 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT07;