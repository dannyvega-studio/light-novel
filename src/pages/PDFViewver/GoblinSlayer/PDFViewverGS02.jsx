import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderGS02 from '../../../components/PDF/GoblinSlayer/PDFRReaderGS02';

function PDFViewverGS02(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Goblin Slayer 02 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderGS02 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverGS02;