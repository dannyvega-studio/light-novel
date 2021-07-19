import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFRReaderMT18 from '../../../components/PDF/MushoTensei/PDFRReaderMT18';

function PDFViewverMT18(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Mushoku Tensei 18 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFRReaderMT18 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverMT18;