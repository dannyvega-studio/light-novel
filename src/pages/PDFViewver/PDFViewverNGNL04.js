import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderNGNL04 from '../../components/PDF/NGNL/PDFRReaderNGNL04';

function PDFViewverNGNL04(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || No Game No Life 04 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderNGNL04 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverNGNL04;