import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import kaiyari01 from '../assets/images/kaiyari/01.jpg';

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
                <title>Light Novels || List Page</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col lg={12} md={12} sm={12}>
                        { props.title && <h1 className="display-2 font-weight-bolder mb-4">{props.title}</h1> }
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6}>
                        <Link to="/light-novel/kaiyari/"><img src={kaiyari01} class="ln-cover mt-4 mb-4" variant="top" alt="Kaifuku Jutsushi no Yarinaoshi"/></Link>
                        <Card.Title>Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahou to Skill Copy no Chouetsu Heal</Card.Title>             
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