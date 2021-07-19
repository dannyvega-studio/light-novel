import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderMONDAIJI05 from '../../../components/PDF/Mondaiji/PDFRReaderMONDAIJI05';

function PDFViewverMONDAIJI05(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? 05 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderMONDAIJI05 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMONDAIJI05;