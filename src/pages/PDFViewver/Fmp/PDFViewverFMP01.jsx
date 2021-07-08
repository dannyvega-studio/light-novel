import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderFMP01 from '../../../components/PDF/Fmp/PDFRReaderFMP01';

function PDFViewverFMP01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Full Metal Panic! 01 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderFMP01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverFMP01;