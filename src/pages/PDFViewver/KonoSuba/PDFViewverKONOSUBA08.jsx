import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKONOSUBA08 from '../../../components/PDF/KonoSuba/PDFRReaderKONOSUBA08';

function PDFViewverKONOSUBA08(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kono Subarashii Sekai ni Shukufuku wo! 08 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKONOSUBA08 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKONOSUBA08;