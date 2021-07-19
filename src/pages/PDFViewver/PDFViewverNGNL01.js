import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderNGNL01 from '../../components/PDF/NGNL/PDFRReaderNGNL01';

function PDFViewverNGNL01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || No Game No Life 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderNGNL01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverNGNL01;