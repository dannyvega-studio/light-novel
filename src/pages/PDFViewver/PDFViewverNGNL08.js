import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderNGNL08 from '../../components/PDF/NGNL/PDFRReaderNGNL08';

function PDFViewverNGNL08(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || No Game No Life 08 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderNGNL08 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverNGNL08;