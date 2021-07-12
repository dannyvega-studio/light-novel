import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBOKUSENSEI06 from '../../../components/PDF/Bokusensei/PDFRReaderBOKUSENSEI06';

function PDFViewverBOKUSENSEI06(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Boku no Kanojo Sensei 06 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBOKUSENSEI06 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBOKUSENSEI06;