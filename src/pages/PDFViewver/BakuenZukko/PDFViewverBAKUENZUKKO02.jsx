import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBAKUENZUKKO02 from '../../../components/PDF/BakuenZukko/PDFRReaderBAKUENZUKKO02';

function PDFViewverBAKUENZUKKO02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kono Subarashii Sekai ni Bakuen wo! Zukko 02 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBAKUENZUKKO02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBAKUENZUKKO02;