import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBWTGS08 from '../../../components/PDF/BokuWaTomodachi/PDFRReaderBWTGS08';

function PDFViewverBWTGS08(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Boku wa Tomodachi ga Sukunai 08 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBWTGS08 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBWTGS08;