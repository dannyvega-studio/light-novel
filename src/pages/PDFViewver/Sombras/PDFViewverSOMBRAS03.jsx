import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderSOMBRAS03 from '../../../components/PDF/Sombras/PDFRReaderSOMBRAS03';

function PDFViewverSOMBRAS03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kage no Jitsuryokusha ni Naritakute! 03 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderSOMBRAS03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverSOMBRAS03;