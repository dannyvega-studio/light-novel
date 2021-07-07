import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderHENNEKO13 from '../../../components/PDF/Henneko/PDFRReaderHENNEKO13';

function PDFViewverHENNEKO13(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Hentai Ouji to Warawanai Neko 13 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderHENNEKO13 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverHENNEKO13;