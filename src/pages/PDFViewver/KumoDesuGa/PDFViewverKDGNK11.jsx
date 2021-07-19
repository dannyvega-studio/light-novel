import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKDGNK11 from '../../../components/PDF/KumoDesuGa/PDFRReaderKDGNK11';

function PDFViewverKDGNK11(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kumo Desu Ga, Nani Ka? 11 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKDGNK11 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKDGNK11;