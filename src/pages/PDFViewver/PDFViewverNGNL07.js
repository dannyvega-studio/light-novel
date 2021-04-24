import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderNGNL07 from '../../components/PDF/NGNL/PDFRReaderNGNL07';

function PDFViewverNGNL07(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || No Game No Life 07 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderNGNL07 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverNGNL07;