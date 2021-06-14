import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderRZ08 from '../../../components/PDF/ReZero/PDFRReaderRZ08';

function PDFViewverRZ08(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Re:Zero kara Hajimeru Isekai Seikatsu 08 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderRZ08 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverRZ08;