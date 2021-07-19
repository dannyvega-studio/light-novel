import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderGS04 from '../../../components/PDF/GoblinSlayer/PDFRReaderGS04';

function PDFViewverGS04(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Goblin Slayer 04 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderGS04 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverGS04;