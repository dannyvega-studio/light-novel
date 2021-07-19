import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderRZ01 from '../../../components/PDF/ReZero/PDFRReaderRZ01';

function PDFViewverRZ01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Re:Zero kara Hajimeru Isekai Seikatsu 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderRZ01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverRZ01;