import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBWTGS10 from '../../../components/PDF/BokuWaTomodachi/PDFRReaderBWTGS10';

function PDFViewverBWTGS10(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Boku wa Tomodachi ga Sukunai 10 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBWTGS10 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBWTGS10;