import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Jumbotron } from 'react-bootstrap';

import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import ListEroPage from './pages/ListEroPage';
import ListSpinOff from './pages/ListSpinOff';

// START LIGHT NOVELS //

import LNNoGameNoLife from './pages/LightNovel/LNNoGameNoLife.jsx';
import PDFViewverNGNL01 from './pages/PDFViewver/PDFViewverNGNL01';
import PDFViewverNGNL02 from './pages/PDFViewver/PDFViewverNGNL02';
import PDFViewverNGNL03 from './pages/PDFViewver/PDFViewverNGNL03';
import PDFViewverNGNL04 from './pages/PDFViewver/PDFViewverNGNL04';
import PDFViewverNGNL05 from './pages/PDFViewver/PDFViewverNGNL05';
import PDFViewverNGNL06 from './pages/PDFViewver/PDFViewverNGNL06';
import PDFViewverNGNL07 from './pages/PDFViewver/PDFViewverNGNL07';
import PDFViewverNGNL08 from './pages/PDFViewver/PDFViewverNGNL08';
import PDFViewverNGNL09 from './pages/PDFViewver/PDFViewverNGNL09';
import PDFViewverNGNL10 from './pages/PDFViewver/PDFViewverNGNL10';

import LNMushokuTensei from './pages/LightNovel/LNMushokuTensei.jsx';
import PDFViewverMT01 from './pages/PDFViewver/MushoTensei/PDFViewverMT01';
import PDFViewverMT02 from './pages/PDFViewver/MushoTensei/PDFViewverMT02';
import PDFViewverMT03 from './pages/PDFViewver/MushoTensei/PDFViewverMT03';
import PDFViewverMT04 from './pages/PDFViewver/MushoTensei/PDFViewverMT04';
import PDFViewverMT05 from './pages/PDFViewver/MushoTensei/PDFViewverMT05';
import PDFViewverMT06 from './pages/PDFViewver/MushoTensei/PDFViewverMT06';
import PDFViewverMT07 from './pages/PDFViewver/MushoTensei/PDFViewverMT07';
import PDFViewverMT08 from './pages/PDFViewver/MushoTensei/PDFViewverMT08';
import PDFViewverMT09 from './pages/PDFViewver/MushoTensei/PDFViewverMT09';
import PDFViewverMT10 from './pages/PDFViewver/MushoTensei/PDFViewverMT10';
import PDFViewverMT11 from './pages/PDFViewver/MushoTensei/PDFViewverMT11';
import PDFViewverMT12 from './pages/PDFViewver/MushoTensei/PDFViewverMT12';
import PDFViewverMT13 from './pages/PDFViewver/MushoTensei/PDFViewverMT13';
import PDFViewverMT14 from './pages/PDFViewver/MushoTensei/PDFViewverMT14';
import PDFViewverMT15 from './pages/PDFViewver/MushoTensei/PDFViewverMT15';
import PDFViewverMT16 from './pages/PDFViewver/MushoTensei/PDFViewverMT16';
import PDFViewverMT17 from './pages/PDFViewver/MushoTensei/PDFViewverMT17';
import PDFViewverMT18 from './pages/PDFViewver/MushoTensei/PDFViewverMT18';
import PDFViewverMT19 from './pages/PDFViewver/MushoTensei/PDFViewverMT19';
import PDFViewverMT20 from './pages/PDFViewver/MushoTensei/PDFViewverMT20';
import PDFViewverMT21 from './pages/PDFViewver/MushoTensei/PDFViewverMT21';
import PDFViewverMT22 from './pages/PDFViewver/MushoTensei/PDFViewverMT22';
import PDFViewverMT23 from './pages/PDFViewver/MushoTensei/PDFViewverMT23';
import PDFViewverMT24 from './pages/PDFViewver/MushoTensei/PDFViewverMT24';

import LNKumoDesuGa from './pages/LightNovel/LNKumoDesuGa';
import PDFViewverKDGNK01 from './pages/PDFViewver/KumoDesuGa/PDFViewverKDGNK01';
import PDFViewverKDGNK02 from './pages/PDFViewver/KumoDesuGa/PDFViewverKDGNK02';
import PDFViewverKDGNK03 from './pages/PDFViewver/KumoDesuGa/PDFViewverKDGNK03';
import PDFViewverKDGNK04 from './pages/PDFViewver/KumoDesuGa/PDFViewverKDGNK04';
import PDFViewverKDGNK05 from './pages/PDFViewver/KumoDesuGa/PDFViewverKDGNK05';
import PDFViewverKDGNK06 from './pages/PDFViewver/KumoDesuGa/PDFViewverKDGNK06';
import PDFViewverKDGNK07 from './pages/PDFViewver/KumoDesuGa/PDFViewverKDGNK07';
import PDFViewverKDGNK08 from './pages/PDFViewver/KumoDesuGa/PDFViewverKDGNK08';
import PDFViewverKDGNK09 from './pages/PDFViewver/KumoDesuGa/PDFViewverKDGNK09';
import PDFViewverKDGNK10 from './pages/PDFViewver/KumoDesuGa/PDFViewverKDGNK10';
import PDFViewverKDGNK11 from './pages/PDFViewver/KumoDesuGa/PDFViewverKDGNK11';

import LNGoblinSlayer from './pages/LightNovel/LNGoblinSlayer';
import PDFViewverGS01 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS01';
import PDFViewverGS02 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS02';
import PDFViewverGS03 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS03';
import PDFViewverGS04 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS04';
import PDFViewverGS05 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS05';
import PDFViewverGS06 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS06';

import LNSeishunButa from './pages/LightNovel/LNSeishunButa';
import PDFViewverSBY01 from './pages/PDFViewver/SeishunButa/PDFViewverSBY01';
import PDFViewverSBY02 from './pages/PDFViewver/SeishunButa/PDFViewverSBY02';
import PDFViewverSBY03 from './pages/PDFViewver/SeishunButa/PDFViewverSBY03';
import PDFViewverSBY04 from './pages/PDFViewver/SeishunButa/PDFViewverSBY04';

import LNKonosuba from './pages/LightNovel/LNKonosuba';
import PDFViewverKONOSUBA01 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA01';
import PDFViewverKONOSUBA02 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA02';
import PDFViewverKONOSUBA03 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA03';
import PDFViewverKONOSUBA04 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA04';
import PDFViewverKONOSUBA05 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA05';
import PDFViewverKONOSUBA06 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA06';
import PDFViewverKONOSUBA07 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA07';
import PDFViewverKONOSUBA08 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA08';
import PDFViewverKONOSUBA09 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA09';
import PDFViewverKONOSUBA10 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA10';
import PDFViewverKONOSUBA11 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA11';
import PDFViewverKONOSUBA12 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA12';
import PDFViewverKONOSUBA13 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA13';
import PDFViewverKONOSUBA14 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA14';
import PDFViewverKONOSUBA15 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA15';
import PDFViewverKONOSUBA16 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA16';
import PDFViewverKONOSUBA17 from './pages/PDFViewver/KonoSuba/PDFViewverKONOSUBA17';

import LNIsekaiMaou from './pages/LightNovel/LNIsekaiMaou';
import PDFViewverISEKAIMAOU01 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU01';
import PDFViewverISEKAIMAOU02 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU02';
import PDFViewverISEKAIMAOU03 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU03';
import PDFViewverISEKAIMAOU04 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU04';
import PDFViewverISEKAIMAOU05 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU05';
import PDFViewverISEKAIMAOU06 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU06';
import PDFViewverISEKAIMAOU07 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU07';
import PDFViewverISEKAIMAOU08 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU08';
import PDFViewverISEKAIMAOU09 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU09';
import PDFViewverISEKAIMAOU10 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU10';
import PDFViewverISEKAIMAOU11 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU11';
import PDFViewverISEKAIMAOU12 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU12';
import PDFViewverISEKAIMAOU13 from './pages/PDFViewver/IsekaiMaou/PDFViewverISEKAIMAOU13';

import LNBokuWaTomodachi from './pages/LightNovel/LNBokuWaTomodachi';
import PDFViewverBWTGS01 from './pages/PDFViewver/BokuWaTomodachi/PDFViewverBWTGS01';
import PDFViewverBWTGS02 from './pages/PDFViewver/BokuWaTomodachi/PDFViewverBWTGS02';
import PDFViewverBWTGS03 from './pages/PDFViewver/BokuWaTomodachi/PDFViewverBWTGS03';
import PDFViewverBWTGS04 from './pages/PDFViewver/BokuWaTomodachi/PDFViewverBWTGS04';
import PDFViewverBWTGS05 from './pages/PDFViewver/BokuWaTomodachi/PDFViewverBWTGS05';
import PDFViewverBWTGS06 from './pages/PDFViewver/BokuWaTomodachi/PDFViewverBWTGS06';
import PDFViewverBWTGS07 from './pages/PDFViewver/BokuWaTomodachi/PDFViewverBWTGS07';
import PDFViewverBWTGS08 from './pages/PDFViewver/BokuWaTomodachi/PDFViewverBWTGS08';
import PDFViewverBWTGS09 from './pages/PDFViewver/BokuWaTomodachi/PDFViewverBWTGS09';
import PDFViewverBWTGS10 from './pages/PDFViewver/BokuWaTomodachi/PDFViewverBWTGS10';

import LNMondaiji from './pages/LightNovel/LNMondaiji';
import PDFViewverMONDAIJI01 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI01';
import PDFViewverMONDAIJI02 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI02';
import PDFViewverMONDAIJI03 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI03';
import PDFViewverMONDAIJI04 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI04';
import PDFViewverMONDAIJI05 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI05';
import PDFViewverMONDAIJI06 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI06';
import PDFViewverMONDAIJI07 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI07';
import PDFViewverMONDAIJI08 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI08';
import PDFViewverMONDAIJI09 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI09';
import PDFViewverMONDAIJI10 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI10';
import PDFViewverMONDAIJI11 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI11';
import PDFViewverMONDAIJI12 from './pages/PDFViewver/Mondaiji/PDFViewverMONDAIJI12';

import LNReZero from './pages/LightNovel/LNReZero';
import PDFViewverRZ01 from './pages/PDFViewver/ReZero/PDFViewverRZ01';
import PDFViewverRZ02 from './pages/PDFViewver/ReZero/PDFViewverRZ02';
import PDFViewverRZ03 from './pages/PDFViewver/ReZero/PDFViewverRZ03';
import PDFViewverRZ04 from './pages/PDFViewver/ReZero/PDFViewverRZ04';
import PDFViewverRZ05 from './pages/PDFViewver/ReZero/PDFViewverRZ05';
import PDFViewverRZ06 from './pages/PDFViewver/ReZero/PDFViewverRZ06';
import PDFViewverRZ07 from './pages/PDFViewver/ReZero/PDFViewverRZ07';
import PDFViewverRZ08 from './pages/PDFViewver/ReZero/PDFViewverRZ08';
import PDFViewverRZ09 from './pages/PDFViewver/ReZero/PDFViewverRZ09';
import PDFViewverRZ10 from './pages/PDFViewver/ReZero/PDFViewverRZ10';
import PDFViewverRZ11 from './pages/PDFViewver/ReZero/PDFViewverRZ11';
import PDFViewverRZ12 from './pages/PDFViewver/ReZero/PDFViewverRZ12';
import PDFViewverRZ13 from './pages/PDFViewver/ReZero/PDFViewverRZ13';
import PDFViewverRZ14 from './pages/PDFViewver/ReZero/PDFViewverRZ14';
import PDFViewverRZ15 from './pages/PDFViewver/ReZero/PDFViewverRZ15';

import LNBakarina from './pages/LightNovel/LNBakarina';
import PDFViewverBAKARINA01 from './pages/PDFViewver/Bakarina/PDFViewverBAKARINA01';
import PDFViewverBAKARINA02 from './pages/PDFViewver/Bakarina/PDFViewverBAKARINA02';
import PDFViewverBAKARINA03 from './pages/PDFViewver/Bakarina/PDFViewverBAKARINA03';
import PDFViewverBAKARINA04 from './pages/PDFViewver/Bakarina/PDFViewverBAKARINA04';
import PDFViewverBAKARINA05 from './pages/PDFViewver/Bakarina/PDFViewverBAKARINA05';
import PDFViewverBAKARINA06 from './pages/PDFViewver/Bakarina/PDFViewverBAKARINA06';
import PDFViewverBAKARINA07 from './pages/PDFViewver/Bakarina/PDFViewverBAKARINA07';
import PDFViewverBAKARINA08 from './pages/PDFViewver/Bakarina/PDFViewverBAKARINA08';

import LNMamasuki from './pages/LightNovel/LNMamasuki';
import PDFViewverMAMASUKI01 from './pages/PDFViewver/Mamasuki/PDFViewverMAMASUKI01';
import PDFViewverMAMASUKI02 from './pages/PDFViewver/Mamasuki/PDFViewverMAMASUKI02';
import PDFViewverMAMASUKI03 from './pages/PDFViewver/Mamasuki/PDFViewverMAMASUKI03';
import PDFViewverMAMASUKI04 from './pages/PDFViewver/Mamasuki/PDFViewverMAMASUKI04';

import LNHige from './pages/LightNovel/LNHige';
import PDFViewverHIGE01 from './pages/PDFViewver/Hige/PDFViewverHIGE01';
import PDFViewverHIGE02 from './pages/PDFViewver/Hige/PDFViewverHIGE02';
import PDFViewverHIGE03 from './pages/PDFViewver/Hige/PDFViewverHIGE03';
import PDFViewverHIGE04 from './pages/PDFViewver/Hige/PDFViewverHIGE04';

