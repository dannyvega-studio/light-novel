import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKDGNK03 from '../../../components/PDF/KumoDesuGa/PDFRReaderKDGNK03';

function PDFViewverKDGNK03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kumo Desu Ga, Nani Ka? 03 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKDGNK03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKDGNK03;