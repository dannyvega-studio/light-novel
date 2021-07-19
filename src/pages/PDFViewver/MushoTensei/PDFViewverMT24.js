import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFRReaderMT24 from '../../../components/PDF/MushoTensei/PDFRReaderMT24';

function PDFViewverMT24(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 24 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFRReaderMT24 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT24;