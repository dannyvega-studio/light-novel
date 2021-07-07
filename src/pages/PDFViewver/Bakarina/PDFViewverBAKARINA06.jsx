import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBAKARINA06 from '../../../components/PDF/Bakarina/PDFRReaderBAKARINA06';

function PDFViewverBAKARINA06(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... 06 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBAKARINA06 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBAKARINA06;