import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKAMEN01 from '../../../components/PDF/Kamen/PDFRReaderKAMEN01';

function PDFViewverKAMEN01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kono Kamen no Akuma ni Soudan wo! 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKAMEN01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKAMEN01;