import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBWTGS03 from '../../../components/PDF/BokuWaTomodachi/PDFRReaderBWTGS03';

function PDFViewverBWTGS03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Boku wa Tomodachi ga Sukunai 03 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBWTGS03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBWTGS03;