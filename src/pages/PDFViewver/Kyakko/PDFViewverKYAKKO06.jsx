import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKYAKKO06 from '../../../components/PDF/Kyakko/PDFRReaderKYAKKO06';

function PDFViewverKYAKKO06(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Ano Orokamono ni mo Kyakkou wo! 06 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKYAKKO06 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKYAKKO06;