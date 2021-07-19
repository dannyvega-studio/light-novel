import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKYAKKO01 from '../../../components/PDF/Kyakko/PDFRReaderKYAKKO01';

function PDFViewverKYAKKO01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Ano Orokamono ni mo Kyakkou wo! 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKYAKKO01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKYAKKO01;