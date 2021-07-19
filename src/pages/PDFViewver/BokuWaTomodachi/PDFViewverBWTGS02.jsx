import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBWTGS02 from '../../../components/PDF/BokuWaTomodachi/PDFRReaderBWTGS02';

function PDFViewverBWTGS02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Boku wa Tomodachi ga Sukunai 02 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBWTGS02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBWTGS02;