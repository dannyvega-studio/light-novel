import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderOVERLORD03 from '../../../components/PDF/Overlord/PDFRReaderOVERLORD03';

function PDFViewverOVERLORD03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Overlord 03 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderOVERLORD03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverOVERLORD03;