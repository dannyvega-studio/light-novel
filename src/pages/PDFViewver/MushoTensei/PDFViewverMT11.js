import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFRReaderMT11 from '../../../components/PDF/MushoTensei/PDFRReaderMT11';

function PDFViewverMT11(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 11 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFRReaderMT11 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT11;