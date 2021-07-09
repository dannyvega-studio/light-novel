import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import PDFReaderELFSAN04 from '../../../components/PDF/Elfsan/PDFRReaderELFSAN04';

function PDFViewverELFSAN04(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Nihon e Youkoso Elf-san 04 View Online</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col md={10}>
                        <PDFReaderELFSAN04 />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PDFViewverELFSAN04;