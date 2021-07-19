import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderELFSAN01 from '../../../components/PDF/Elfsan/PDFRReaderELFSAN01';

function PDFViewverELFSAN01(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Nihon e Youkoso Elf-san 01 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderELFSAN01 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverELFSAN01;