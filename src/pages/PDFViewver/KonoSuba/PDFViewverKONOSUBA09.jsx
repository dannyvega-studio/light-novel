import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKONOSUBA09 from '../../../components/PDF/KonoSuba/PDFRReaderKONOSUBA09';

function PDFViewverKONOSUBA09(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kono Subarashii Sekai ni Shukufuku wo! 09 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKONOSUBA09 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKONOSUBA09;