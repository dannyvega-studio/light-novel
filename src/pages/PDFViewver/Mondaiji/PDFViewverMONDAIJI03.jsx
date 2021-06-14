import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMONDAIJI03 from '../../../components/PDF/Mondaiji/PDFRReaderMONDAIJI03';

function PDFViewverMONDAIJI03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? 03 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMONDAIJI03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMONDAIJI03;