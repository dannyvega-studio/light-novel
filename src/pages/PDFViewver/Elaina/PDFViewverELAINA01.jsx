import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderELAINA01 from '../../../components/PDF/Elaina/PDFRReaderELAINA01';

function PDFViewverELAINA01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Majo no Tabitabi 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderELAINA01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverELAINA01;