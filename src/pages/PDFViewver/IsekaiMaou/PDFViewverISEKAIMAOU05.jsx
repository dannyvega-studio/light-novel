import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderISEKAIMAOU05 from '../../../components/PDF/IsekaiMaou/PDFRReaderISEKAIMAOU05';

function PDFViewverISEKAIMAOU05(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Isekai Maou to Shoukan Shoujo no Dorei Majutsu 05 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderISEKAIMAOU05 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverISEKAIMAOU05;