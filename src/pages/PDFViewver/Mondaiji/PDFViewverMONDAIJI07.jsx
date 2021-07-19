import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMONDAIJI07 from '../../../components/PDF/Mondaiji/PDFRReaderMONDAIJI07';

function PDFViewverMONDAIJI07(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? 07 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMONDAIJI07 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMONDAIJI07;