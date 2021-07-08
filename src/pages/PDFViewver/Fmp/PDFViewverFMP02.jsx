import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderFMP02 from '../../../components/PDF/Fmp/PDFRReaderFMP02';

function PDFViewverFMP02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Full Metal Panic! 02 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderFMP02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverFMP02;