import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKONOSUBA13 from '../../../components/PDF/KonoSuba/PDFRReaderKONOSUBA13';

function PDFViewverKONOSUBA13(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kono Subarashii Sekai ni Shukufuku wo! 13 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKONOSUBA13 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKONOSUBA13;