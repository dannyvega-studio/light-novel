import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderELAINA03 from '../../../components/PDF/Elaina/PDFRReaderELAINA03';

function PDFViewverELAINA03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Majo no Tabitabi 03 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderELAINA03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverELAINA03;