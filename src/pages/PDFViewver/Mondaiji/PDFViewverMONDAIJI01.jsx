import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMONDAIJI01 from '../../../components/PDF/Mondaiji/PDFRReaderMONDAIJI01';

function PDFViewverMONDAIJI01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? 01 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMONDAIJI01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMONDAIJI01;