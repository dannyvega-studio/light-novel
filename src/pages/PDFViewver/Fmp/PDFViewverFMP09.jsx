import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderFMP09 from '../../../components/PDF/Fmp/PDFRReaderFMP09';

function PDFViewverFMP09(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Full Metal Panic! 09 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderFMP09 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverFMP09;