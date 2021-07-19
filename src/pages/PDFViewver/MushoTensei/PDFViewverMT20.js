import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFRReaderMT20 from '../../../components/PDF/MushoTensei/PDFRReaderMT20';

function PDFViewverMT20(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 20 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFRReaderMT20 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT20;