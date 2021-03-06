import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderRZ13 from '../../../components/PDF/ReZero/PDFRReaderRZ13';

function PDFViewverRZ13(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Re:Zero kara Hajimeru Isekai Seikatsu 13 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderRZ13 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverRZ13;