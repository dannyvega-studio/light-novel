import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKONOSUBA04 from '../../../components/PDF/KonoSuba/PDFRReaderKONOSUBA04';

function PDFViewverKONOSUBA04(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kono Subarashii Sekai ni Shukufuku wo! 04 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKONOSUBA04 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKONOSUBA04;