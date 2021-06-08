import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKONOSUBA11 from '../../../components/PDF/KonoSuba/PDFRReaderKONOSUBA11';

function PDFViewverKONOSUBA11(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kono Subarashii Sekai ni Shukufuku wo! 11 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKONOSUBA11 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKONOSUBA11;