import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';

import { useDarkMode } from './styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import styled, { ThemeProvider } from 'styled-components';

import { Toggle } from './components/Toggle';

import HomePage from './pages/HomePage';
import RequestPage from './pages/RequestPage';
import ListPage from './pages/ListPage';
import ListEroPage from './pages/ListEroPage';
import HuronRequestPage from './pages/HuronRequestPage';

// START LIGHT NOVELS //

import LNNoGameNoLife from './pages/LNNoGameNoLife.jsx';
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

import LNMushokuTensei from './pages/LNMushokuTensei.jsx';
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

import LNKumoDesuGa from './pages/LNKumoDesuGa';
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

import LNGoblinSlayer from './pages/LNGoblinSlayer';
import PDFViewverGS01 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS01';
import PDFViewverGS02 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS02';
import PDFViewverGS03 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS03';
import PDFViewverGS04 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS04';
import PDFViewverGS05 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS05';
import PDFViewverGS06 from './pages/PDFViewver/GoblinSlayer/PDFViewverGS06';

import LNSeishunButa from './pages/LNSeishunButa';
import PDFViewverSBY01 from './pages/PDFViewver/SeishunButa/PDFViewverSBY01';
import PDFViewverSBY02 from './pages/PDFViewver/SeishunButa/PDFViewverSBY02';
import PDFViewverSBY03 from './pages/PDFViewver/SeishunButa/PDFViewverSBY03';

import LNKonosuba from './pages/LNKonosuba';
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

/*function AppDarkLight() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
}*/

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
        { title: 'Request', path: '/light-novel/request/' },
        { title: 'Sr Huron Requests', path: '/light-novel/huron/' },
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

        // START EROTIC NOVELS //

        { title: 'Kaifuku Jutsushi no Yarinaoshi: Sokushi Mahou to Skill Copy no Chouetsu Heal Volumen', path: '/light-novel/kaiyari/' },
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
        title: 'Light Novels',
        subTitle: "Lista de Novelas",
        text: "Bienvenidos~! Mi nombre es Danny Vega y este es un pequeño proyecto que estoy realizando como hobby titulado LIGHT NOVELS, en el cual realizo respaldos en la nube de algunas Novelas Ligeras que son de mi agrado (algunas ya las terminé de leer y algunas otras no jaja), estos archivos pueden descargarlos desde Mega y/o GoogleDrive (sin acortadores ni nada por el estilo) y de la misma manera para su comodidad los dejare para lectura en linea. Asi que a distrutar~!"
      },
      request: {
        title: "Mis Amigos Weebs",
        text: "Aqui dejo algunos usuarios y sus colecciones de Novelas Ligeras que han leido a la fecha."
      },
      list: {
        title: "Novelas Ligeras",
      },
      erolist: {
        title: "Novelas Eróticas",
      },
      huronrequest: {
        title: 'Sr. Hurón',
        subTitle: "Thicc and LN are Top Tier",
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
        subTitle: "Volúmenes: 11 de 14...",
        text: "La historia comienza con la protagonista una estudiante de preparatoria, hasta que una misteriosa explosión asesina a su clase entera y estos reencarnan en un mundo de fantasía. Mientras que algunos reencarnaron como príncipes o prodigios, otros no fueron tan afortunados. Nuestra heroína, quien era la más antisocial del grupo, descubre que reencarno como una araña. Ahora al fondo de la cadena alimenticia, para sobrevivir necesitara adaptarse a esta nueva situación con pura fuerza de voluntad mientras esta atrapada en un laberinto lleno de monstruos, ¡Es comer o ser comido! Esta es la historia de una araña haciendo todo lo posible para sobrevivir."
      },
      lngs: {
        title: 'Goblin Slayer',
        subTitle: "Volúmenes: 06 de 14...",
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

  //const [ theme, toggleTheme ] = useDarkMode();
  //const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (

    <div className="App bg">

    {/*<ThemeProvider theme={themeMode}>
    <GlobalStyles />*/}

      <Router>
        <Container className="p-0" fluid={false}>

          <Jumbotron className="mb-0 border jumbotron-bg"></Jumbotron>
          
          <Navbar className="border border-bottom navbar-dark bg-dark sticky-top mb-0" expand="lg">
            <Navbar.Brand><img src={logo} width="30px" alt="Danny Vega"/></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/light-novel/">Home</Link>
                <Link className="nav-link" to="/light-novel/list/">Novelas</Link>
                <Link className="nav-link" to="/light-novel/solist/">Spin Off</Link>
                <Link className="nav-link" to="/light-novel/erolist/">Eróticas</Link>
                <Link className="nav-link" to="/light-novel/request/">Usuarios</Link>
                <Link className="nav-link" to="/light-novel/about/">Acerca</Link>
              </Nav>
              <Nav className="ml-auto">
                {/*<Toggle theme={theme} toggleTheme={toggleTheme} />*/}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/light-novel/" exact render={() => 
            <HomePage title={this.state.home.title} 
                      subTitle={this.state.home.subTitle} 
                      text={this.state.home.text} />} />
          <Route path="/light-novel/request/" exact render={() => 
            <RequestPage title={this.state.request.title} 
                            text={this.state.request.text} />} />
          <Route path="/light-novel/list/" exact render={() => 
            <ListPage title={this.state.list.title} />} />
          <Route path="/light-novel/erolist/" exact render={() => 
            <ListEroPage title={this.state.erolist.title} />} />
          <Route path="/light-novel/huron/" exact render={() => 
            <HuronRequestPage title={this.state.huronrequest.title}
                            subTitle={this.state.huronrequest.subTitle} />} />
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
      {/*</ThemeProvider>*/}
    
      </div>
    );
  } // Ends render() //

} // Ends class App extends React.Component //

export default App;