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
import HuronRequestPage from './pages/HuronRequestPage';

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
        { title: 'Request', path: '/light-novel/request/' },
        { title: 'Sr Huron Requests', path: '/light-novel/huron/' },
        { title: 'Top Tier', path: '/light-novel/tier/' },
        { title: 'About', path: '/light-novel/about/' },
        { title: 'No Game No Life', path: '/light-novel/ngnl/' },
        { title: 'No Game No Life volume 01', path: '/light-novel/ngnl/01/' },
        { title: 'No Game No Life volume 02', path: '/light-novel/ngnl/02/' },
        { title: 'No Game No Life volume 03', path: '/light-novel/ngnl/03/' },
        { title: 'No Game No Life volume 04', path: '/light-novel/ngnl/04/' },
        { title: 'No Game No Life volume 05', path: '/light-novel/ngnl/05/' },
        { title: 'No Game No Life volume 06', path: '/light-novel/ngnl/06/' },
        { title: 'No Game No Life volume 07', path: '/light-novel/ngnl/07/' },
        { title: 'No Game No Life volume 08', path: '/light-novel/ngnl/08/' },
        { title: 'No Game No Life volume 09', path: '/light-novel/ngnl/09/' },
        { title: 'No Game No Life volume 10', path: '/light-novel/ngnl/10/' },
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
        { title: 'Kumo Desu Ga, Nani Ka? volume 01', path: '/light-novel/kdgnk/01/' },
        { title: 'Kumo Desu Ga, Nani Ka? volume 02', path: '/light-novel/kdgnk/02/' },
        { title: 'Kumo Desu Ga, Nani Ka? volume 03', path: '/light-novel/kdgnk/03/' },
        { title: 'Kumo Desu Ga, Nani Ka? volume 04', path: '/light-novel/kdgnk/04/' },
        { title: 'Kumo Desu Ga, Nani Ka? volume 05', path: '/light-novel/kdgnk/05/' },
        { title: 'Kumo Desu Ga, Nani Ka? volume 06', path: '/light-novel/kdgnk/06/' },
        { title: 'Kumo Desu Ga, Nani Ka? volume 07', path: '/light-novel/kdgnk/07/' },
        { title: 'Kumo Desu Ga, Nani Ka? volume 08', path: '/light-novel/kdgnk/08/' },
        { title: 'Kumo Desu Ga, Nani Ka? volume 09', path: '/light-novel/kdgnk/09/' },
        { title: 'Kumo Desu Ga, Nani Ka? volume 10', path: '/light-novel/kdgnk/10/' },
        { title: 'Kumo Desu Ga, Nani Ka? volume 11', path: '/light-novel/kdgnk/11/' },
        { title: 'Goblin Slayer', path: '/light-novel/gs/' },
        { title: 'Goblin Slayer volume 01', path: '/light-novel/gs/01/' },
        { title: 'Goblin Slayer volume 02', path: '/light-novel/gs/02/' },
        { title: 'Goblin Slayer volume 03', path: '/light-novel/gs/03/' },
        { title: 'Goblin Slayer volume 04', path: '/light-novel/gs/04/' },
        { title: 'Goblin Slayer volume 05', path: '/light-novel/gs/05/' },
        { title: 'Goblin Slayer volume 06', path: '/light-novel/gs/06/' },
        { title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai', path: '/light-novel/sby/' },
        { title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai volume 01', path: '/light-novel/sby/01/' },
        { title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai volume 02', path: '/light-novel/sby/02/' },
        { title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai volume 03', path: '/light-novel/sby/03/' },
      ],
      home: {
        title: 'Light Novels',
        subTitle: "Currently Reading...",
        text: "Hello there and welcome, I'm Danny Vega and this is my personal website that I have created to share with you one of my favorite hobbies, LIGHT NOVELS, so in GoogleDrive I'll upload the ones that I like (BTW, some do I have finished reading them and others have not)"
      },
      request: {
        title: "Light Novels Requested By...",
        text: "If you'r a Weeb like me just contact me and I'll add u in this section like a weeb user for any LN request you could have, and with that someday I'll upload the .pdf files"
      },
      list: {
        title: "Light Novels List",
      },
      huronrequest: {
        title: 'Sr. Hurón',
        subTitle: "Thicc and LN are Top Tier",},
      lnngnl: {
        title: 'No Game No Life',
        subTitle: "Volumes: 10 of 10",
        text: "Sora and Shiro are two hikikomori step-siblings who are known in the online gaming world as Blank, an undefeated group of gamers. One day, they are challenged to a game of chess by Tet, a god from another reality. The two are victorious and are offered to live in a world that centers around games. They accept, believing it to be a joke, and are summoned to a reality known as Disboard. There, a spell known as the Ten Pledges prevents the citizens of Disboard from inflicting harm on one another, forcing them to resolve their differences by gambling with games whose rules and rewards are magically enforced. In-game, rule enforcement only occurs when the method of cheating is acknowledged and outed by the opponent, allowing players to cheat through discreet methods. Sora and Shiro traverse to Elkia, the nation inhabited by humans, and befriend the duchess Stephanie Dola. Learning about Elkia's decline, the two participate in a tournament to determine the next ruler; after winning the crown, they earn the right to challenge the Disboard's other species as humanity's representative. Their next goal is to conquer all sixteen species in order to challenge Tet to a game; as of the sixth volume, five of the sixteen are under their control."
      },
      lnmushoku: {
        title: 'Mushoku Tensei: Isekai Ittara Honki Dasu',
        subTitle: "Volumes: 24 of 24",
        text: "A 34-year-old Japanese NEET is kicked out of his house following the death of his parents. He intercepts a speeding truck heading towards a group of teenagers and pulls one of them out of the way before dying. Awakening in a baby's body, he realizes he has been reincarnated in a world of sword and sorcery. While initially indulging in his perversion, he resolves to become successful in his new life, discarding his past identity for his new life as Rudeus Greyrat."
      },
      lnkdgnk: {
        title: 'Kumo Desu Ga, Nani Ka?',
        subTitle: "Volumes: 11 of 14...",
        text: "In a world where the battle between Hero and Demon Lord repeated itself time and time again, an enormous space-time spell misfired and hit a certain Japanese high school class on Earth, killing everyone in it. However, guided by what seemed to be a miracle, the students were all reincarnated into that other world. While a handful was fortunate enough to become royalty, nobles, and other kinds of influential people, one girl was not so lucky. Being reborn as a spider monster of the weakest kind in a dungeon filled with vicious beasts, she is forced to experience extreme hardship. Even so, armed with nothing but her human knowledge and overwhelming positivity, she continues to press on and survive against creatures much stronger than herself."
      },
      lngs: {
        title: 'Goblin Slayer',
        subTitle: "Volumes: 06 of 14...",
        text: "In a world of fantasy, adventurers come from far and wide to join the Guild. They complete contracts to earn gold and glory. An inexperienced priestess joins her first adventuring party, but comes into danger after her first contract involving goblins goes wrong. As the rest of her party is either wiped out or taken out of commission, she is saved by a man known as Goblin Slayer, an adventurer whose only purpose is the eradication of goblins with extreme prejudice."
      },
      lnsby: {
        title: 'Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai',
        subTitle: "Volumes: 03 of 11",
        text: "Sakuta Azusagawa's life takes a turn for the unexpected when he meets teenage actress Mai Sakurajima, dressed as a bunny girl, wandering through a library and not being noticed by anyone else there. Mai is intrigued that Sakuta is the only one who can see her, as other people are unable to see her, even when she is dressing normally or attempting to stay away from celebrity life. Calling this phenomenon 'Adolescence Syndrome', Sakuta decides to solve this mystery, while continuing to get closer to Mai and meeting other girls who suffer from 'Adolescence Syndrome' as well."
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
                <Link className="nav-link" to="/light-novel/list/">Novel List</Link>
                <Link className="nav-link" to="/light-novel/request/">Request</Link>
                <Link className="nav-link" to="/light-novel/tier/">Top Tier</Link>
                <Link className="nav-link" to="/light-novel/about/">About</Link>
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
          
        </Container>
      </Router>
      {/*</ThemeProvider>*/}
    
      </div>
    );
  } // Ends render() //

} // Ends class App extends React.Component //

export default App;