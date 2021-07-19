import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBOKUSENSEI01 from '../../../components/PDF/Bokusensei/PDFRReaderBOKUSENSEI01';

function PDFViewverBOKUSENSEI01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Boku no Kanojo Sensei 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBOKUSENSEI01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBOKUSENSEI01;