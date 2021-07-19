import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderFMP11 from '../../../components/PDF/Fmp/PDFRReaderFMP11';

function PDFViewverFMP11(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Full Metal Panic! 11 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderFMP11 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverFMP11;