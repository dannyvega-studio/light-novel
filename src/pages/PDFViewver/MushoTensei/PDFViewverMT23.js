import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFRReaderMT23 from '../../../components/PDF/MushoTensei/PDFRReaderMT23';

function PDFViewverMT23(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 23 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFRReaderMT23 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT23;