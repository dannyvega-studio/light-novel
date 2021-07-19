import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderHENNEKO09 from '../../../components/PDF/Henneko/PDFRReaderHENNEKO09';
    
function PDFViewverHENNEKO09(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Hentai Ouji to Warawanai Neko 09 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderHENNEKO09 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverHENNEKO09;