import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderNGNL10 from '../../components/PDF/NGNL/PDFRReaderNGNL10';

function PDFViewverNGNL10(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || No Game No Life 10 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderNGNL10 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverNGNL10;