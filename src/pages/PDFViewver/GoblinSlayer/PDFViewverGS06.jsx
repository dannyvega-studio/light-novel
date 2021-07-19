import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderGS06 from '../../../components/PDF/GoblinSlayer/PDFRReaderGS06';

function PDFViewverGS06(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Goblin Slayer 06 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderGS06 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverGS06;