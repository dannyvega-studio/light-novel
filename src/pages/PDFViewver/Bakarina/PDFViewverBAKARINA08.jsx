import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBAKARINA08 from '../../../components/PDF/Bakarina/PDFRReaderBAKARINA08';

function PDFViewverBAKARINA08(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... 08 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBAKARINA08 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBAKARINA08;