import LNHenneko from './pages/LightNovel/LNHenneko';
import PDFViewverHENNEKO01 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO01';
import PDFViewverHENNEKO02 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO02';
import PDFViewverHENNEKO03 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO03';
import PDFViewverHENNEKO04 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO04';
import PDFViewverHENNEKO05 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO05';
import PDFViewverHENNEKO06 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO06';
import PDFViewverHENNEKO07 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO07';
import PDFViewverHENNEKO08 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO08';
import PDFViewverHENNEKO09 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO09';
import PDFViewverHENNEKO10 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO10';
import PDFViewverHENNEKO11 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO11';
import PDFViewverHENNEKO12 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO12';
import PDFViewverHENNEKO13 from './pages/PDFViewver/Henneko/PDFViewverHENNEKO13';

import LNBokunosensei from './pages/LightNovel/LNBokunosensei';
import PDFViewverBOKUNOSENSEI01 from './pages/PDFViewver/Bokunosensei/PDFViewverBOKUNOSENSEI01';

import LNFmp from './pages/LightNovel/LNFmp';
import PDFViewverFMP01 from './pages/PDFViewver/Fmp/PDFViewverFMP01';
import PDFViewverFMP02 from './pages/PDFViewver/Fmp/PDFViewverFMP02';
import PDFViewverFMP03 from './pages/PDFViewver/Fmp/PDFViewverFMP03';
import PDFViewverFMP04 from './pages/PDFViewver/Fmp/PDFViewverFMP04';
import PDFViewverFMP05 from './pages/PDFViewver/Fmp/PDFViewverFMP05';
import PDFViewverFMP06 from './pages/PDFViewver/Fmp/PDFViewverFMP06';
import PDFViewverFMP07 from './pages/PDFViewver/Fmp/PDFViewverFMP07';
import PDFViewverFMP08 from './pages/PDFViewver/Fmp/PDFViewverFMP08';
import PDFViewverFMP09 from './pages/PDFViewver/Fmp/PDFViewverFMP09';
import PDFViewverFMP10 from './pages/PDFViewver/Fmp/PDFViewverFMP10';
import PDFViewverFMP11 from './pages/PDFViewver/Fmp/PDFViewverFMP11';
import PDFViewverFMP12 from './pages/PDFViewver/Fmp/PDFViewverFMP12';

import LNElfsan from './pages/LightNovel/LNElfsan';
import PDFViewverELFSAN01 from './pages/PDFViewver/Elfsan/PDFViewverELFSAN01';
import PDFViewverELFSAN02 from './pages/PDFViewver/Elfsan/PDFViewverELFSAN02';
import PDFViewverELFSAN03 from './pages/PDFViewver/Elfsan/PDFViewverELFSAN03';
import PDFViewverELFSAN04 from './pages/PDFViewver/Elfsan/PDFViewverELFSAN04';
import PDFViewverELFSAN05 from './pages/PDFViewver/Elfsan/PDFViewverELFSAN05';
import PDFViewverELFSAN06 from './pages/PDFViewver/Elfsan/PDFViewverELFSAN06';

import LNBokusensei from './pages/LightNovel/LNBokusensei';
import PDFViewverBOKUSENSEI01 from './pages/PDFViewver/Bokusensei/PDFViewverBOKUSENSEI01';
import PDFViewverBOKUSENSEI02 from './pages/PDFViewver/Bokusensei/PDFViewverBOKUSENSEI02';
import PDFViewverBOKUSENSEI03 from './pages/PDFViewver/Bokusensei/PDFViewverBOKUSENSEI03';
import PDFViewverBOKUSENSEI04 from './pages/PDFViewver/Bokusensei/PDFViewverBOKUSENSEI04';
import PDFViewverBOKUSENSEI05 from './pages/PDFViewver/Bokusensei/PDFViewverBOKUSENSEI05';
import PDFViewverBOKUSENSEI06 from './pages/PDFViewver/Bokusensei/PDFViewverBOKUSENSEI06';
import PDFViewverBOKUSENSEI07 from './pages/PDFViewver/Bokusensei/PDFViewverBOKUSENSEI07';

import LNOverlord from './pages/LightNovel/LNOverlord';
import PDFViewverOVERLORD01 from './pages/PDFViewver/Overlord/PDFViewverOVERLORD01';
import PDFViewverOVERLORD02 from './pages/PDFViewver/Overlord/PDFViewverOVERLORD02';
import PDFViewverOVERLORD03 from './pages/PDFViewver/Overlord/PDFViewverOVERLORD03';
import PDFViewverOVERLORD04 from './pages/PDFViewver/Overlord/PDFViewverOVERLORD04';
import PDFViewverOVERLORD05 from './pages/PDFViewver/Overlord/PDFViewverOVERLORD05';
import PDFViewverOVERLORD06 from './pages/PDFViewver/Overlord/PDFViewverOVERLORD06';
import PDFViewverOVERLORD07 from './pages/PDFViewver/Overlord/PDFViewverOVERLORD07';
import PDFViewverOVERLORD08 from './pages/PDFViewver/Overlord/PDFViewverOVERLORD08';
import PDFViewverOVERLORD09 from './pages/PDFViewver/Overlord/PDFViewverOVERLORD09';
import PDFViewverOVERLORD10 from './pages/PDFViewver/Overlord/PDFViewverOVERLORD10';
import PDFViewverOVERLORD11 from './pages/PDFViewver/Overlord/PDFViewverOVERLORD11';

import LNElaina from './pages/LightNovel/LNElaina';
import PDFViewverELAINA01 from './pages/PDFViewver/Elaina/PDFViewverELAINA01';
import PDFViewverELAINA02 from './pages/PDFViewver/Elaina/PDFViewverELAINA02';
import PDFViewverELAINA03 from './pages/PDFViewver/Elaina/PDFViewverELAINA03';
import PDFViewverELAINA04 from './pages/PDFViewver/Elaina/PDFViewverELAINA04';

import LNKuma from './pages/LightNovel/LNKuma';
import PDFViewverKUMA01 from './pages/PDFViewver/Kuma/PDFViewverKUMA01';
import PDFViewverKUMA02 from './pages/PDFViewver/Kuma/PDFViewverKUMA02';

import LN300 from './pages/LightNovel/LN300';
import PDFViewver30001 from './pages/PDFViewver/300/PDFViewver30001';
import PDFViewver30002 from './pages/PDFViewver/300/PDFViewver30002';
import PDFViewver30003 from './pages/PDFViewver/300/PDFViewver30003';
import PDFViewver30004 from './pages/PDFViewver/300/PDFViewver30004';
import PDFViewver30005 from './pages/PDFViewver/300/PDFViewver30005';

import LNSombras from './pages/LightNovel/LNSombras';
import PDFViewverSOMBRAS01 from './pages/PDFViewver/Sombras/PDFViewverSOMBRAS01';
import PDFViewverSOMBRAS02 from './pages/PDFViewver/Sombras/PDFViewverSOMBRAS02';
import PDFViewverSOMBRAS03 from './pages/PDFViewver/Sombras/PDFViewverSOMBRAS03';
import PDFViewverSOMBRAS04 from './pages/PDFViewver/Sombras/PDFViewverSOMBRAS04';

// START SPIN OFF NOVELS //

import SOKonosubaBakuen from './pages/SpinOff/SOKonosubaBakuen';
import PDFViewverBAKUEN01 from './pages/PDFViewver/Bakuen/PDFViewverBAKUEN01';
import PDFViewverBAKUEN02 from './pages/PDFViewver/Bakuen/PDFViewverBAKUEN02';
import PDFViewverBAKUEN03 from './pages/PDFViewver/Bakuen/PDFViewverBAKUEN03';
import SOKonosubaBakuenZukko from './pages/SpinOff/SOKonosubaBakuenZukko';
import PDFViewverBAKUENZUKKO01 from './pages/PDFViewver/BakuenZukko/PDFViewverBAKUENZUKKO01';
import PDFViewverBAKUENZUKKO02 from './pages/PDFViewver/BakuenZukko/PDFViewverBAKUENZUKKO02';
import SOKonosubaKamen from './pages/SpinOff/SOKonosubaKamen';
import PDFViewverKAMEN01 from './pages/PDFViewver/Kamen/PDFViewverKAMEN01';
import SOKonosubaKyakko from './pages/SpinOff/SOKonosubaKyakko';
import PDFViewverKYAKKO01 from './pages/PDFViewver/Kyakko/PDFViewverKYAKKO01';
import PDFViewverKYAKKO02 from './pages/PDFViewver/Kyakko/PDFViewverKYAKKO02';
import PDFViewverKYAKKO03 from './pages/PDFViewver/Kyakko/PDFViewverKYAKKO03';
import PDFViewverKYAKKO04 from './pages/PDFViewver/Kyakko/PDFViewverKYAKKO04';
import PDFViewverKYAKKO05 from './pages/PDFViewver/Kyakko/PDFViewverKYAKKO05';
import PDFViewverKYAKKO06 from './pages/PDFViewver/Kyakko/PDFViewverKYAKKO06';

// START EROTIC NOVELS //

import ENKaiyari from './pages/ENKaiyari';
import PDFViewverKAIYARI01 from './pages/PDFViewver/KaiYari/PDFViewverKAIYARI01';
import PDFViewverKAIYARI02 from './pages/PDFViewver/KaiYari/PDFViewverKAIYARI02';
import PDFViewverKAIYARI03 from './pages/PDFViewver/KaiYari/PDFViewverKAIYARI03';
import PDFViewverKAIYARI04 from './pages/PDFViewver/KaiYari/PDFViewverKAIYARI04';
import PDFViewverKAIYARI05 from './pages/PDFViewver/KaiYari/PDFViewverKAIYARI05';
import PDFViewverKAIYARI06 from './pages/PDFViewver/KaiYari/PDFViewverKAIYARI06';
import PDFViewverKAIYARI07 from './pages/PDFViewver/KaiYari/PDFViewverKAIYARI07';
import PDFViewverKAIYARI08 from './pages/PDFViewver/KaiYari/PDFViewverKAIYARI08';

import logo from './assets/images/logo.png';

