import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderOVERLORD09 from '../../../components/PDF/Overlord/PDFRReaderOVERLORD09';

function PDFViewverOVERLORD09(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Overlord 09 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderOVERLORD09 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverOVERLORD09;