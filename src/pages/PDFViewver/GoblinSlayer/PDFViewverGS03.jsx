import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderGS03 from '../../../components/PDF/GoblinSlayer/PDFRReaderGS03';

function PDFViewverGS03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Goblin Slayer 03 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderGS03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverGS03;