import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderELAINA02 from '../../../components/PDF/Elaina/PDFRReaderELAINA02';

function PDFViewverELAINA02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Majo no Tabitabi 02 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderELAINA02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverELAINA02;