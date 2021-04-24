import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderNGNL09 from '../../components/PDF/NGNL/PDFRReaderNGNL09';

function PDFViewverNGNL09(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || No Game No Life 09 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderNGNL09 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverNGNL09;