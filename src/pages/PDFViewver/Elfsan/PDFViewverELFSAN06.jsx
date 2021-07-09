import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderELFSAN06 from '../../../components/PDF/Elfsan/PDFRReaderELFSAN06';

function PDFViewverELFSAN06(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Nihon e Youkoso Elf-san 06 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderELFSAN06 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverELFSAN06;