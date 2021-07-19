import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderELFSAN05 from '../../../components/PDF/Elfsan/PDFRReaderELFSAN05';

function PDFViewverELFSAN05(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Nihon e Youkoso Elf-san 05 View Online</title>
            </Helmet>
            <Container className="bg-white border" fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderELFSAN05 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverELFSAN05;