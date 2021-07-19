import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKYAKKO05 from '../../../components/PDF/Kyakko/PDFRReaderKYAKKO05';

function PDFViewverKYAKKO05(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Ano Orokamono ni mo Kyakkou wo! 05 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKYAKKO05 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKYAKKO05;