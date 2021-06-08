import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKAIYARI07 from '../../../components/PDF/KaiYari/PDFRReaderKAIYARI07';

function PDFViewverKAIYARI07(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahō to Skill Copy no Chōetsu Heal 07 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKAIYARI07 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKAIYARI07;