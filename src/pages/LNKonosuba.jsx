import React from 'react';
import {Helmet} from "react-helmet";
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CarouselKONOSUBA from '../components/CarouselKONOSUBA';
import konosuba01 from '../assets/images/konosuba/01.png';
import konosuba02 from '../assets/images/konosuba/02.png';
import konosuba03 from '../assets/images/konosuba/03.png';
import konosuba04 from '../assets/images/konosuba/04.png';
import konosuba05 from '../assets/images/konosuba/05.png';
import konosuba06 from '../assets/images/konosuba/06.png';
import konosuba07 from '../assets/images/konosuba/07.png';
import konosuba08 from '../assets/images/konosuba/08.png';
import konosuba09 from '../assets/images/konosuba/09.png';
import konosuba10 from '../assets/images/konosuba/10.png';
import konosuba11 from '../assets/images/konosuba/11.png';
import konosuba12 from '../assets/images/konosuba/12.png';
import konosuba13 from '../assets/images/konosuba/13.jpg';
import konosuba14 from '../assets/images/konosuba/14.jpg';
import konosuba15 from '../assets/images/konosuba/15.jpg';
import konosuba16 from '../assets/images/konosuba/16.jpg';
import konosuba17 from '../assets/images/konosuba/17.jpg';

function LNKonosuba(props) {

    return(
        <div>
            <Helmet>
                <title>Light Novels || Kono Subarashii Sekai ni Shukufuku wo!</title>
            </Helmet>
            <Container className="bg-white border">
                <Row className="justify-content-center py-5">
                    <Col sm={12}>
                        { props.title && <h1 className="display-3 font-weight-bolder mb-4">{props.title}</h1> }
                    </Col>
                    <Col sm={8}>
                        <CarouselKONOSUBA />
                    </Col>
                    <Col sm={12}>
                        { props.subTitle && <h3 className="display-4 font-weight-light mb-4">{props.subTitle}</h3> }
                        { props.text && <h4 className="lead font-weight-light justify mr-4 ml-4 mb-4">{props.text}</h4> }
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 17" src={konosuba17} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 17</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/ZgonmCoI#-_AD2FP4f5WWBzPuIlJq_ljirx3Qc2pDCcuebus00t8" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/17">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 16" src={konosuba16} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 16 </Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/l45jVYqB#3oSV31BKPC5qM-BUTKyWyq5K1Z4FVnD_Zvak9A-R-ew" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/16">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 15" src={konosuba15} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 15</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/00oXRCAD#QfiKxHzcqrDs1pvQLIAzIA6Y2uLANJm5NV2UH4QGwJc" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/15">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 02" src={konosuba14} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 14</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/M1gHia7A#JU92dH9IC7d0oNhaFW_PQnODvI2fRR1Jzd0wuuX5cVg" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/14">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 13" src={konosuba13} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 13</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/dxphACgS#UCD7T_5GEX-WUheVupNs2AyUJL1iCJ36hz0KzeM4otE" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/13">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 12" src={konosuba12} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 12</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/dlp33IrJ#VkpfdRtpdEEXPsFKSpH0QD_iNoSiIovSO_3AgxKHacU" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/12">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 11" src={konosuba11} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 11</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/N8oFXQgB#_3IfEmMiTUW8tr0o1s3aLIbFq6iJxLBfxmUWddmkLAU" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/1">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 10" src={konosuba10} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 10</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/xloRQIRC#gTyhVYkB_aODfmWWHLO9QIrBnHoRKwxmg4IuYn20PIg" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/10">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 09" src={konosuba09} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 09</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Q84RwSrJ#PDDn9XuWK9A5M-SIOl3W_yf5yGxsXK-Fn24HG1IVdJE" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/09">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 08" src={konosuba08} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 08</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Y9plnIRS#jm4gmV9FPgOWPDemnD2jl6iClxpwjwJ-fZ4BRIDUTkw" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/08">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 07" src={konosuba07} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 07</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/xko1SCJR#E63FM8cOBiJzPpZ0FO5dRno-oBOurOYiFu4fgLIWftc" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/07">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 06" src={konosuba06} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 06</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/t1hRyCwZ#he1sucE3fdQFQDUd99boSaOZ5ueX_Iqb4O35hPiJ1EQ" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/06">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 05" src={konosuba05} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 05</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/xwg3VI7Q#orIxdoqg_JWZZFs1NjZiHVScFQQ_6LpJquvmlk-HOOE" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/05">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 04" src={konosuba04} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 04</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/Utg1CIiA#7_uwuc8-CWB1Mji3JGDzaB5KFdzf0nfGFxkYgNXN8tI" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/04">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 03" src={konosuba03} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 03</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/0hwlDSSQ#3oZjRbck691ieeFMXNhWCH8V42P3v30DtEIJveZ4dY0" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/03">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 02" src={konosuba02} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 02</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/B9wRVa4Y#--waNoHxiiBvx4cXzVaIe5bK1UuUZoiEqLL4vWMYccY" target="_blank" rel="noreferrer">
                                                Descargar</a>
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/02">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                    <Col md={4} sm={6} xs={6}>
                        <Card.Img bsPrefix="ln-cover" className="ln-cover" variant="top" alt="Kono Subarashii Sekai ni Shukufuku wo! 01" src={konosuba01} />
                        <Card.Body>
                            <Card.Title> VOLUMEN 01</Card.Title>
                                <Card.Text>
                                    <div class="d-flex align-items-baseline justify-content-center">
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <a class="btn-dark-text" href="https://mega.nz/file/kgAhzYBJ#zcUKHCi1FBBvMCukapsGIgn39fc-CQGLLkg5EQ6GazA" target="_blank" rel="noreferrer">
                                                Descargar</a>    
                                        </Button>
                                        <Button bsPrefix="btn-dark" variant="light" size="sm" className="mr-2">
                                            <Link className="btn-dark-text" to="/light-novel/konosuba/01">Leer</Link>
                                        </Button>
                                    </div>
                                </Card.Text>
                        </Card.Body>
                        <Card.Img />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LNKonosuba;