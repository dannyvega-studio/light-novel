import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBOKUSENSEI04 from '../../../components/PDF/Bokusensei/PDFRReaderBOKUSENSEI04';

function PDFViewverBOKUSENSEI04(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Boku no Kanojo Sensei 04 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBOKUSENSEI04 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBOKUSENSEI04;