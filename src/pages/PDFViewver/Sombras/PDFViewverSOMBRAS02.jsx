import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderSOMBRAS02 from '../../../components/PDF/Sombras/PDFRReaderSOMBRAS02';

function PDFViewverSOMBRAS02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kage no Jitsuryokusha ni Naritakute! 02 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderSOMBRAS02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverSOMBRAS02;