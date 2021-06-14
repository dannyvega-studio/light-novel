import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderRZ05 from '../../../components/PDF/ReZero/PDFRReaderRZ05';

function PDFViewverRZ05(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Re:Zero kara Hajimeru Isekai Seikatsu 05 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderRZ05 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverRZ05;