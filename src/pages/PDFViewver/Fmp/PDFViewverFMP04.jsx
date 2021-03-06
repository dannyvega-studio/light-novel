import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderFMP04 from '../../../components/PDF/Fmp/PDFRReaderFMP04';

function PDFViewverFMP04(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Full Metal Panic! 04 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderFMP04 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverFMP04;