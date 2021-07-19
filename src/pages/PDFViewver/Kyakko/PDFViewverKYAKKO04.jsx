import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKYAKKO04 from '../../../components/PDF/Kyakko/PDFRReaderKYAKKO04';

function PDFViewverKYAKKO04(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Ano Orokamono ni mo Kyakkou wo! 04 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKYAKKO04 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKYAKKO04;