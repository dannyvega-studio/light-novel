import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderFMP08 from '../../../components/PDF/Fmp/PDFRReaderFMP08';

function PDFViewverFMP08(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Full Metal Panic! 08 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderFMP08 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverFMP08;