import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderGS01 from '../../../components/PDF/GoblinSlayer/PDFRReaderGS01';

function PDFViewverGS01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Goblin Slayer 01 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderGS01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverGS01;