import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderHIGE04 from '../../../components/PDF/Hige/PDFRReaderHIGE04';

function PDFViewverHIGE04(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Hige wo Soru. Soshite Joshi Kōsei wo Hirou 04 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderHIGE04 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverHIGE04;