import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderGS05 from '../../../components/PDF/GoblinSlayer/PDFRReaderGS05';

function PDFViewverGS05(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Goblin Slayer 05 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderGS05 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverGS05;