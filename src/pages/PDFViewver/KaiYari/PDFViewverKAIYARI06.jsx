import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderKAIYARI06 from '../../../components/PDF/KaiYari/PDFRReaderKAIYARI06';

function PDFViewverKAIYARI06(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahō to Skill Copy no Chōetsu Heal 06 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderKAIYARI06 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverKAIYARI06;