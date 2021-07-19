import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderBOKUNOSENSEI01 from '../../../components/PDF/Bokunosensei/PDFRReaderBOKUNOSENSEI01';

function PDFViewverBOKUNOSENSEI01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Boku no Sensei wa, Houkago Kawaii Konyakusha 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderBOKUNOSENSEI01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverBOKUNOSENSEI01;