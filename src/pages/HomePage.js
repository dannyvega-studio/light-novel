import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';

import HomeUpdates from '../components/HomeUpdates';
import RequestWeebs from '../components/RequestWeebs';
import TableContent from '../components/Pagination/TableContent';

function HomePage(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Home Page</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col lg={7} md={12} sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                        { props.text && <h3 className="lead font-weight-bold">{props.text}</h3> }
                        <HomeUpdates />
                    </Col>
                    <Col lg={5} md={12} sm={12}>
                        { props.subTitle && <h3 className="display-4 font-weight-light mb-4">{props.subTitle}</h3> }
                        <TableContent />
                        <RequestWeebs />
                    </Col>
                </Row>
            </Container>

            
        </div>
    );
}

export default HomePage;