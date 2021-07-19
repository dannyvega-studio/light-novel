import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderISEKAIMAOU07 from '../../../components/PDF/IsekaiMaou/PDFRReaderISEKAIMAOU07';

function PDFViewverISEKAIMAOU07(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Isekai Maou to Shoukan Shoujo no Dorei Majutsu 07 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderISEKAIMAOU07 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverISEKAIMAOU07;