import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBWTGS05 from '../../../components/PDF/BokuWaTomodachi/PDFRReaderBWTGS05';

function PDFViewverBWTGS05(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Boku wa Tomodachi ga Sukunai 05 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBWTGS05 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBWTGS05;