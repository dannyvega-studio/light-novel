import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderSBY02 from '../../../components/PDF/SeishunButa/PDFRReaderSBY02';

function PDFViewverSBY02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai 02 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderSBY02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverSBY02;