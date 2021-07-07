import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderHENNEKO06 from '../../../components/PDF/Henneko/PDFRReaderHENNEKO06';

function PDFViewverHENNEKO06(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Hentai Ouji to Warawanai Neko 06 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderHENNEKO06 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverHENNEKO06;