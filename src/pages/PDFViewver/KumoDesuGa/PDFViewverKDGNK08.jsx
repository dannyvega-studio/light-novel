import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKDGNK08 from '../../../components/PDF/KumoDesuGa/PDFRReaderKDGNK08';

function PDFViewverKDGNK08(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kumo Desu Ga, Nani Ka? 08 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKDGNK08 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKDGNK08;