import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderRZ11 from '../../../components/PDF/ReZero/PDFRReaderRZ11';

function PDFViewverRZ11(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Re:Zero kara Hajimeru Isekai Seikatsu 11 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderRZ11 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverRZ11;