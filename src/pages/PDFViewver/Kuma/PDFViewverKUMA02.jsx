import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKUMA02 from '../../../components/PDF/Kuma/PDFRReaderKUMA02';

function PDFViewverKUMA02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kuma Kuma Kuma Bear 02 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKUMA02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKUMA02;