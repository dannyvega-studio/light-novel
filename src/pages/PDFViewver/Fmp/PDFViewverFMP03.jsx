import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderFMP03 from '../../../components/PDF/Fmp/PDFRReaderFMP03';

function PDFViewverFMP03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Full Metal Panic! 03 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderFMP03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverFMP03;