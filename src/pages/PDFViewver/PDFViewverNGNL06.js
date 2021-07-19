import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderNGNL06 from '../../components/PDF/NGNL/PDFRReaderNGNL06';

function PDFViewverNGNL06(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || No Game No Life 06 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderNGNL06 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverNGNL06;