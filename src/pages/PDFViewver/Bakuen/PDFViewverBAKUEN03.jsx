import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBAKUEN03 from '../../../components/PDF/Bakuen/PDFRReaderBAKUEN03';

function PDFViewverBAKUEN03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kono Subarashii Sekai ni Bakuen wo! 03 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBAKUEN03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBAKUEN03;