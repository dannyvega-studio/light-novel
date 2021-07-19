import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBAKUENZUKKO01 from '../../../components/PDF/BakuenZukko/PDFRReaderBAKUENZUKKO01';

function PDFViewverBAKUENZUKKO01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kono Subarashii Sekai ni Bakuen wo! Zukko 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBAKUENZUKKO01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBAKUENZUKKO01;