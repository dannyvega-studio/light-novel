import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBOKUSENSEI07 from '../../../components/PDF/Bokusensei/PDFRReaderBOKUSENSEI07';

function PDFViewverBOKUSENSEI07(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Boku no Kanojo Sensei 07 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBOKUSENSEI07 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBOKUSENSEI07;