class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: 'Light Novels',
      headerLinks: [
        { title: 'Home', path: '/light-novel/' },
        { title: 'Novel List', path: '/light-novel/list/' },
        { title: 'Spin Off List', path: '/light-novel/solist/' },
        { title: 'Erotic List', path: '/light-novel/erolist/' },
        { title: 'SpinOff List', path: '/light-novel/solist/' },
        { title: 'About', path: '/light-novel/about/' },

        // START LIGHT NOVELS //
        { title: 'No Game No Life', path: '/light-novel/ngnl/' },
        { title: 'No Game No Life Volumen 01', path: '/light-novel/ngnl/01/' },
        { title: 'No Game No Life Volumen 02', path: '/light-novel/ngnl/02/' },
        { title: 'No Game No Life Volumen 03', path: '/light-novel/ngnl/03/' },
        { title: 'No Game No Life Volumen 04', path: '/light-novel/ngnl/04/' },
        { title: 'No Game No Life Volumen 05', path: '/light-novel/ngnl/05/' },
        { title: 'No Game No Life Volumen 06', path: '/light-novel/ngnl/06/' },
        { title: 'No Game No Life Volumen 07', path: '/light-novel/ngnl/07/' },
        { title: 'No Game No Life Volumen 08', path: '/light-novel/ngnl/08/' },
        { title: 'No Game No Life Volumen 09', path: '/light-novel/ngnl/09/' },
        { title: 'No Game No Life Volumen 10', path: '/light-novel/ngnl/10/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/01/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/02/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/03/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/04/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/05/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/06/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/07/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/08/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/09/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/10/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/11/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/12/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/13/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/14/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/15/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/16/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/17/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/18/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/19/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/20/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/21/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/22/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/23/' },
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/24/' },
        { title: 'Kumo Desu Ga, Nani Ka?', path: '/light-novel/kdgnk/' },
        { title: 'Kumo Desu Ga, Nani Ka? Volumen 01', path: '/light-novel/kdgnk/01/' },
        { title: 'Kumo Desu Ga, Nani Ka? Volumen 02', path: '/light-novel/kdgnk/02/' },
        { title: 'Kumo Desu Ga, Nani Ka? Volumen 03', path: '/light-novel/kdgnk/03/' },
        { title: 'Kumo Desu Ga, Nani Ka? Volumen 04', path: '/light-novel/kdgnk/04/' },
        { title: 'Kumo Desu Ga, Nani Ka? Volumen 05', path: '/light-novel/kdgnk/05/' },
        { title: 'Kumo Desu Ga, Nani Ka? Volumen 06', path: '/light-novel/kdgnk/06/' },
        { title: 'Kumo Desu Ga, Nani Ka? Volumen 07', path: '/light-novel/kdgnk/07/' },
        { title: 'Kumo Desu Ga, Nani Ka? Volumen 08', path: '/light-novel/kdgnk/08/' },
        { title: 'Kumo Desu Ga, Nani Ka? Volumen 09', path: '/light-novel/kdgnk/09/' },
        { title: 'Kumo Desu Ga, Nani Ka? Volumen 10', path: '/light-novel/kdgnk/10/' },
        { title: 'Kumo Desu Ga, Nani Ka? Volumen 11', path: '/light-novel/kdgnk/11/' },
        { title: 'Goblin Slayer', path: '/light-novel/gs/' },
        { title: 'Goblin Slayer Volumen 01', path: '/light-novel/gs/01/' },
        { title: 'Goblin Slayer Volumen 02', path: '/light-novel/gs/02/' },
        { title: 'Goblin Slayer Volumen 03', path: '/light-novel/gs/03/' },
        { title: 'Goblin Slayer Volumen 04', path: '/light-novel/gs/04/' },
        { title: 'Goblin Slayer Volumen 05', path: '/light-novel/gs/05/' },
        { title: 'Goblin Slayer Volumen 06', path: '/light-novel/gs/06/' },
        { title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai', path: '/light-novel/sby/' },
        { title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai Volumen 01', path: '/light-novel/sby/01/' },
        { title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai Volumen 02', path: '/light-novel/sby/02/' },
        { title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai Volumen 03', path: '/light-novel/sby/03/' },
        { title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai Volumen 04', path: '/light-novel/sby/04/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo!', path: '/light-novel/konosuba/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 01', path: '/light-novel/konosuba/01/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 02', path: '/light-novel/konosuba/02/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 03', path: '/light-novel/konosuba/03/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 04', path: '/light-novel/konosuba/04/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 05', path: '/light-novel/konosuba/05/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 06', path: '/light-novel/konosuba/06/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 07', path: '/light-novel/konosuba/07/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 08', path: '/light-novel/konosuba/08/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 09', path: '/light-novel/konosuba/09/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 10', path: '/light-novel/konosuba/10/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 11', path: '/light-novel/konosuba/11/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 12', path: '/light-novel/konosuba/12/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 13', path: '/light-novel/konosuba/13/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 14', path: '/light-novel/konosuba/14/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 15', path: '/light-novel/konosuba/15/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 16', path: '/light-novel/konosuba/16/' },
        { title: 'Kono Subarashii Sekai ni Shukufuku wo! Volumen 17', path: '/light-novel/konosuba/17/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu', path: '/light-novel/isekaimaou/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 01', path: '/light-novel/isekaimaou/01/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 02', path: '/light-novel/isekaimaou/02/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 03', path: '/light-novel/isekaimaou/03/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 04', path: '/light-novel/isekaimaou/04/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 05', path: '/light-novel/isekaimaou/05/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 06', path: '/light-novel/isekaimaou/06/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 07', path: '/light-novel/isekaimaou/07/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 08', path: '/light-novel/isekaimaou/08/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 09', path: '/light-novel/isekaimaou/09/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 10', path: '/light-novel/isekaimaou/10/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 11', path: '/light-novel/isekaimaou/11/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 12', path: '/light-novel/isekaimaou/12/' },
        { title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu Volumen 13', path: '/light-novel/isekaimaou/13/' },
        { title: 'Boku wa Tomodachi ga Sukunai', path: '/light-novel/bwtgs/' },
        { title: 'Boku wa Tomodachi ga Sukunai Volumen 01', path: '/light-novel/bwtgs/01/' },
        { title: 'Boku wa Tomodachi ga Sukunai Volumen 02', path: '/light-novel/bwtgs/02/' },
        { title: 'Boku wa Tomodachi ga Sukunai Volumen 03', path: '/light-novel/bwtgs/03/' },
        { title: 'Boku wa Tomodachi ga Sukunai Volumen 04', path: '/light-novel/bwtgs/04/' },
        { title: 'Boku wa Tomodachi ga Sukunai Volumen 05', path: '/light-novel/bwtgs/05/' },
        { title: 'Boku wa Tomodachi ga Sukunai Volumen 06', path: '/light-novel/bwtgs/06/' },
        { title: 'Boku wa Tomodachi ga Sukunai Volumen 07', path: '/light-novel/bwtgs/07/' },
        { title: 'Boku wa Tomodachi ga Sukunai Volumen 08', path: '/light-novel/bwtgs/08/' },
        { title: 'Boku wa Tomodachi ga Sukunai Volumen 09', path: '/light-novel/bwtgs/09/' },
        { title: 'Boku wa Tomodachi ga Sukunai Volumen 10', path: '/light-novel/bwtgs/10/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo?', path: '/light-novel/gs/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 01', path: '/light-novel/mondaiji/01/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 02', path: '/light-novel/mondaiji/02/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 03', path: '/light-novel/mondaiji/03/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 04', path: '/light-novel/mondaiji/04/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 05', path: '/light-novel/mondaiji/05/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 06', path: '/light-novel/mondaiji/06/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 07', path: '/light-novel/mondaiji/07/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 08', path: '/light-novel/mondaiji/08/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 09', path: '/light-novel/mondaiji/09/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 10', path: '/light-novel/mondaiji/10/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 11', path: '/light-novel/mondaiji/11/' },
        { title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo? Volumen 12', path: '/light-novel/mondaiji/12/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu', path: '/light-novel/rz/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 01', path: '/light-novel/rz/01/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 02', path: '/light-novel/rz/02/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 03', path: '/light-novel/rz/03/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 04', path: '/light-novel/rz/04/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 05', path: '/light-novel/rz/05/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 06', path: '/light-novel/rz/06/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 07', path: '/light-novel/rz/07/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 08', path: '/light-novel/rz/08/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 09', path: '/light-novel/rz/09/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 10', path: '/light-novel/rz/10/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 11', path: '/light-novel/rz/11/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 12', path: '/light-novel/rz/12/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 13', path: '/light-novel/rz/13/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 14', path: '/light-novel/rz/14/' },
        { title: 'Re:Zero kara Hajimeru Isekai Seikatsu Volumen 15', path: '/light-novel/rz/15/' },
        { title: 'Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta...', path: '/light-novel/bakarina/' },
        { title: 'Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... Volumen 01', path: '/light-novel/bakarina/01/' },
        { title: 'Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... Volumen 02', path: '/light-novel/bakarina/02/' },
        { title: 'Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... Volumen 03', path: '/light-novel/bakarina/03/' },
        { title: 'Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... Volumen 04', path: '/light-novel/bakarina/04/' },
        { title: 'Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... Volumen 05', path: '/light-novel/bakarina/05/' },
        { title: 'Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... Volumen 06', path: '/light-novel/bakarina/06/' },
        { title: 'Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... Volumen 07', path: '/light-novel/bakarina/07/' },
        { title: 'Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta... Volumen 08', path: '/light-novel/bakarina/08/' },
        { title: 'Musume Janakute Mama ga Suki nano!?', path: '/light-novel/mamasuki/' },
        { title: 'Musume Janakute Mama ga Suki nano!? Volumen 01', path: '/light-novel/mamasuki/01/' },
        { title: 'Musume Janakute Mama ga Suki nano!? Volumen 02', path: '/light-novel/mamasuki/02/' },
        { title: 'Musume Janakute Mama ga Suki nano!? Volumen 03', path: '/light-novel/mamasuki/03/' },
        { title: 'Musume Janakute Mama ga Suki nano!? Volumen 04', path: '/light-novel/mamasuki/04/' },
        { title: 'Hige wo Soru. Soshite Joshi Kōsei wo Hirou', path: '/light-novel/hige/' },
        { title: 'Hige wo Soru. Soshite Joshi Kōsei wo Hirou Volumen 01', path: '/light-novel/hige/01/' },
        { title: 'Hige wo Soru. Soshite Joshi Kōsei wo Hirou Volumen 02', path: '/light-novel/hige/02/' },
        { title: 'Hige wo Soru. Soshite Joshi Kōsei wo Hirou Volumen 03', path: '/light-novel/hige/03/' },
        { title: 'Hige wo Soru. Soshite Joshi Kōsei wo Hirou Volumen 04', path: '/light-novel/hige/04/' },
        { title: 'Hentai Ouji to Warawanai Neko', path: '/light-novel/henneko/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 01', path: '/light-novel/henneko/01/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 02', path: '/light-novel/henneko/02/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 03', path: '/light-novel/henneko/03/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 04', path: '/light-novel/henneko/04/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 05', path: '/light-novel/henneko/05/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 06', path: '/light-novel/henneko/06/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 07', path: '/light-novel/henneko/07/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 08', path: '/light-novel/henneko/08/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 09', path: '/light-novel/henneko/09/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 10', path: '/light-novel/henneko/10/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 11', path: '/light-novel/henneko/11/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 12', path: '/light-novel/henneko/12/' },
        { title: 'Hentai Ouji to Warawanai Neko Volumen 13', path: '/light-novel/henneko/13/' },
        { title: 'Boku no Sensei wa, Houkago Kawaii Konyakusha', path: '/light-novel/bokunosensei/' },
        { title: 'Boku no Sensei wa, Houkago Kawaii Konyakusha Volumen 01', path: '/light-novel/bokunosensei/01/' },
        { title: 'Full Metal Panic!', path: '/light-novel/fmp/' },
        { title: 'Full Metal Panic! Volumen 01', path: '/light-novel/fmp/01/' },
        { title: 'Full Metal Panic! Volumen 02', path: '/light-novel/fmp/02/' },
        { title: 'Full Metal Panic! Volumen 03', path: '/light-novel/fmp/03/' },
        { title: 'Full Metal Panic! Volumen 04', path: '/light-novel/fmp/04/' },
        { title: 'Full Metal Panic! Volumen 05', path: '/light-novel/fmp/05/' },
        { title: 'Full Metal Panic! Volumen 06', path: '/light-novel/fmp/06/' },
        { title: 'Full Metal Panic! Volumen 07', path: '/light-novel/fmp/07/' },
        { title: 'Full Metal Panic! Volumen 08', path: '/light-novel/fmp/08/' },
        { title: 'Full Metal Panic! Volumen 09', path: '/light-novel/fmp/09/' },
        { title: 'Full Metal Panic! Volumen 10', path: '/light-novel/fmp/10/' },
        { title: 'Full Metal Panic! Volumen 11', path: '/light-novel/fmp/11/' },
        { title: 'Full Metal Panic! Volumen 12', path: '/light-novel/fmp/12/' },
        { title: 'Nihon e Youkoso Elf-san', path: '/light-novel/elfsan/' },
        { title: 'Nihon e Youkoso Elf-san Volumen 01', path: '/light-novel/elfsan/01/' },
        { title: 'Nihon e Youkoso Elf-san Volumen 02', path: '/light-novel/elfsan/02/' },
        { title: 'Nihon e Youkoso Elf-san Volumen 03', path: '/light-novel/elfsan/03/' },
        { title: 'Nihon e Youkoso Elf-san Volumen 04', path: '/light-novel/elfsan/04/' },
        { title: 'Nihon e Youkoso Elf-san Volumen 05', path: '/light-novel/elfsan/05/' },
        { title: 'Nihon e Youkoso Elf-san Volumen 06', path: '/light-novel/elfsan/06/' },
        { title: 'Boku no Kanojo Sensei', path: '/light-novel/bokusensei/' },
        { title: 'Boku no Kanojo Sensei Volumen 01', path: '/light-novel/bokusensei/01/' },
        { title: 'Boku no Kanojo Sensei Volumen 02', path: '/light-novel/bokusensei/02/' },
        { title: 'Boku no Kanojo Sensei Volumen 03', path: '/light-novel/bokusensei/03/' },
        { title: 'Boku no Kanojo Sensei Volumen 04', path: '/light-novel/bokusensei/04/' },
        { title: 'Boku no Kanojo Sensei Volumen 05', path: '/light-novel/bokusensei/05/' },
        { title: 'Boku no Kanojo Sensei Volumen 06', path: '/light-novel/bokusensei/06/' },
        { title: 'Boku no Kanojo Sensei Volumen 07', path: '/light-novel/bokusensei/07/' },
        { title: 'Overlord', path: '/light-novel/overlord/' },
        { title: 'Overlord Volumen 01', path: '/light-novel/overlord/01/' },
        { title: 'Overlord Volumen 02', path: '/light-novel/overlord/02/' },
        { title: 'Overlord Volumen 03', path: '/light-novel/overlord/03/' },
        { title: 'Overlord Volumen 04', path: '/light-novel/overlord/04/' },
        { title: 'Overlord Volumen 05', path: '/light-novel/overlord/05/' },
        { title: 'Overlord Volumen 06', path: '/light-novel/overlord/06/' },
        { title: 'Overlord Volumen 07', path: '/light-novel/overlord/07/' },
        { title: 'Overlord Volumen 08', path: '/light-novel/overlord/08/' },
        { title: 'Overlord Volumen 09', path: '/light-novel/overlord/09/' },
        { title: 'Overlord Volumen 10', path: '/light-novel/overlord/10/' },
        { title: 'Overlord Volumen 11', path: '/light-novel/overlord/11/' },
        { title: 'Majo no Tabitabi', path: '/light-novel/elaina/' },
        { title: 'Majo no Tabitabi Volumen 01', path: '/light-novel/elaina/01/' },
        { title: 'Majo no Tabitabi Volumen 02', path: '/light-novel/elaina/02/' },
        { title: 'Majo no Tabitabi Volumen 03', path: '/light-novel/elaina/03/' },
        { title: 'Majo no Tabitabi Volumen 04', path: '/light-novel/elaina/04/' },
        { title: 'Kuma Kuma Kuma Bear', path: '/light-novel/kumakuma/' },
        { title: 'Kuma Kuma Kuma Bear Volumen 01', path: '/light-novel/kumakuma/01/' },
        { title: 'Kuma Kuma Kuma Bear Volumen 02', path: '/light-novel/kumakuma/02/' },
        { title: 'Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita', path: '/light-novel/300/' },
        { title: 'Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita Volumen 01', path: '/light-novel/300/01/' },
        { title: 'Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita Volumen 02', path: '/light-novel/300/02/' },
        { title: 'Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita Volumen 03', path: '/light-novel/300/03/' },
        { title: 'Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita Volumen 04', path: '/light-novel/300/04/' },
        { title: 'Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita Volumen 05', path: '/light-novel/300/05/' },
        { title: 'Kage no Jitsuryokusha ni Naritakute! Volumen 01', path: '/light-novel/sombras/01/' },
        { title: 'Kage no Jitsuryokusha ni Naritakute! Volumen 02', path: '/light-novel/sombras/02/' },
        { title: 'Kage no Jitsuryokusha ni Naritakute! Volumen 03', path: '/light-novel/sombras/03/' },
        { title: 'Kage no Jitsuryokusha ni Naritakute! Volumen 04', path: '/light-novel/sombras/04/' },

        // START SPIN OFF NOVELS //

        { title: 'Kono Subarashii Sekai ni Bakuen wo!', path: '/light-novel/bakuen/' },
        { title: 'Kono Subarashii Sekai ni Bakuen wo! Volumen 01', path: '/light-novel/bakuen/01/' },
        { title: 'Kono Subarashii Sekai ni Bakuen wo! Volumen 02', path: '/light-novel/bakuen/02/' },
        { title: 'Kono Subarashii Sekai ni Bakuen wo! Volumen 03', path: '/light-novel/bakuen/03/' },
        { title: 'Kono Subarashii Sekai ni Bakuen wo!', path: '/light-novel/bakuenzukko/' },
        { title: 'Kono Subarashii Sekai ni Bakuen wo! Zukko Volumen 01', path: '/light-novel/bakuenzukko/01/' },
        { title: 'Kono Subarashii Sekai ni Bakuen wo! Zukko Volumen 02', path: '/light-novel/bakuenzukko/02/' },
        { title: 'Kono Kamen no Akuma ni Soudan wo!', path: '/light-novel/kamen/' },
        { title: 'Kono Kamen no Akuma ni Soudan wo! Volumen 01', path: '/light-novel/kamen/01/' },
        { title: 'Ano Orokamono ni mo Kyakkou wo!', path: '/light-novel/kyakko/' },
        { title: 'Ano Orokamono ni mo Kyakkou wo! Volumen 01', path: '/light-novel/kyakko/01/' },
        { title: 'Ano Orokamono ni mo Kyakkou wo! Volumen 02', path: '/light-novel/kyakko/02/' },
        { title: 'Ano Orokamono ni mo Kyakkou wo! Volumen 03', path: '/light-novel/kyakko/03/' },
        { title: 'Ano Orokamono ni mo Kyakkou wo! Volumen 04', path: '/light-novel/kyakko/04/' },
        { title: 'Ano Orokamono ni mo Kyakkou wo! Volumen 05', path: '/light-novel/kyakko/05/' },
        { title: 'Ano Orokamono ni mo Kyakkou wo! Volumen 06', path: '/light-novel/kyakko/06/' },

        // START EROTIC NOVELS //

        { title: 'Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahou to Skill Copy no Chouetsu Heal', path: '/light-novel/kaiyari/' },
        { title: 'Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahou to Skill Copy no Chouetsu Heal Volumen 01', path: '/light-novel/kaiyari/01/' },
        { title: 'Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahou to Skill Copy no Chouetsu Heal Volumen 02', path: '/light-novel/kaiyari/02/' },
        { title: 'Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahou to Skill Copy no Chouetsu Heal Volumen 03', path: '/light-novel/kaiyari/03/' },
        { title: 'Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahou to Skill Copy no Chouetsu Heal Volumen 04', path: '/light-novel/kaiyari/04/' },
        { title: 'Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahou to Skill Copy no Chouetsu Heal Volumen 05', path: '/light-novel/kaiyari/05/' },
        { title: 'Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahou to Skill Copy no Chouetsu Heal Volumen 06', path: '/light-novel/kaiyari/06/' },
        { title: 'Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahou to Skill Copy no Chouetsu Heal Volumen 07', path: '/light-novel/kaiyari/07/' },
        { title: 'Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahou to Skill Copy no Chouetsu Heal Volumen 08', path: '/light-novel/kaiyari/08/' },
      ],
      home: {
        title: 'Bienvenido',
        subTitle: "Buscar",
        text: "Mi nombre es Danny Vega y este es un pequeño proyecto que estoy realizando como hobby titulado LIGHT NOVELS, en el cual realizo respaldos en la nube de algunas Novelas Ligeras que son de mi agrado (algunas algun dia las leeré, algunas ya las terminé de leer, algunas otras no jaja), estos archivos pueden descargarlos desde Mega y/o GoogleDrive (sin acortadores ni nada por el estilo porque la verdad es algo molesto pasar tanto ad.fly) y de la misma manera para su comodidad en caso de que no sean de descargar archivos se los dejare para lectura en linea. Asi que a distrutar~!"
      },
      list: {
        title: "Novelas Ligeras",
      },
      erolist: {
        title: "Novelas Eróticas",
      },
      solist: {
        title: "Spin Off",
      },

      // START LIGHT NOVELS //
      
      lnngnl: {
        title: 'No Game No Life',
        subTitle: "Volúmenes: 10 de 10",
        text: "Los hermanos Sora y Shiro son un par de NEETs (ninis por sus siglas en inglés), definidos como hikikomori, quienes juntos forman a 'espacio en blanco', llamados así porque su nombre de usuario está en blanco. Entre los dos tienen 4 jugadores y en el primer capítulo, sin hacer trampas, logran vencer a 1200 jugadores ellos solos. Son considerados una leyenda urbana. Ambos coinciden en que el mundo real es como un juego basura. Un día reciben un e-mail de un desconocido que dice algo así como: '¿Alguna vez los hermanos se han preguntado si no son de este mundo?. En ese momento solo se preguntan el cómo sabe que son hermanos ya que nunca lo han dicho. Junto al mensaje hay un enlace, Sora decide darle al enlace que hay adjunto con el e-mail y les lleva a un juego de ajedrez. Shiro, a pesar de tener 11 años es una genio y se sabe todos los estados posibles del tablero. Con muchos esfuerzos y la ayuda de su hermano, consiguen vencerle. Luego les envía otro e-mail diciendo: 'Si hubiera un mundo donde todo se resuelve con juegos... un mundo en un tablero, donde las reglas y el objetivo estuvieran claros ¿Qué pensarían de eso?', y en ese momento, Sora responde: 'Si existe un mundo así, entonces, nosotros claramente hemos nacido en un mundo equivocado' En ese momento todo se apaga y se encuentran cayendo en picado. Un niño aparece con ellos y comienza a explicarles los 10 mandamientos del extraño mundo y les dice que se llama Tet, que es el único dios, y que ese mundo se llama Disboard. En Disboard hay 16 clases Exceed (la posición que ocupa cada una de las razas), en la que los humanos somos la última por no poder utilizar la magia."
      },
      lnmushoku: {
        title: 'Mushoku Tensei: Isekai Ittara Honki Dasu',
        subTitle: "Volúmenes: 24 de 24",
        text: "Un Otaku de 34 años de edad es expulsado de su casa por su familia por ser un 'nini'. Poco atractivo y sin dinero, descubre que llegó a un callejón sin salida, es ahí cuando se lamenta de no haberse esforzado mucho más. Arrepintiéndose de todos sus errores, de los que siempre estuvo escapando, piensa que su vida hubiera sido mucho mejor de haber tomado mejores decisiones en el pasado. Justo cuando estaba a punto de rendirse, vio un camión que circulaba a gran velocidad hacia tres estudiantes de secundaria en su camino. Reuniendo toda la fuerza que tenía, trató de salvarlos pero terminó siendo atropellado por el camión, perdiendo la vida. Al abrir sus ojos descubrió que había reencarnado en un mundo de espadas y magia, llamado ahora Rudeus Greyrat. Nacido en un mundo nuevo, con una vida nueva, Rudeus decide que ¡Esta vez, realmente viviré mi vida al máximo sin ningún arrepentimiento! Así, comienza el viaje de un hombre anhelando reiniciar su vida."
      },
      lnkdgnk: {
        title: 'Kumo Desu Ga, Nani Ka?',
        subTitle: "Volúmenes: 11 de 14",
        text: "La historia comienza con la protagonista una estudiante de preparatoria, hasta que una misteriosa explosión asesina a su clase entera y estos reencarnan en un mundo de fantasía. Mientras que algunos reencarnaron como príncipes o prodigios, otros no fueron tan afortunados. Nuestra heroína, quien era la más antisocial del grupo, descubre que reencarno como una araña. Ahora al fondo de la cadena alimenticia, para sobrevivir necesitara adaptarse a esta nueva situación con pura fuerza de voluntad mientras esta atrapada en un laberinto lleno de monstruos, ¡Es comer o ser comido! Esta es la historia de una araña haciendo todo lo posible para sobrevivir."
      },
      lngs: {
        title: 'Goblin Slayer',
        subTitle: "Volúmenes: 06 de 14",
        text: "En un mundo de fantasía, los aventureros de todas partes se unen al Gremio, a fin de completar contratos de cualquier trabajo disponible que incluya la caza de diversos tipos de monstruos que vagan por la tierra u otro tipo de misión que sea ofrecida. Una sacerdotisa inexperta junto a un grupo de novatos forman su primer grupo de aventuras, aceptando un contrato para destruir un nido de goblins, sin embargo la falta de experiencia y exceso de confianza de los integrantes les juega una mala pasada y el resto de su grupo es eliminado. Sorpresivamente, ella es salvada por un hombre conocido como Goblin Slayer, un aventurero cuyo único propósito es la erradicación de los goblins con una dedicación extrema."
      },
      lnsby: {
        title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai',
        subTitle: "Volúmenes: 03 de 11",
        text: "La vida de Sakuta Azusagawa da un giro inesperado cuando conoce a la actriz adolescente Mai Sakurajima, quien se pasea por una biblioteca vestida como una conejita. Mai está intrigada de que Sakuta sea el único que puede verla, ya que otras personas no pueden, incluso cuando se viste normalmente o intenta mantenerse alejada de la vida de las celebridades. Llamando a este fenómeno 'Síndrome de la Pubertad', Sakuta decide resolver este misterio, mientras continúa acercándose a Mai y conoce a otras chicas que también sufren el 'Síndrome de la Pubertad'."
      },
      lnkonosuba: {
        title: 'Kono Subarashii Sekai ni Shukufuku wo',
        subTitle: "Volúmenes: 17 de 17",
        text: "Kazuma Satou es un hikikomori que vive en un sector rural de Japón. Un día, decidido ir a comprar lo antes posible un videojuego, sale de casa y de regreso observa a una chica que sería atropellada por un camión y hace lo impensable para él, salvándola, y muriendo de forma heroica. O eso creía, puesto que realmente no fue atropellado y murió de un susto al pensar que lo había atropellado un camión, el cual ni siquiera era un camión y solo era un lento tractor que pasaba saludando a la joven que tampoco necesitaba ayuda, y solo la empujó violentamente. Su muerte fue tan patética que incluso los médicos que lo revisaron se burlaron de él, su familia también lo hizo, y todo en cuánto supo de su muerte se rio. Mágicamente, despierta en un salón increíble y desconocido, en el que encuentra a una hermosa diosa llamada Aqua, que le ofrece, luego de burlarse de su ridícula muerte, darle una nueva vida en un universo paralelo y de fantasía, en el que tendrá aventuras increíbles, enfrentará monstruos terribles, aprenderá poderosas magias, y deberá derrotar a un rey demonio que es el gobernante de ese mundo, alzándose como el héroe entre héroes, por lo cual le brindará un arma, habilidad u objeto (incluso ser) que lo ayude en su aventura."
      },
      lnisekaimou: {
        title: 'Isekai Maou to Shoukan Shoujo no Dorei Majutsu',
        subTitle: "Volúmenes: 13 de 14",
        text: "En el MMORPG Cross Reverie, Takuma Sakamoto es tan poderoso que es llamado 'Diablo', una especie de 'Supremo demonio' por los otros jugadores. Un día es invocado a un mundo paralelo, pero llega a éste con la misma apariencia que tenía en la última actuación suya en el juego. Ya allí conoce a dos chicas que se proclaman a sí mismas como sus Invocadoras, y como forma de asegurarse su fidelidad, tratan de realizar un ritual de esclavitud para convertirlo en su familiar, pero cuando la habilidad pasiva de Takuma ('Reflexión mágica') se activa, son las chicas las que quedan esclavizadas. Aunque Takuma puede ser el hechicero más fuerte que existe, no tiene idea de cómo interactuar y/o relacionarse con otras personas. Es aquí donde él hace su elección: actuar basándose en la personalidad de su rol en el juego."
      },
      lnbwtgs: {
        title: 'Boku wa Tomodachi ga Sukunai',
        subTitle: "Volúmenes: 10 de 11",
        text: "En la escuela católica de Santa Crónica, Kodaka Hasegawa es un amable chico que lleva sólo un mes en el colegio y que no ha tenido mucha suerte haciendo amigos debido a su apariencia de delincuente, la cual incluye cabello rubio natural y ojos fieros; rasgos que heredó de su padre japonés y de su difunta madre inglesa. Un día, se encuentra a una compañera de clase, llamada Yozora, hablando sola. Ella es famosa en la escuela por ser hermosa y lista, pero asocial. Yozora le explica que habla con su amiga imaginaria ya que siempre ha tenido dificultad para sociabilizar. Varios días después le revela a Kodaka que gracias a su charla se inspiró para crear un club después de la escuela con el único propósito de hacer amigos en el cual es obligado a ingresar en contra su voluntad, y así, el 'Club de los vecinos' es creado oficialmente. Otros cinco miembros se unen pronto al club, comenzando con la ídolo de la escuela, Sena Kashiwazaki, quien tiene un montón de admiradores masculinos, pero ninguna amiga. La hermana menor de Kodaka, Kobato, quien está en la división de la escuela media de Santa Crónica y es una fan del anime oscuro. Kusunoki Yukimura es un estudiante de un año inferior a Kodaka, quien trata de convertirse en un hombre varonil a pesar de ser en realidad una chica. Maria Takayama, una maestra de 10 años de edad y monja en la academia que se convierte en la consejera del club. Rika Shiguma una estudiante de año inferior y un genio reconocido, aunque tiene un lado extremadamente pervertido."
      },
      lnmondaiji: {
        title: 'Mondaiji-tachi ga Isekai Kara Kuru Sō Desu yo?',
        subTitle: "Volúmenes: 12 de 12",
        text: "Sakamaki Izayoi, Asuka Kudo, y You Kasukabe tienen enormes poderes que los hacen personas diferentes a las demás. Todos ellos se encuentran aburridos del mundo en el que viven. Un día cualquiera, cada uno de ellos encuentran una carta que va dirigida hacia ellos, al momento en que la abren son mandados al Pequeño Mundo, un sitio donde sus poderes no son sobrenaturales. Se dan cuenta de que fueron convocados por Coneja Negra que es una habitante de ese mundo y ella quiere que los tres la ayuden a una comunidad que fue destruida y fue obligada a llevar el nombre de 'No Names' y a partir de esto comienzan sus múltiples aventuras y deciden derrocar a todos los Reyes Demonio."
      },
      lnrz: {
        title: 'Re:Zero kara Hajimeru Isekai Seikatsu',
        subTitle: "Volúmenes: 15 de 26",
        text: "Subaru Natsuki es un hikikomori que saliendo de una tienda de conveniencia es transportado misteriosamente a un reino de otro mundo, en donde lo primero que le ocurre es encontrarse con unos bandidos, sin embargo, él es rescatado por una hermosa chica medio-elfo de cabello plateado, llamada 'Satella' y como pago decide ayudarla con un problema que ignoró por ayudarle. Sin embargo, pronto la chica muere y el mismo Subaru es herido mortalmente cuando le dice: 'Te prometo que te salvaré', entonces el chico muere pero de pronto el tiempo se rebobina y se encuentra en el mismo punto en el que comenzó, lo que nombra 'Retorno de la Muerte'. Sin embargo, al reencontrarse con 'Satella' ella le reclama no llamarla como la Bruja de los Celos, por lo que allí es cuando, Subaru vuelve a querer ayudarla, pero confundido termina haciendo todo por su cuenta intentando salvar a la chica de su atacante, ¿Quien es 'Satella'? ¿Por qué Subaru fue transportado a ese mundo? ¿Por qué solo el recuerda lo ocurrido en bucles anteriores? Él mismo tendrá que volver una y otra vez de la muerte para descubrirlo y además salvar a los que quiere con el poder otorgado por la Bruja que quiere mantener sus retornos como un secreto entre ambos."
      },
      lnbakarina: {
        title: 'Otome Game no Hametsu Flag Shika Nai Akuyaku Reijō ni Tensei Shiteshimatta',
        subTitle: "Volúmenes: 08 de 09",
        text: "La única hija del duque Claes, Catarina, era orgullosa y egoísta porque fue malcriada por sus padres. Sin embargo, a la edad de ocho años, su padre la llevó al castillo real donde ella golpea su cabeza contra una piedra al tropezarse. Después de esto, logra recuperar los recuerdos de su vida anterior como una joven otaku de Japón que perdió la vida en un accidente de tráfico. Este mundo le parece familiar, por lo que se da cuenta de que es el del juego otome, Fortune Lover, que ella misma jugó antes de su accidente y que en realidad, reencarnó como la rival de la heroína y antagonista del juego. También recuerda que todo lo que le esperaba a Catarina al final del juego era el camino a la destrucción que termina en su exilio lejos del reino o su ejecución. Por lo tanto, Catarina dedicará todos sus esfuerzos a evitar un final destructivo para pasar una vejez pacífica."
      },
      lnmamasuki: {
        title: 'Musume Janakute Mama ga Suki nano!?',
        subTitle: "Volúmenes: 04 de 05",
        text: "Soy Ayako Katsuragi, tengo 30 años. Han pasado 10 años desde que acogí a la hija de mi hermana fallecida. Mi hija se ha convertido en una estudiante de preparatoria y se lleva muy bien con su amigo de la infancia, Takumi Aterazawa. ¿Tal vez comiencen a salir? Ta-kun es un chico muy agradable y estoy a favor de ello. ¿Eh? ¿'Por favor, dame a tu hija' es lo que quiere decirme? Oh, Dios, eres tan correcto— 'Ayako-san. He estado enamorado de ti desde hace mucho tiempo. Por favor, sal conmigo.'…¡¿No estás enamorado de mi hija, sino de mí?!' Una mujer que crió a la hija de su hermana y un chico que estaba enamorado de ella. ¡Este es el comienzo de una comedia romántica de amor súper puro en el que estallan sentimientos de muchos años!"
      },
      lnhige: {
        title: 'Hige wo Soru. Soshite Joshi Kōsei wo Hirou',
        subTitle: "Volúmenes: 04 de 05",
        text: "La historia comienza con Yoshida, un empleado de oficina masculino de 26 años especializado en tecnología de la información, quien fue rechazado por su colega Airi Gotou, que siempre quiso durante 5 años. A pesar de conseguir tener una cita con ella, su confesión es rechazada por esta. Deprimido y borracho, Yoshida vio a Sayu Ogiwara , una joshi kōsei errante (JK, chica de secundaria) sentada frente a su puerta. Sayu había estado fuera de casa durante 6 meses y decidió tener relaciones sexuales con varios hombres para quedarse en su casa. Sayu inicialmente le pidió a Yoshida que la dejara pasar la noche a cambio de que ella le hiciera el amor, pero Yoshida solo accedió a albergarla sin la necesidad de ese intercambio. Después de preguntarle sus antecedentes a Sayu, Yoshida decidió invitarla a vivir en su casa hasta que descubriera lo que valía y se hiciera más madura. Sayu estuvo de acuerdo y comenzó a trabajar a tiempo parcial en una tienda cerca de la casa de Yoshida. Y así, es como comienza esta historia de una relación entre un adulto desconsolado y una estudiante de secundaria fugitiva."
      },
      lnhenneko: {
        title: 'Hentai Ouji to Warawanai Neko',
        subTitle: "Volúmenes: 13 de 13",
        text: "La historia se centra en Yōto Yokodera que es un estudiante de segundo año de secundaria quien se pasa la vida pensando en las chicas y posiblemente el mayor pervertido de la escuela, pero nadie piensa que sea un pervertido porque sus intenciones son mal entendidas. Su problemática es que no es bueno para mostrar sus verdaderas emociones. Un día, su igualmente pervertido mejor amigo se transforma por completo y se deshace de sus 'pensamientos impuros'; una hazaña que atribuye al poder de la estatua del 'Gato de Piedra'. Como sugieren los rumores, uno puede desear eliminar un rasgo de personalidad de sí mismo que ya no desea tener. Sin embargo, esto eliminará el rasgo no deseado y se lo dará a alguien que lo necesite y para concretar tu deseo debes entregar una ofrenda. Mientras Yōto hace su ofrenda a la estatua, una chica llamada Tsukiko Tsutsukakushi llega para hacer su deseo de poder ser más como una adulta y no mostrar sus emociones tan fácilmente. Ambos le desean al gato de piedra y para su sorpresa al día siguiente en la escuela, Yōto no puede decir mentiras, y Tsukiko no puede mostrar ninguna emoción en absoluto. Después de darse cuenta de que no les gusta el cambio que sucedió, trabajan juntos para tratar de averiguar quién recibió el rasgo que les quitaron para recuperarlo. Conocen a Azusa Azuki, una atractiva chica de segundo año que acaba de trasladarse a su escuela. Muchos chicos de la escuela siempre se confiesan con ella, pero no tiene amigos y siempre está sola. Yōto descubre que Azusa es el que recibió su rasgo de personalidad no deseado y trata de recuperarlo. A medida que los dos intentan recuperar el rasgo no deseado, desarrollan sentimientos el uno por el otro."
      },
      lnbokunosensei: {
        title: 'Boku no Sensei wa, Houkago Kawaii Konyakusha',
        subTitle: "Volúmenes: 1 de ???",
        text: "Mi profesora, Reina Sakurakouji, es la mujer más hermosa de la escuela, pero también es famosa por ser muy fría. Un día después de la escuela, me encontré con ella por casualidad, y allí, por alguna razón, me presentó a sus padres como su prometido (o como si lo fuera), “Él es Shirase-kun. En realidad, estamos comprometidos”, y después de eso, ¡¿terminamos viviendo juntos?! Y aunque tenía una imagen aterradora de ella, en realidad… “¡¿Pero qué estás diciendo?! ¡No te burles de mí!”, ella en casa es muy tímida, indefensa, se emborracha rápidamente y además de eso, es una lindura torpe. Pero esto es algo que solo yo sé. ¡Este es el comienzo del acuerdo secreto de convivencia entre un estudiante y su profesora!"
      },
      lnfmp: {
        title: "Full Metal Panic!",
        subTitle: "Volúmenes 12 de 12",
        text: "Sousuke Sagara, un chico que no es para nada normal, a su corta edad es un experimentado militar que trabaja para la organización privada Mithril. Desde Mithril se le ordena seguir y proteger a la joven estudiante Chidori Kaname, ella es candidata para ser una 'Whispered' (personas que contienen información de alta y avanzada tecnología llamada 'Tecnología Negra' implantada en su cerebro a nivel genético), a pesar de que Sousuke está entrenado, posee grandes habilidades de combate y es un experto piloto de Arm Slave (poderosos robots de combate) le será una misión muy difícil infiltrarse y pasar desapercibido en la escuela de Chidori. En el transcurso de la historia se desarrollará un fuerte sentimiento entre Sousuke y Chidori. Nuestro protagonista aprenderá que una chica enfurecida puede ser el oponente más letal de todos."
      },
      lnelfsan: {
        title: "Nihon e Youkoso Elf-san",
        subTitle: "Volúmenes 06 de 07",
        text: "La principal afición de Kazuhiro Kitase es dormir. Desde que era pequeño, era capaz de entrar en un mundo dentro de sus sueños y allí emprendió emocionantes aventuras. A medida que fue creciendo, conoció a una elfa y un día, mientras pasaba el rato con ella, fueron incinerados por el aliento de un dragón. Cuando se despertó, se dio cuenta de que una figura familiar dormía tranquilamente a su lado… ¡¿La chica elfa de sus sueños?! ¡Únete a Kazuhiro en sus nuevas aventuras a través de Japón y el mundo de sus sueños con esta encantadora elfa!"
      },
      lnbokusensei: {
        title: "Boku no Kanojo Sensei",
        subTitle: "Volúmenes 07 de 09",
        text: "¿Puede ser Sensei la heroína? ¿Por favor? Debido a una experiencia traumática, desconfío de las personas que se hacen llamar ‘Sensei’. A mi, Saigi Makoto, se me fue llamado después de clases por la profesora más hermosa y popular de mi escuela, Fujiki Maka-sensei. “Me gustas…” ¡¿Eh…?! ¡¿Una confesión de la nada?! “Hasta que digas que me amas, seguiré persiguiéndote” Desde entonces, he sido convocado para ‘orientación académica’ después de clases, hemos visto TV juntos, he recibido contacto físico excesivo, hemos tenido citas… Y, con el tiempo, ¿Y poco a poco me volví consciente de Sensei…? ¿Pero no es malo que una profesora salga con su estudiante? Un romance que es absolutamente peligroso, el amor prohibido entre nosotros dos. ¡Que inicien las clases!"
      },
      lnoverlord: {
        title: "Overlord",
        subTitle: "Volúmenes 11 de 14",
        text: "En el año 2126, se decide descontinuar el DMMORPG Yggdrasil, un juego que ha sido el más popular durante los últimos doce años, pero que ha caído en desuso con el tiempo. El día que debían cerrarse los servidores del juego, Momonga, líder del gremio Ainz Ooal Gown, una vez compuesto por 41 miembros y acreditado como uno de los gremios más fuertes del juego, decide permanecer en línea hasta que el juego sea cerrado a modo de despedida de ese lugar tan especial para él. Tras la hora de cierre de los servidores, Momonga descubre que han sucedido cosas impresionantes y misteriosas. Aún está en la Gran Tumba de Nazarick, que es la base y hogar del gremio Ainz Ooal Gown, también se ha convertido realmente en su personaje con todos los poderes y habilidades que ello implica, los NPC que le sirven ahora son seres conscientes y la gran tumba ya no está en los pantanos de Yggdrasil, sino que ha sido enviada a un mundo de fantasía donde la magia y las criaturas místicas existen. Momonga decide que si ha de existir en ese mundo aspirará a la grandeza y descubrirá si algún otro jugador fue arrastrado allí como él. Por ello, cambia su nombre a Ainz Ooal Gown y decide convertirse en alguien tan famoso y temido que sea conocido en todo ese mundo. Así, además de lograr la gloria, cualquier otro jugador extraviado sabrá que allí hay alguien de tan poderoso gremio. Ahora, como Ainz Ooal Gown, el protagonista comienza a recorrer el mundo disfrazándose como aventurero, hechicero, mercenario, salvador o conquistador haciendo uso de la experiencia y habilidades que ha obtenido en el juego. Haciendo, de la Gran Tumba de Nazarick, un lugar en la historia de ese mundo."
      },
      lnelaina: {
        title: "Majo no Tabitabi",
        subTitle: "Volúmenes 04 de 17",
        text: "No es sobre el destino… ¿Cuál es tu historia favorita? ¿Tiene un héroe que mata a un dragón y salva a la princesa? ¿O el hijo de una profecía destinado a la grandeza? Bueno, mi historia es un poco diferente. Es una historia de una bruja que viaja por el mundo, en busca de nada en particular. Sin misiones por su cuenta, es libre de ir a donde sea que el viento la lleve, agregando unas cuantas páginas a la historia de las personas que conoce antes de emprender su próxima aventura. Al final de su viaje, la bruja toma una aprendiz que algún día comenzará su propio viaje. Y así el ciclo continúa, o eso narra la historia. ¿Quién podrá ser la bruja que inicia la historia de nuevo?"
      },
      lnkuma: {
        title: "Kuma Kuma Kuma Bear",
        subTitle: "Volúmenes 02 de 14",
        text: "Yuna, una chica de quince años, comienza a jugar su primer juego VRMMO. Ella ha conseguido miles de millones de yenes en acciones, y se confina en su casa para jugar sin ir a la escuela. Hoy, una actualización importante ha llegado al juego y ella obtiene un súper raro e intransferible traje de oso. Pero usarlo es tan vergonzoso que no se atreve a equiparlo, ni siquiera ayuda el hecho de que solo es un juego. Además, cuando responde la encuesta de satisfacción sobre la nueva actualización y reinicia el juego, ella descubre que está en un extraño bosque y está vistiendo el traje de eso. ¿Dónde estoy? ¿Un mensaje de Dios? ¿Un mundo diferente? Si ella está usando el traje de oso (que es un objeto poderosísimo) significa que es invencible, pero si se lo quita es solo una chica normal. ¡La aventura que Yuna nunca pidió acaba de comenzar!"
      },
      ln300: {
        title: "Slime Taoshite 300-nen, Shiranai Uchi ni Level Max ni Nattemashita",
        subTitle: "Volúmenes 05 de 14",
        text: "Después de vivir una dolorosa vida como una empleada de oficina, Azusa Aizawa terminó su vida corta tras morir por exceso de trabajo. Entonces, cuando se encontró reencarnada como una bruja inmortal y sin envejecimiento alguno en un mundo de fantasía, se compromete a pasar sus días sin estrés y de la manera más agradable posible. Se gana la vida a duras penas cazando los objetivos fáciles: ¡los slimes! Pero después de 300 años seguidos de hacer este simple trabajo, terminó con poderes superlativos y alocados. ¿Cómo mantendrá ahora su vida discreta?"
      },
      lnsombras: {
        title: "Kage no Jitsuryokusha ni Naritakute!",
        subTitle: "Volúmenes 04 de 05",
        text: "Desde que era un niño, quería convertirse en la eminencia en la sombra, una persona que opera en las sombras. Entrenó su cuerpo, haciendo prácticamente todo lo posible en el mundo, hasta que un día en una de sus sesiones de entrenamiento, se encontró con la magia. Sin embargo, esto no era magia y de hecho, eran los faros de un automóvil. Y así, murió. Incluso después de reencarnarse, el niño, ahora hijo de un noble, Cid Kagenou, quería alcanzar sus sueños. Después de rescatar a una niña, Cid crea una trama elaborada sobre cómo él era el líder de una antigua organización, que juró luchar contra el Culto de Diabolos, para evitar que dicho culto resucite a Diabolos. La niña jura lealtad a Cid y así él construye su organización, Shadow Garden."
      },

      // START SPIN OFF //
      
      sobakuen: {
        title: 'Kono Subarashii Sekai ni Bakuen wo!',
        subTitle: "Volúmenes: 03 de 03",
        text: "Ambientada dos años antes del comienzo de la serie principal, esta novela sigue la época de Megumin y Yunyun como estudiantes en la escuela de la aldea Crimson Demon. Cuando era niña, Megumin es salvada de una bestia negra por una mujer de grandes pechos que usa magia de explosión, que luego le sirve de inspiración para aprender el hechizo de alto poder. La bestia es encogida por la mujer y se convierte en un pequeño gato, que luego es adoptado por Megumin y apodado Chomusuke. En la escuela, Megumin y Yunyun compiten repetidamente entre sí para ser el mejor estudiante, y el primero espera obtener suficientes puntos de habilidad para aprender magia de explosión."
      },
      sobakuenzukko: {
        title: 'Kono Subarashii Sekai ni Bakuen wo! Zukko',
        subTitle: "Volúmenes: 02 de 02",
        text: "Ambientada dos años antes del comienzo de la serie principal, esta novela sigue la época de Megumin y Yunyun como estudiantes en la escuela de la aldea Crimson Demon. Cuando era niña, Megumin es salvada de una bestia negra por una mujer de grandes pechos que usa magia de explosión, que luego le sirve de inspiración para aprender el hechizo de alto poder. La bestia es encogida por la mujer y se convierte en un pequeño gato, que luego es adoptado por Megumin y apodado Chomusuke. En la escuela, Megumin y Yunyun compiten repetidamente entre sí para ser el mejor estudiante, y el primero espera obtener suficientes puntos de habilidad para aprender magia de explosión."
      },
      sokamen: {
        title: 'Kono Kamen no Akuma ni Soudan wo!',
        subTitle: "Volúmenes: 01 de 01",
        text: "Ambientada entre las novelas octava y novena de la serie principal, presenta una serie de viñetas que siguen la vida de Vanir en Axel. Queriendo recaudar más dinero mientras su tienda de magia y la de Wiz luchaban, Vanir abre un centro de consultoría en el gremio de aventureros. El spin-off también explora el pasado de aventuras de Wiz, incluidas sus batallas con Vanir y la decisión de convertirse en un lich."
      },
      sokyakko: {
        title: 'Kono Kamen no Akuma ni Soudan wo!',
        subTitle: "Volúmenes: 06 de 07",
        text: "Un spin-off que presenta a Dust como el protagonista principal, con volúmenes anteriores que tienen lugar alrededor de los volúmenes 1-4 de la serie principal, y volúmenes posteriores que tienen lugar después del volumen 8. '¡Sin dinero, sin mujeres!' El (autoproclamado) portador de Axel, el delincuente Dust, sufre un caso crónico de billetera vacía. Mientras que el aventurero novato Kazuma continúa haciéndose un nombre, Dust está ocupado engañando a la gente en estafas, vendiendo productos robados, estafando a damas nobles y cosas por el estilo. '¡Vamos a ganar dinero hoy también!' Mientras lo hacía, el gran diablo Vanir le dijo una profecía siniestra: 'Tienes un futuro interesante por delante'."
      },

      // START EROTIC NOVELS //

      enkaiyari: {
        title: 'Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahō to Skill Copy no Chōetsu Heal',
        subTitle: "Volúmenes: 08 de 09...",
        text: "“Venganza ... Eso es lo que quiero ... Luego de 4 años de vejaciones; solo quiero venganza ... Me vengaré de todos ...” “Los hechiceros sanadores no pueden pelear solos”. Keyarga, quien siempre ha sido atormentado por esta lógica, fue explotado una y otra vez por otros. Un día notó lo que había más allá de la magia de curación, y se convenció de que los hechiceros sanadores son la clase más fuerte de todas. No obstante, cuando descubrió este potencial ya era demasiado tarde. Por lo tanto, decide retroceder en el tiempo por cuatro años, dispuesto a rehacer su vida. Esta es la historia heroica del hechicero sanador que se convirtió en el guerrero más fuerte, utilizando el conocimiento de su vida pasada y la magia de curación."
      }
    }
  } // Ends Constructor //

// Main //

render() {

  return (

    <div className="App bg">

      <Router>
        <Container className="p-0" fluid={true}>

          <Jumbotron className="mb-0 border jumbotron-bg"></Jumbotron>
          
          <Navbar className="border border-bottom navbar-dark bg-dark sticky-top mb-0" expand="lg">
            <Navbar.Brand><img src={logo} width="30px" alt="Danny Vega"/></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/light-novel/">Inicio</Link>
                <Link className="nav-link" to="/light-novel/list/">Novelas Ligeras</Link>
                <Link className="nav-link" to="/light-novel/erolist/">Novelas 18+</Link>
                <Link className="nav-link" to="/light-novel/solist/">Spin Off</Link>
                <Link className="nav-link" to="/light-novel/about/">Acerca</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/light-novel/" exact render={() => 
            <HomePage title={this.state.home.title} 
                      subTitle={this.state.home.subTitle} 
                      text={this.state.home.text} />} />
          <Route path="/light-novel/list/" exact render={() => 
            <ListPage title={this.state.list.title} />} />
          <Route path="/light-novel/solist/" exact render={() => 
            <ListSpinOff title={this.state.solist.title} />} />
          <Route path="/light-novel/erolist/" exact render={() => 
            <ListEroPage title={this.state.erolist.title} />} />
          <Route path="/light-novel/ngnl/" exact render={() => 
            <LNNoGameNoLife title={this.state.lnngnl.title}
                            subTitle={this.state.lnngnl.subTitle} 
                            text={this.state.lnngnl.text} />} />
          <Route path="/light-novel/ngnl/01" exact render={() => <PDFViewverNGNL01 />} />
          <Route path="/light-novel/ngnl/02" exact render={() => <PDFViewverNGNL02 />} />
          <Route path="/light-novel/ngnl/03" exact render={() => <PDFViewverNGNL03 />} />
          <Route path="/light-novel/ngnl/04" exact render={() => <PDFViewverNGNL04 />} />
          <Route path="/light-novel/ngnl/05" exact render={() => <PDFViewverNGNL05 />} />
          <Route path="/light-novel/ngnl/06" exact render={() => <PDFViewverNGNL06 />} />
          <Route path="/light-novel/ngnl/07" exact render={() => <PDFViewverNGNL07 />} />
          <Route path="/light-novel/ngnl/08" exact render={() => <PDFViewverNGNL08 />} />
          <Route path="/light-novel/ngnl/09" exact render={() => <PDFViewverNGNL09 />} />
          <Route path="/light-novel/ngnl/10" exact render={() => <PDFViewverNGNL10 />} />
          <Route path="/light-novel/mushoku/" exact render={() => 
            <LNMushokuTensei title={this.state.lnmushoku.title}
                            subTitle={this.state.lnmushoku.subTitle} 
                            text={this.state.lnmushoku.text} />} />
          <Route path="/light-novel/mushoku/01" exact render={() => <PDFViewverMT01 />} />
          <Route path="/light-novel/mushoku/02" exact render={() => <PDFViewverMT02 />} />
          <Route path="/light-novel/mushoku/03" exact render={() => <PDFViewverMT03 />} />
          <Route path="/light-novel/mushoku/04" exact render={() => <PDFViewverMT04 />} />
          <Route path="/light-novel/mushoku/05" exact render={() => <PDFViewverMT05 />} />
          <Route path="/light-novel/mushoku/06" exact render={() => <PDFViewverMT06 />} />
          <Route path="/light-novel/mushoku/07" exact render={() => <PDFViewverMT07 />} />
          <Route path="/light-novel/mushoku/08" exact render={() => <PDFViewverMT08 />} />
          <Route path="/light-novel/mushoku/09" exact render={() => <PDFViewverMT09 />} />
          <Route path="/light-novel/mushoku/10" exact render={() => <PDFViewverMT10 />} />
          <Route path="/light-novel/mushoku/11" exact render={() => <PDFViewverMT11 />} />
          <Route path="/light-novel/mushoku/12" exact render={() => <PDFViewverMT12 />} />
          <Route path="/light-novel/mushoku/13" exact render={() => <PDFViewverMT13 />} />
          <Route path="/light-novel/mushoku/14" exact render={() => <PDFViewverMT14 />} />
          <Route path="/light-novel/mushoku/15" exact render={() => <PDFViewverMT15 />} />
          <Route path="/light-novel/mushoku/16" exact render={() => <PDFViewverMT16 />} />
          <Route path="/light-novel/mushoku/17" exact render={() => <PDFViewverMT17 />} />
          <Route path="/light-novel/mushoku/18" exact render={() => <PDFViewverMT18 />} />
          <Route path="/light-novel/mushoku/19" exact render={() => <PDFViewverMT19 />} />
          <Route path="/light-novel/mushoku/20" exact render={() => <PDFViewverMT20 />} />
          <Route path="/light-novel/mushoku/21" exact render={() => <PDFViewverMT21 />} />
          <Route path="/light-novel/mushoku/22" exact render={() => <PDFViewverMT22 />} />
          <Route path="/light-novel/mushoku/23" exact render={() => <PDFViewverMT23 />} />
          <Route path="/light-novel/mushoku/24" exact render={() => <PDFViewverMT24 />} />
          <Route path="/light-novel/kdgnk/" exact render={() => 
            <LNKumoDesuGa title={this.state.lnkdgnk.title}
                            subTitle={this.state.lnkdgnk.subTitle} 
                            text={this.state.lnkdgnk.text} />} />
          <Route path="/light-novel/kdgnk/01" exact render={() => <PDFViewverKDGNK01 />} />
          <Route path="/light-novel/kdgnk/02" exact render={() => <PDFViewverKDGNK02 />} />
          <Route path="/light-novel/kdgnk/03" exact render={() => <PDFViewverKDGNK03 />} />
          <Route path="/light-novel/kdgnk/04" exact render={() => <PDFViewverKDGNK04 />} />
          <Route path="/light-novel/kdgnk/05" exact render={() => <PDFViewverKDGNK05 />} />
          <Route path="/light-novel/kdgnk/06" exact render={() => <PDFViewverKDGNK06 />} />
          <Route path="/light-novel/kdgnk/07" exact render={() => <PDFViewverKDGNK07 />} />
          <Route path="/light-novel/kdgnk/08" exact render={() => <PDFViewverKDGNK08 />} />
          <Route path="/light-novel/kdgnk/09" exact render={() => <PDFViewverKDGNK09 />} />
          <Route path="/light-novel/kdgnk/10" exact render={() => <PDFViewverKDGNK10 />} />
          <Route path="/light-novel/kdgnk/11" exact render={() => <PDFViewverKDGNK11 />} />
          <Route path="/light-novel/gs/" exact render={() => 
            <LNGoblinSlayer title={this.state.lngs.title}
                            subTitle={this.state.lngs.subTitle} 
                            text={this.state.lngs.text} />} />
          <Route path="/light-novel/gs/01" exact render={() => <PDFViewverGS01 />} />
          <Route path="/light-novel/gs/02" exact render={() => <PDFViewverGS02 />} />
          <Route path="/light-novel/gs/03" exact render={() => <PDFViewverGS03 />} />
          <Route path="/light-novel/gs/04" exact render={() => <PDFViewverGS04 />} />
          <Route path="/light-novel/gs/05" exact render={() => <PDFViewverGS05 />} />
          <Route path="/light-novel/gs/06" exact render={() => <PDFViewverGS06 />} />
          <Route path="/light-novel/sby/" exact render={() => 
            <LNSeishunButa title={this.state.lnsby.title}
                            subTitle={this.state.lnsby.subTitle} 
                            text={this.state.lnsby.text} />} />
          <Route path="/light-novel/sby/01" exact render={() => <PDFViewverSBY01 />} />
          <Route path="/light-novel/sby/02" exact render={() => <PDFViewverSBY02 />} />
          <Route path="/light-novel/sby/03" exact render={() => <PDFViewverSBY03 />} />
          <Route path="/light-novel/sby/04" exact render={() => <PDFViewverSBY04 />} />
          <Route path="/light-novel/konosuba/" exact render={() => 
            <LNKonosuba title={this.state.lnkonosuba.title}
                            subTitle={this.state.lnkonosuba.subTitle} 
                            text={this.state.lnkonosuba.text} />} />
          <Route path="/light-novel/konosuba/01" exact render={() => <PDFViewverKONOSUBA01 />} />
          <Route path="/light-novel/konosuba/02" exact render={() => <PDFViewverKONOSUBA02 />} />
          <Route path="/light-novel/konosuba/03" exact render={() => <PDFViewverKONOSUBA03 />} />
          <Route path="/light-novel/konosuba/04" exact render={() => <PDFViewverKONOSUBA04 />} />
          <Route path="/light-novel/konosuba/05" exact render={() => <PDFViewverKONOSUBA05 />} />
          <Route path="/light-novel/konosuba/06" exact render={() => <PDFViewverKONOSUBA06 />} />
          <Route path="/light-novel/konosuba/07" exact render={() => <PDFViewverKONOSUBA07 />} />
          <Route path="/light-novel/konosuba/08" exact render={() => <PDFViewverKONOSUBA08 />} />
          <Route path="/light-novel/konosuba/09" exact render={() => <PDFViewverKONOSUBA09 />} />
          <Route path="/light-novel/konosuba/10" exact render={() => <PDFViewverKONOSUBA10 />} />
          <Route path="/light-novel/konosuba/11" exact render={() => <PDFViewverKONOSUBA11 />} />
          <Route path="/light-novel/konosuba/12" exact render={() => <PDFViewverKONOSUBA12 />} />
          <Route path="/light-novel/konosuba/13" exact render={() => <PDFViewverKONOSUBA13 />} />
          <Route path="/light-novel/konosuba/14" exact render={() => <PDFViewverKONOSUBA14 />} />
          <Route path="/light-novel/konosuba/15" exact render={() => <PDFViewverKONOSUBA15 />} />
          <Route path="/light-novel/konosuba/16" exact render={() => <PDFViewverKONOSUBA16 />} />
          <Route path="/light-novel/konosuba/17" exact render={() => <PDFViewverKONOSUBA17 />} />
          <Route path="/light-novel/isekaimaou/" exact render={() => 
            <LNIsekaiMaou title={this.state.lnisekaimou.title}
                            subTitle={this.state.lnisekaimou.subTitle} 
                            text={this.state.lnisekaimou.text} />} />
          <Route path="/light-novel/isekaimaou/01" exact render={() => <PDFViewverISEKAIMAOU01 />} />
          <Route path="/light-novel/isekaimaou/02" exact render={() => <PDFViewverISEKAIMAOU02 />} />
          <Route path="/light-novel/isekaimaou/03" exact render={() => <PDFViewverISEKAIMAOU03 />} />
          <Route path="/light-novel/isekaimaou/04" exact render={() => <PDFViewverISEKAIMAOU04 />} />
          <Route path="/light-novel/isekaimaou/05" exact render={() => <PDFViewverISEKAIMAOU05 />} />
          <Route path="/light-novel/isekaimaou/06" exact render={() => <PDFViewverISEKAIMAOU06 />} />
          <Route path="/light-novel/isekaimaou/07" exact render={() => <PDFViewverISEKAIMAOU07 />} />
          <Route path="/light-novel/isekaimaou/08" exact render={() => <PDFViewverISEKAIMAOU08 />} />
          <Route path="/light-novel/isekaimaou/09" exact render={() => <PDFViewverISEKAIMAOU09 />} />
          <Route path="/light-novel/isekaimaou/10" exact render={() => <PDFViewverISEKAIMAOU10 />} />
          <Route path="/light-novel/isekaimaou/11" exact render={() => <PDFViewverISEKAIMAOU11 />} />
          <Route path="/light-novel/isekaimaou/12" exact render={() => <PDFViewverISEKAIMAOU12 />} />
          <Route path="/light-novel/isekaimaou/13" exact render={() => <PDFViewverISEKAIMAOU13 />} />
          <Route path="/light-novel/bwtgs/" exact render={() => 
            <LNBokuWaTomodachi title={this.state.lnbwtgs.title}
                            subTitle={this.state.lnbwtgs.subTitle} 
                            text={this.state.lnbwtgs.text} />} />
          <Route path="/light-novel/bwtgs/01" exact render={() => <PDFViewverBWTGS01 />} />
          <Route path="/light-novel/bwtgs/02" exact render={() => <PDFViewverBWTGS02 />} />
          <Route path="/light-novel/bwtgs/03" exact render={() => <PDFViewverBWTGS03 />} />
          <Route path="/light-novel/bwtgs/04" exact render={() => <PDFViewverBWTGS04 />} />
          <Route path="/light-novel/bwtgs/05" exact render={() => <PDFViewverBWTGS05 />} />
          <Route path="/light-novel/bwtgs/06" exact render={() => <PDFViewverBWTGS06 />} />
          <Route path="/light-novel/bwtgs/07" exact render={() => <PDFViewverBWTGS07 />} />
          <Route path="/light-novel/bwtgs/08" exact render={() => <PDFViewverBWTGS08 />} />
          <Route path="/light-novel/bwtgs/09" exact render={() => <PDFViewverBWTGS09 />} />
          <Route path="/light-novel/bwtgs/10" exact render={() => <PDFViewverBWTGS10 />} />
          <Route path="/light-novel/mondaiji/" exact render={() => 
            <LNMondaiji title={this.state.lnmondaiji.title}
                            subTitle={this.state.lnmondaiji.subTitle} 
                            text={this.state.lnmondaiji.text} />} />
          <Route path="/light-novel/mondaiji/01" exact render={() => <PDFViewverMONDAIJI01 />} />
          <Route path="/light-novel/mondaiji/02" exact render={() => <PDFViewverMONDAIJI02 />} />
          <Route path="/light-novel/mondaiji/03" exact render={() => <PDFViewverMONDAIJI03 />} />
          <Route path="/light-novel/mondaiji/04" exact render={() => <PDFViewverMONDAIJI04 />} />
          <Route path="/light-novel/mondaiji/05" exact render={() => <PDFViewverMONDAIJI05 />} />
          <Route path="/light-novel/mondaiji/06" exact render={() => <PDFViewverMONDAIJI06 />} />
          <Route path="/light-novel/mondaiji/07" exact render={() => <PDFViewverMONDAIJI07 />} />
          <Route path="/light-novel/mondaiji/08" exact render={() => <PDFViewverMONDAIJI08 />} />
          <Route path="/light-novel/mondaiji/09" exact render={() => <PDFViewverMONDAIJI09 />} />
          <Route path="/light-novel/mondaiji/10" exact render={() => <PDFViewverMONDAIJI10 />} />
          <Route path="/light-novel/mondaiji/11" exact render={() => <PDFViewverMONDAIJI11 />} />
          <Route path="/light-novel/mondaiji/12" exact render={() => <PDFViewverMONDAIJI12 />} />
          <Route path="/light-novel/rz/" exact render={() => 
            <LNReZero title={this.state.lnrz.title}
                            subTitle={this.state.lnrz.subTitle} 
                            text={this.state.lnrz.text} />} />
          <Route path="/light-novel/rz/01" exact render={() => <PDFViewverRZ01 />} />
          <Route path="/light-novel/rz/02" exact render={() => <PDFViewverRZ02 />} />
          <Route path="/light-novel/rz/03" exact render={() => <PDFViewverRZ03 />} />
          <Route path="/light-novel/rz/04" exact render={() => <PDFViewverRZ04 />} />
          <Route path="/light-novel/rz/05" exact render={() => <PDFViewverRZ05 />} />
          <Route path="/light-novel/rz/06" exact render={() => <PDFViewverRZ06 />} />
          <Route path="/light-novel/rz/07" exact render={() => <PDFViewverRZ07 />} />
          <Route path="/light-novel/rz/08" exact render={() => <PDFViewverRZ08 />} />
          <Route path="/light-novel/rz/09" exact render={() => <PDFViewverRZ09 />} />
          <Route path="/light-novel/rz/10" exact render={() => <PDFViewverRZ10 />} />
          <Route path="/light-novel/rz/11" exact render={() => <PDFViewverRZ11 />} />
          <Route path="/light-novel/rz/12" exact render={() => <PDFViewverRZ12 />} />
          <Route path="/light-novel/rz/13" exact render={() => <PDFViewverRZ13 />} />
          <Route path="/light-novel/rz/14" exact render={() => <PDFViewverRZ14 />} />
          <Route path="/light-novel/rz/15" exact render={() => <PDFViewverRZ15 />} />
          <Route path="/light-novel/bakarina/" exact render={() => 
            <LNBakarina title={this.state.lnbakarina.title}
                            subTitle={this.state.lnbakarina.subTitle} 
                            text={this.state.lnbakarina.text} />} />
          <Route path="/light-novel/bakarina/01" exact render={() => <PDFViewverBAKARINA01 />} />
          <Route path="/light-novel/bakarina/02" exact render={() => <PDFViewverBAKARINA02 />} />
          <Route path="/light-novel/bakarina/03" exact render={() => <PDFViewverBAKARINA03 />} />
          <Route path="/light-novel/bakarina/04" exact render={() => <PDFViewverBAKARINA04 />} />
          <Route path="/light-novel/bakarina/05" exact render={() => <PDFViewverBAKARINA05 />} />
          <Route path="/light-novel/bakarina/06" exact render={() => <PDFViewverBAKARINA06 />} />
          <Route path="/light-novel/bakarina/07" exact render={() => <PDFViewverBAKARINA07 />} />
          <Route path="/light-novel/bakarina/08" exact render={() => <PDFViewverBAKARINA08 />} />
          <Route path="/light-novel/mamasuki/" exact render={() => 
            <LNMamasuki title={this.state.lnmamasuki.title}
                            subTitle={this.state.lnmamasuki.subTitle} 
                            text={this.state.lnmamasuki.text} />} />
          <Route path="/light-novel/mamasuki/01" exact render={() => <PDFViewverMAMASUKI01 />} />
          <Route path="/light-novel/mamasuki/02" exact render={() => <PDFViewverMAMASUKI02 />} />
          <Route path="/light-novel/mamasuki/03" exact render={() => <PDFViewverMAMASUKI03 />} />
          <Route path="/light-novel/mamasuki/04" exact render={() => <PDFViewverMAMASUKI04 />} />
          <Route path="/light-novel/hige/" exact render={() => 
            <LNHige title={this.state.lnhige.title}
                            subTitle={this.state.lnhige.subTitle} 
                            text={this.state.lnhige.text} />} />
          <Route path="/light-novel/hige/01" exact render={() => <PDFViewverHIGE01 />} />
          <Route path="/light-novel/hige/02" exact render={() => <PDFViewverHIGE02 />} />
          <Route path="/light-novel/hige/03" exact render={() => <PDFViewverHIGE03 />} />
          <Route path="/light-novel/hige/04" exact render={() => <PDFViewverHIGE04 />} />
          <Route path="/light-novel/henneko/" exact render={() => 
            <LNHenneko title={this.state.lnhenneko.title}
                            subTitle={this.state.lnhenneko.subTitle} 
                            text={this.state.lnhenneko.text} />} />
          <Route path="/light-novel/henneko/01" exact render={() => <PDFViewverHENNEKO01 />} />
          <Route path="/light-novel/henneko/02" exact render={() => <PDFViewverHENNEKO02 />} />
          <Route path="/light-novel/henneko/03" exact render={() => <PDFViewverHENNEKO03 />} />
          <Route path="/light-novel/henneko/04" exact render={() => <PDFViewverHENNEKO04 />} />
          <Route path="/light-novel/henneko/05" exact render={() => <PDFViewverHENNEKO05 />} />
          <Route path="/light-novel/henneko/06" exact render={() => <PDFViewverHENNEKO06 />} />
          <Route path="/light-novel/henneko/07" exact render={() => <PDFViewverHENNEKO07 />} />
          <Route path="/light-novel/henneko/08" exact render={() => <PDFViewverHENNEKO08 />} />
          <Route path="/light-novel/henneko/09" exact render={() => <PDFViewverHENNEKO09 />} />
          <Route path="/light-novel/henneko/10" exact render={() => <PDFViewverHENNEKO10 />} />
          <Route path="/light-novel/henneko/11" exact render={() => <PDFViewverHENNEKO11 />} />
          <Route path="/light-novel/henneko/12" exact render={() => <PDFViewverHENNEKO12 />} />
          <Route path="/light-novel/henneko/13" exact render={() => <PDFViewverHENNEKO13 />} />
          <Route path="/light-novel/bokunosensei/" exact render={() => 
            <LNBokunosensei title={this.state.lnbokunosensei.title}
                            subTitle={this.state.lnbokunosensei.subTitle} 
                            text={this.state.lnbokunosensei.text} />} />
          <Route path="/light-novel/bokunosensei/01" exact render={() => <PDFViewverBOKUNOSENSEI01 />} />
          <Route path="/light-novel/fmp/" exact render={() => 
            <LNFmp title={this.state.lnfmp.title}
                            subTitle={this.state.lnfmp.subTitle} 
                            text={this.state.lnfmp.text} />} />
          <Route path="/light-novel/fmp/01" exact render={() => <PDFViewverFMP01 />} />
          <Route path="/light-novel/fmp/02" exact render={() => <PDFViewverFMP02 />} />
          <Route path="/light-novel/fmp/03" exact render={() => <PDFViewverFMP03 />} />
          <Route path="/light-novel/fmp/04" exact render={() => <PDFViewverFMP04 />} />
          <Route path="/light-novel/fmp/05" exact render={() => <PDFViewverFMP05 />} />
          <Route path="/light-novel/fmp/06" exact render={() => <PDFViewverFMP06 />} />
          <Route path="/light-novel/fmp/07" exact render={() => <PDFViewverFMP07 />} />
          <Route path="/light-novel/fmp/08" exact render={() => <PDFViewverFMP08 />} />
          <Route path="/light-novel/fmp/09" exact render={() => <PDFViewverFMP09 />} />
          <Route path="/light-novel/fmp/10" exact render={() => <PDFViewverFMP10 />} />
          <Route path="/light-novel/fmp/11" exact render={() => <PDFViewverFMP11 />} />
          <Route path="/light-novel/fmp/12" exact render={() => <PDFViewverFMP12 />} />
          <Route path="/light-novel/elfsan/" exact render={() => 
            <LNElfsan title={this.state.lnelfsan.title}
                            subTitle={this.state.lnelfsan.subTitle} 
                            text={this.state.lnelfsan.text} />} />
          <Route path="/light-novel/elfsan/01" exact render={() => <PDFViewverELFSAN01 />} />
          <Route path="/light-novel/elfsan/02" exact render={() => <PDFViewverELFSAN02 />} />
          <Route path="/light-novel/elfsan/03" exact render={() => <PDFViewverELFSAN03 />} />
          <Route path="/light-novel/elfsan/04" exact render={() => <PDFViewverELFSAN04 />} />
          <Route path="/light-novel/elfsan/05" exact render={() => <PDFViewverELFSAN05 />} />
          <Route path="/light-novel/elfsan/06" exact render={() => <PDFViewverELFSAN06 />} />
          <Route path="/light-novel/bokusensei/" exact render={() => 
            <LNBokusensei title={this.state.lnbokusensei.title}
                            subTitle={this.state.lnbokusensei.subTitle} 
                            text={this.state.lnbokusensei.text} />} />
          <Route path="/light-novel/bokusensei/01" exact render={() => <PDFViewverBOKUSENSEI01 />} />
          <Route path="/light-novel/bokusensei/02" exact render={() => <PDFViewverBOKUSENSEI02 />} />
          <Route path="/light-novel/bokusensei/03" exact render={() => <PDFViewverBOKUSENSEI03 />} />
          <Route path="/light-novel/bokusensei/04" exact render={() => <PDFViewverBOKUSENSEI04 />} />
          <Route path="/light-novel/bokusensei/05" exact render={() => <PDFViewverBOKUSENSEI05 />} />
          <Route path="/light-novel/bokusensei/06" exact render={() => <PDFViewverBOKUSENSEI06 />} />
          <Route path="/light-novel/bokusensei/07" exact render={() => <PDFViewverBOKUSENSEI07 />} />
          <Route path="/light-novel/overlord/" exact render={() => 
            <LNOverlord title={this.state.lnoverlord.title}
                            subTitle={this.state.lnoverlord.subTitle} 
                            text={this.state.lnoverlord.text} />} />
          <Route path="/light-novel/overlord/01" exact render={() => <PDFViewverOVERLORD01 />} />
          <Route path="/light-novel/overlord/02" exact render={() => <PDFViewverOVERLORD02 />} />
          <Route path="/light-novel/overlord/03" exact render={() => <PDFViewverOVERLORD03 />} />
          <Route path="/light-novel/overlord/04" exact render={() => <PDFViewverOVERLORD04 />} />
          <Route path="/light-novel/overlord/05" exact render={() => <PDFViewverOVERLORD05 />} />
          <Route path="/light-novel/overlord/06" exact render={() => <PDFViewverOVERLORD06 />} />
          <Route path="/light-novel/overlord/07" exact render={() => <PDFViewverOVERLORD07 />} />
          <Route path="/light-novel/overlord/08" exact render={() => <PDFViewverOVERLORD08 />} />
          <Route path="/light-novel/overlord/09" exact render={() => <PDFViewverOVERLORD09 />} />
          <Route path="/light-novel/overlord/10" exact render={() => <PDFViewverOVERLORD10 />} />
          <Route path="/light-novel/overlord/11" exact render={() => <PDFViewverOVERLORD11 />} />
          <Route path="/light-novel/elaina/" exact render={() => 
            <LNElaina title={this.state.lnelaina.title}
                            subTitle={this.state.lnelaina.subTitle} 
                            text={this.state.lnelaina.text} />} />
          <Route path="/light-novel/elaina/01" exact render={() => <PDFViewverELAINA01 />} />
          <Route path="/light-novel/elaina/02" exact render={() => <PDFViewverELAINA02 />} />
          <Route path="/light-novel/elaina/03" exact render={() => <PDFViewverELAINA03 />} />
          <Route path="/light-novel/elaina/04" exact render={() => <PDFViewverELAINA04 />} />
          <Route path="/light-novel/kumakuma/" exact render={() => 
            <LNKuma title={this.state.lnkuma.title}
                            subTitle={this.state.lnkuma.subTitle} 
                            text={this.state.lnkuma.text} />} />
          <Route path="/light-novel/kumakuma/01" exact render={() => <PDFViewverKUMA01 />} />
          <Route path="/light-novel/kumakuma/02" exact render={() => <PDFViewverKUMA02 />} />
          <Route path="/light-novel/300/" exact render={() => 
            <LN300 title={this.state.ln300.title}
                            subTitle={this.state.ln300.subTitle} 
                            text={this.state.ln300.text} />} />
          <Route path="/light-novel/300/01" exact render={() => <PDFViewver30001 />} />
          <Route path="/light-novel/300/02" exact render={() => <PDFViewver30002 />} />
          <Route path="/light-novel/300/03" exact render={() => <PDFViewver30003 />} />
          <Route path="/light-novel/300/04" exact render={() => <PDFViewver30004 />} />
          <Route path="/light-novel/300/05" exact render={() => <PDFViewver30005 />} />
          <Route path="/light-novel/sombras/" exact render={() => 
            <LNSombras title={this.state.lnsombras.title}
                            subTitle={this.state.lnsombras.subTitle} 
                            text={this.state.lnsombras.text} />} />
          <Route path="/light-novel/sombras/01" exact render={() => <PDFViewverSOMBRAS01 />} />
          <Route path="/light-novel/sombras/02" exact render={() => <PDFViewverSOMBRAS02 />} />
          <Route path="/light-novel/sombras/03" exact render={() => <PDFViewverSOMBRAS03 />} />
          <Route path="/light-novel/sombras/04" exact render={() => <PDFViewverSOMBRAS04 />} />

          
          <Route path="/light-novel/bakuen/" exact render={() => 
            <SOKonosubaBakuen title={this.state.sobakuen.title}
                            subTitle={this.state.sobakuen.subTitle} 
                            text={this.state.sobakuen.text} />} />
          <Route path="/light-novel/bakuen/01" exact render={() => <PDFViewverBAKUEN01 />} />
          <Route path="/light-novel/bakuen/02" exact render={() => <PDFViewverBAKUEN02 />} />
          <Route path="/light-novel/bakuen/03" exact render={() => <PDFViewverBAKUEN03 />} />
          <Route path="/light-novel/bakuenzukko/" exact render={() => 
            <SOKonosubaBakuenZukko title={this.state.sobakuenzukko.title}
                            subTitle={this.state.sobakuenzukko.subTitle} 
                            text={this.state.sobakuenzukko.text} />} />
          <Route path="/light-novel/bakuenzukko/01" exact render={() => <PDFViewverBAKUENZUKKO01 />} />
          <Route path="/light-novel/bakuenzukko/02" exact render={() => <PDFViewverBAKUENZUKKO02 />} />
          <Route path="/light-novel/kamen/" exact render={() => 
            <SOKonosubaKamen title={this.state.sokamen.title}
                            subTitle={this.state.sokamen.subTitle} 
                            text={this.state.sokamen.text} />} />
          <Route path="/light-novel/kamen/01" exact render={() => <PDFViewverKAMEN01 />} />
          <Route path="/light-novel/kyakko/" exact render={() => 
            <SOKonosubaKyakko title={this.state.sokyakko.title}
                            subTitle={this.state.sokyakko.subTitle} 
                            text={this.state.sokyakko.text} />} />
          <Route path="/light-novel/kyakko/01" exact render={() => <PDFViewverKYAKKO01 />} />
          <Route path="/light-novel/kyakko/02" exact render={() => <PDFViewverKYAKKO02 />} />
          <Route path="/light-novel/kyakko/03" exact render={() => <PDFViewverKYAKKO03 />} />
          <Route path="/light-novel/kyakko/04" exact render={() => <PDFViewverKYAKKO04 />} />
          <Route path="/light-novel/kyakko/05" exact render={() => <PDFViewverKYAKKO05 />} />
          <Route path="/light-novel/kyakko/06" exact render={() => <PDFViewverKYAKKO06 />} />

          
          <Route path="/light-novel/kaiyari/" exact render={() => 
            <ENKaiyari title={this.state.enkaiyari.title}
                            subTitle={this.state.enkaiyari.subTitle} 
                            text={this.state.enkaiyari.text} />} />
          <Route path="/light-novel/kaiyari/01" exact render={() => <PDFViewverKAIYARI01 />} />
          <Route path="/light-novel/kaiyari/02" exact render={() => <PDFViewverKAIYARI02 />} />
          <Route path="/light-novel/kaiyari/03" exact render={() => <PDFViewverKAIYARI03 />} />
          <Route path="/light-novel/kaiyari/04" exact render={() => <PDFViewverKAIYARI04 />} />
          <Route path="/light-novel/kaiyari/05" exact render={() => <PDFViewverKAIYARI05 />} />
          <Route path="/light-novel/kaiyari/06" exact render={() => <PDFViewverKAIYARI06 />} />
          <Route path="/light-novel/kaiyari/07" exact render={() => <PDFViewverKAIYARI07 />} />
          <Route path="/light-novel/kaiyari/08" exact render={() => <PDFViewverKAIYARI08 />} />
          
        </Container>
      </Router>
    
      </div>
    );
  } // Ends render() //

} // Ends class App extends React.Component //

export default App;