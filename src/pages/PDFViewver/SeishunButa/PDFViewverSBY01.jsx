import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderSBY01 from '../../../components/PDF/SeishunButa/PDFRReaderSBY01';

function PDFViewverSBY01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderSBY01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverSBY01;