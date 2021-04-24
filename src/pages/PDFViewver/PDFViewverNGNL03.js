import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderNGNL03 from '../../components/PDF/NGNL/PDFRReaderNGNL03';

function PDFViewverNGNL03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || No Game No Life 03 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderNGNL03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverNGNL03;