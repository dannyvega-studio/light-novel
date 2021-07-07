import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import bakuen01 from '../assets/images/konosuba/bakuen/01.png';
import bakuenzukko01 from '../assets/images/konosuba/zuko/01.png';
import kamen01 from '../assets/images/konosuba/kamen/01.png';
import kyakko01 from '../assets/images/konosuba/kyakko/01.jpg';

// Override CSS Styles in pagination //
const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff"
    }
  }
}));
// Ends Override CSS Styles in pagination //

function ListEroPage(props) {

    // Shows current pagination page //
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    // Ends current pagination page //

    return(
        <div>
            <Helmet>
                <title>Light Novels || Spin Off List</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col lg={12} md={12} sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <Link to="/light-novel/kyakko/"><img src={kyakko01} class="ln-cover mt-4 mb-4" variant="top" alt="Ano Orokamono ni mo Kyakkou wo!"/></Link>
                        <Card.Title>Ano Orokamono ni mo Kyakkou wo!</Card.Title>             
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <Link to="/light-novel/kamen/"><img src={kamen01} class="ln-cover mt-4 mb-4" variant="top" alt="Kono Kamen no Akuma ni Soudan wo!"/></Link>
                        <Card.Title>Kono Kamen no Akuma ni Soudan wo!</Card.Title>             
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <Link to="/light-novel/bakuen/"><img src={bakuen01} class="ln-cover mt-4 mb-4" variant="top" alt="Kono Subarashii Sekai ni Bakuen wo!"/></Link>
                        <Card.Title>Kono Subarashii Sekai ni Bakuen wo!</Card.Title>             
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <Link to="/light-novel/bakuenzukko/"><img src={bakuenzukko01} class="ln-cover mt-4 mb-4" variant="top" alt="Kono Subarashii Sekai ni Bakuen wo! Zukko"/></Link>
                        <Card.Title>Kono Subarashii Sekai ni Bakuen wo! Zukko</Card.Title>             
                    </Col>
                </Row>

                <Row className="pagination-controls bg-dark m-3 p-3 d-flex align-items-baseline justify-content-center br-4">
                    <Col lg={6} md={12} sm={12}>
                        <Pagination classes={{ ul: classes.ul }}
                            count={10} 
                            variant="outlined" 
                            shape="rounded" 
                            size="large" 
                            page={page} onChange={handleChange}
                        />
                        <Typography className="mt-4 mb-1">Página: {page}</Typography>
                    </Col>
                </Row>

            </Container>
            
        </div>
    );
}

export default ListEroPage;