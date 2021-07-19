import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKDGNK09 from '../../../components/PDF/KumoDesuGa/PDFRReaderKDGNK09';

function PDFViewverKDGNK09(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kumo Desu Ga, Nani Ka? 09 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKDGNK09 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKDGNK09;