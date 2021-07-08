import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderFMP05 from '../../../components/PDF/Fmp/PDFRReaderFMP05';

function PDFViewverFMP05(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Full Metal Panic! 05 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderFMP05 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverFMP05;