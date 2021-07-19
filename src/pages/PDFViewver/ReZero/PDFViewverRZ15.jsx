import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderRZ15 from '../../../components/PDF/ReZero/PDFRReaderRZ15';

function PDFViewverRZ15(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Re:Zero kara Hajimeru Isekai Seikatsu 15 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderRZ15 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverRZ15;