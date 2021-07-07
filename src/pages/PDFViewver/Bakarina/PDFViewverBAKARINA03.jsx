import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBAKARINA03 from '../../../components/PDF/Bakarina/PDFRReaderBAKARINA03';

function PDFViewverBAKARINA03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... 03 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBAKARINA03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBAKARINA03;