import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderSBY03 from '../../../components/PDF/SeishunButa/PDFRReaderSBY03';

function PDFViewverSBY03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai 03 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderSBY03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverSBY03;