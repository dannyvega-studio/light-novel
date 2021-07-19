import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBAKARINA07 from '../../../components/PDF/Bakarina/PDFRReaderBAKARINA07';

function PDFViewverBAKARINA07(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... 07 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBAKARINA07 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBAKARINA07;