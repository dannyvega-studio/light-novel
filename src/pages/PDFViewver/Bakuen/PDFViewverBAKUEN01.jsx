import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBAKUEN01 from '../../../components/PDF/Bakuen/PDFRReaderBAKUEN01';

function PDFViewverBAKUEN01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kono Subarashii Sekai ni Bakuen wo! 01 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBAKUEN01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBAKUEN01;