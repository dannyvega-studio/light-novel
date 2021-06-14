import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';

import gs01 from '../assets/images/goblinslayer/01.jpg';
import konosuba01 from '../assets/images/konosuba/01.png';
import kdgnk01 from '../assets/images/kumodesuga/01.jpg';
import ngnl01 from '../assets/images/ngnl/01.jpg';
import mushoku01 from '../assets/images/mushoku/01.jpg';
import seishun01 from '../assets/images/seishunbuta/01.jpg';
import isekaimaou01 from '../assets/images/isekaimaou/01.jpg';
import bwtgs01 from '../assets/images/bokuwatomodachi/01.png';
import mondaiji01 from '../assets/images/mondaiji/01.jpg';
import rz01 from '../assets/images/rezero/01.png';


// Override CSS Styles in pagination //
const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff"
    }
  }
}));
// Ends Override CSS Styles in pagination //

function ListPage(props) {

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
                <title>Light Novels || List Page</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col lg={12} md={12} sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <Link to="/light-novel/bwtgs/"><img src={bwtgs01} class="ln-cover mt-4 mb-4" variant="top" alt="Boku wa Tomodachi ga Sukunai"/></Link>
                        <Card.Title>Boku wa Tomodachi ga Sukunai</Card.Title>             
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <Link to="/light-novel/gs/"><img src={gs01} class="ln-cover mt-4 mb-4" variant="top" alt="Goblin Slayer"/></Link>
                        <Card.Title>Goblin Slayer</Card.Title>             
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <Link to="/light-novel/isekaimaou/"><img src={isekaimaou01} class="ln-cover mt-4 mb-4" variant="top" alt="Isekai Maou Diablo"/></Link>
                        <Card.Title>Isekai Maou to Shoukan Shoujo no Dorei Majutsu</Card.Title>             
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <Link to="/light-novel/konosuba/"><img src={konosuba01} class="ln-cover mt-4 mb-4" variant="top" alt="KonoSuba"/></Link>
                        <Card.Title>Kono Subarashii Sekai ni Shukufuku wo!</Card.Title>             
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <Link to="/light-novel/kdgnk/"><img src={kdgnk01} class="ln-cover mt-4 mb-4" variant="top" alt="Kumo Desu Ga"/></Link>
                        <Card.Title>Kumo Desu Ga, Nani Ka?</Card.Title>             
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <Link to="/light-novel/mondaiji/"><img src={mondaiji01} class="ln-cover mt-4 mb-4" variant="top" alt="Mondaiji Tachi"/></Link>
                        <Card.Title>Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo?</Card.Title>             
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <Link to="/light-novel/mushoku/"><img src={mushoku01} class="ln-cover mt-4 mb-4" variant="top" alt="Mushoku Tensei"/></Link>
                        <Card.Title>Mushoku Tensei: Isekai Ittara Honki Dasu</Card.Title>             
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <Link to="/light-novel/ngnl/"><img src={ngnl01} class="ln-cover mt-4 mb-4" variant="top" alt="No Game No Life"/></Link>
                        <Card.Title>No Game No Life</Card.Title>                 
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <Link to="/light-novel/rz/"><img src={rz01} class="ln-cover mt-4 mb-4" variant="top" alt="Re:Zero kara Hajimeru Isekai Seikatsu"/></Link>
                        <Card.Title>Re:Zero kara Hajimeru Isekai Seikatsu</Card.Title>             
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={6}>
                        <Link to="/light-novel/sby/"><img src={seishun01} class="ln-cover mt-4 mb-4" variant="top" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai"/></Link>
                        <Card.Title>Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai</Card.Title>             
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

export default ListPage;