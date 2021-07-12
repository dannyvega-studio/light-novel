import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBOKUSENSEI03 from '../../../components/PDF/Bokusensei/PDFRReaderBOKUSENSEI03';

function PDFViewverBOKUSENSEI03(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Boku no Kanojo Sensei 03 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBOKUSENSEI03 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBOKUSENSEI03;