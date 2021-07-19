import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMT04 from '../../../components/PDF/MushoTensei/PDFRReaderMT04';

function PDFViewverMT04(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 04 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMT04 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT04;