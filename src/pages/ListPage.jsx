import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import { Element, animateScroll as scroll, scroller } from 'react-scroll';

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
import bakarina01 from '../assets/images/bakarina/01.jpg';
import mamasuki01 from '../assets/images/mamasuki/01.jpg';
import hige01 from '../assets/images/hige/01.jpg';
import henneko01 from '../assets/images/henneko/01.jpg';
import bokunosensei01 from '../assets/images/bokunosensei/01.jpg';
import fmp01 from '../assets/images/fmp/01.png';
import elfsan01 from '../assets/images/elfsan/01.png';
import bokusensei01 from '../assets/images/bokusensei/01.jpg';
import overlord01 from '../assets/images/overlord/01.png';
import elaina01 from '../assets/images/elaina/01.jpg';
import kuma01 from '../assets/images/kumakuma/01.jpg';
import slime30001 from '../assets/images/300/01.png';
import sombras01 from '../assets/images/sombras/01.png';


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
            <Container className="bg-white border" fluid={true}>

                <Row className="justify-content-center py-5">
                    <Col lg={12} md={12} sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                    </Col>
                    <Col className="pagination-controls bg-dark m-3 p-3 d-flex align-items-baseline justify-content-center flex-wrap br-4" lg={10} md={12} sm={12}>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraA', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>A</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraB', { duration: 1500, delay: 100, smooth: true, offset: -80 })}>B</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraC', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>C</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraD', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>D</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraE', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>E</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraF', { duration: 1500, delay: 100, smooth: true, offset: -80 })}>F</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraG', { duration: 1500, delay: 100, smooth: true, offset: -80 })}>G</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraH', { duration: 1500, delay: 100, smooth: true, offset: -80 })}>H</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraI', { duration: 1500, delay: 100, smooth: true, offset: -80 })}>I</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraJ', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>J</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraK', { duration: 1500, delay: 100, smooth: true, offset: -80 })}>K</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraL', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>L</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraM', { duration: 1500, delay: 100, smooth: true, offset: -80 })}>M</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraN', { duration: 1500, delay: 100, smooth: true, offset: -80 })}>N</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraO', { duration: 1500, delay: 100, smooth: true, offset: -80 })}>O</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraP', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>P</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraQ', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>Q</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraR', { duration: 1500, delay: 100, smooth: true, offset: -80 })}>R</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraS', { duration: 1500, delay: 100, smooth: true, offset: -80 })}>S</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraT', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>T</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraU', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>U</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraV', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>V</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraW', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>W</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraX', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>X</Button>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroller.scrollTo('letraY', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>Y</Button>
                        <Button className="bg-dark btn-dark px-2" onClick={() => scroller.scrollTo('letraZ', { duration: 1500, delay: 100, smooth: true, offset: -80 })} disabled>Z</Button>
                    </Col>
                    <Col className="my-2 py-2" lg={12} md={12} sm={12} id="B">
                        <Element name="letraB"><Card.Title>B</Card.Title></Element>
                        <Row className="justify-content-center">
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/bokusensei/"><img src={bokusensei01} class="ln-cover mt-4 mb-4" variant="top" alt="Boku no Kanojo Sensei"/></Link>
                                <Card.Title>Boku no Kanojo Sensei</Card.Title>             
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/bokunosensei/"><img src={bokunosensei01} class="ln-cover mt-4 mb-4" variant="top" alt="Boku no Sensei wa, Houkago Kawaii Konyakusha"/></Link>
                                <Card.Title>Boku no Sensei wa, Houkago Kawaii Konyakusha</Card.Title>             
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/bwtgs/"><img src={bwtgs01} class="ln-cover mt-4 mb-4" variant="top" alt="Boku wa Tomodachi ga Sukunai"/></Link>
                                <Card.Title>Boku wa Tomodachi ga Sukunai</Card.Title>             
                            </Col>
                        </Row>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroll.scrollToTop()}>Volver</Button>            
                    </Col>
                    <Col className="my-2 py-2" lg={12} md={12} sm={12} id="F">
                        <Element name="letraF"><Card.Title>F</Card.Title></Element>
                        <Row className="justify-content-center">
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/fmp/"><img src={fmp01} class="ln-cover mt-4 mb-4" variant="top" alt="Full Metal Panic!"/></Link>
                                <Card.Title>Full Metal Panic!</Card.Title>             
                            </Col>
                        </Row>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroll.scrollToTop()}>Volver</Button>            
                    </Col>
                    <Col className="my-2 py-2" lg={12} md={12} sm={12} id="G">
                        <Element name="letraG"><Card.Title>G</Card.Title></Element>
                        <Row className="justify-content-center">
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/gs/"><img src={gs01} class="ln-cover mt-4 mb-4" variant="top" alt="Goblin Slayer"/></Link>
                                <Card.Title>Goblin Slayer</Card.Title>             
                            </Col>
                        </Row>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroll.scrollToTop()}>Volver</Button>            
                    </Col>
                    <Col className="my-2 py-2" lg={12} md={12} sm={12} id="H">
                        <Element name="letraH"><Card.Title>H</Card.Title></Element>
                        <Row className="justify-content-center">
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/henneko/"><img src={henneko01} class="ln-cover mt-4 mb-4" variant="top" alt="Hentai Ouji to Warawanai Neko"/></Link>
                                <Card.Title>Hentai Ouji to Warawanai Neko</Card.Title>             
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/hige/"><img src={hige01} class="ln-cover mt-4 mb-4" variant="top" alt="Hige wo Soru. Soshite Joshi Kōsei wo Hirou"/></Link>
                                <Card.Title>Hige wo Soru. Soshite Joshi Kōsei wo Hirou</Card.Title>             
                            </Col>
                        </Row>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroll.scrollToTop()}>Volver</Button>            
                    </Col>
                    <Col className="my-2 py-2" lg={12} md={12} sm={12} id="I">
                        <Element name="letraI"><Card.Title>I</Card.Title></Element>
                        <Row className="justify-content-center">
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/isekaimaou/"><img src={isekaimaou01} class="ln-cover mt-4 mb-4" variant="top" alt="Isekai Maou Diablo"/></Link>
                                <Card.Title>Isekai Maou to Shoukan Shoujo no Dorei Majutsu</Card.Title>             
                            </Col>
                        </Row>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroll.scrollToTop()}>Volver</Button>            
                    </Col>
                    <Col className="my-2 py-2" lg={12} md={12} sm={12} id="K">
                        <Element name="letraK"><Card.Title>K</Card.Title></Element>
                        <Row className="justify-content-center">
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/sombras/"><img src={sombras01} class="ln-cover mt-4 mb-4" variant="top" alt="Eminencia en las Sombras"/></Link>
                                <Card.Title>Kage no Jitsuryokusha ni Naritakute!</Card.Title>                 
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/konosuba/"><img src={konosuba01} class="ln-cover mt-4 mb-4" variant="top" alt="KonoSuba"/></Link>
                                <Card.Title>Kono Subarashii Sekai ni Shukufuku wo!</Card.Title>                 
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/kumakuma/"><img src={kuma01} class="ln-cover mt-4 mb-4" variant="top" alt="Kuma Kuma Kuma Bear"/></Link>
                                <Card.Title>Kuma Kuma Kuma Bear</Card.Title>             
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/kdgnk/"><img src={kdgnk01} class="ln-cover mt-4 mb-4" variant="top" alt="Kumo Desu Ga"/></Link>
                                <Card.Title>Kumo Desu Ga, Nani Ka?</Card.Title>             
                            </Col>
                        </Row>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroll.scrollToTop()}>Volver</Button>            
                    </Col>
                    <Col className="my-2 py-2" lg={12} md={12} sm={12} id="M">
                        <Element name="letraM"><Card.Title>M</Card.Title></Element>
                        <Row className="justify-content-center">
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/elaina/"><img src={elaina01} class="ln-cover mt-4 mb-4" variant="top" alt="Majo no Tabitabi Elaina"/></Link>
                                <Card.Title>Majo no TabiTabi</Card.Title>             
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/mondaiji/"><img src={mondaiji01} class="ln-cover mt-4 mb-4" variant="top" alt="Mondaiji Tachi"/></Link>
                                <Card.Title>Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo?</Card.Title>             
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>                                    
                                <Link to="/light-novel/mushoku/"><img src={mushoku01} class="ln-cover mt-4 mb-4" variant="top" alt="Mushoku Tensei"/></Link>
                                <Card.Title>Mushoku Tensei: Isekai Ittara Honki Dasu</Card.Title>             
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/mamasuki/"><img src={mamasuki01} class="ln-cover mt-4 mb-4" variant="top" alt="Musume Janakute Mama ga Suki nano!?"/></Link>
                                <Card.Title>Musume Janakute Mama ga Suki nano!?</Card.Title>             
                            </Col>
                        </Row>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroll.scrollToTop()}>Volver</Button>            
                    </Col>
                    <Col className="my-2 py-2" lg={12} md={12} sm={12} id="N">
                        <Element name="letraN"><Card.Title>N</Card.Title></Element>
                        <Row className="justify-content-center">
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/elfsan/"><img src={elfsan01} class="ln-cover mt-4 mb-4" variant="top" alt="Nihon e Youkoso Elf-san"/></Link>
                                <Card.Title>Nihon e Youkoso Elf-san</Card.Title> 
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/ngnl/"><img src={ngnl01} class="ln-cover mt-4 mb-4" variant="top" alt="No Game No Life"/></Link>
                                <Card.Title>No Game No Life</Card.Title> 
                            </Col>
                        </Row>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroll.scrollToTop()}>Volver</Button>
                    </Col>
                    <Col className="my-2 py-2" lg={12} md={12} sm={12} id="O">
                        <Element name="letraO"><Card.Title>O</Card.Title></Element>
                        <Row className="justify-content-center">
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/bakarina/"><img src={bakarina01} class="ln-cover mt-4 mb-4" variant="top" alt="Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta..."/></Link>
                                <Card.Title>Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta...</Card.Title>   
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/overlord/"><img src={overlord01} class="ln-cover mt-4 mb-4" variant="top" alt="Overlord"/></Link>
                                <Card.Title>Overlord</Card.Title>   
                            </Col>
                        </Row>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroll.scrollToTop()}>Volver</Button>
                    </Col>
                    <Col className="my-2 py-2" lg={12} md={12} sm={12} id="R">
                        <Element name="letraR"><Card.Title>R</Card.Title></Element>
                        <Row className="justify-content-center">
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/rz/"><img src={rz01} class="ln-cover mt-4 mb-4" variant="top" alt="Re:Zero kara Hajimeru Isekai Seikatsu"/></Link>
                                <Card.Title>Re:Zero kara Hajimeru Isekai Seikatsu</Card.Title>   
                            </Col>
                        </Row>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroll.scrollToTop()}>Volver</Button>
                    </Col>
                    <Col className="my-2 py-2" lg={12} md={12} sm={12} id="S">
                        <Element name="letraS"><Card.Title>S</Card.Title></Element>
                        <Row className="justify-content-center">
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/sby/"><img src={seishun01} class="ln-cover mt-4 mb-4" variant="top" alt="Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai"/></Link>
                                <Card.Title>Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai</Card.Title>      
                            </Col>
                            <Col className="py-2" lg={2} md={3} sm={4} xs={6}>
                                <Link to="/light-novel/300/"><img src={slime30001} class="ln-cover mt-4 mb-4" variant="top" alt="Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita"/></Link>
                                <Card.Title>Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita</Card.Title>      
                            </Col>
                        </Row>
                        <Button className="bg-dark btn-dark px-2 mr-1" onClick={() => scroll.scrollToTop()}>Volver</Button>
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