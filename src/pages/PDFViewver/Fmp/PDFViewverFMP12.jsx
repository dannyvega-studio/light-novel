import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderFMP12 from '../../../components/PDF/Fmp/PDFRReaderFMP12';

function PDFViewverFMP12(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Full Metal Panic! 12 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderFMP12 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverFMP12;