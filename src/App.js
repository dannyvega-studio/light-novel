import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Jumbotron } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import RequestPage from './pages/RequestPage';
import HuronRequestPage from './pages/HuronRequestPage';
import LNNoGameNoLife from './pages/LNNoGameNoLife';
import PDFViewverNGNL01 from './pages/PDFViewver/PDFViewverNGNL01';
import PDFViewverNGNL02 from './pages/PDFViewver/PDFViewverNGNL02';
import PDFViewverNGNL03 from './pages/PDFViewver/PDFViewverNGNL03';
import PDFViewverNGNL04 from './pages/PDFViewver/PDFViewverNGNL04';
import PDFViewverNGNL05 from './pages/PDFViewver/PDFViewverNGNL05';
import PDFViewverNGNL06 from './pages/PDFViewver/PDFViewverNGNL06';
import PDFViewverNGNL07 from './pages/PDFViewver/PDFViewverNGNL07';
import PDFViewverNGNL08 from './pages/PDFViewver/PDFViewverNGNL08';
import PDFViewverNGNL09 from './pages/PDFViewver/PDFViewverNGNL09';
import LNMushokuTensei from './pages/LNMushokuTensei';
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
import logo from './assets/images/logo.png'

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
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/24/' }
      ],
      home: {
        title: 'Light Novels',
        subTitle: "Currently Reading...",
        text: "Hello there and welcome, I'm Danny Vega and this is my personal website that I have created to share with you one of my favorite hobbies, LIGHT NOVELS, so in GoogleDrive I'll upload the ones that I like (BTW, some do I have finished reading them and others have not)"
      },
      request: {
        title: "Weeb's Requests",
        subTitle: "My friends list",
        text: "If you'r a Weeb like me just contact me and I'll add u in this section like a weeb user for any LN request you could have, and with that someday I'll upload the .pdf files"
      },
      huronrequest: {
        title: 'Sr. Hurón',
        subTitle: "Thicc and LN are Top Tier",},
      lnngnl: {
        title: 'No Game No Life',
        subTitle: "Volumes: 9 of 10",
        text: "Sora and Shiro are two hikikomori step-siblings who are known in the online gaming world as Blank, an undefeated group of gamers. One day, they are challenged to a game of chess by Tet, a god from another reality. The two are victorious and are offered to live in a world that centers around games. They accept, believing it to be a joke, and are summoned to a reality known as Disboard. There, a spell known as the Ten Pledges prevents the citizens of Disboard from inflicting harm on one another, forcing them to resolve their differences by gambling with games whose rules and rewards are magically enforced. In-game, rule enforcement only occurs when the method of cheating is acknowledged and outed by the opponent, allowing players to cheat through discreet methods. Sora and Shiro traverse to Elkia, the nation inhabited by humans, and befriend the duchess Stephanie Dola. Learning about Elkia's decline, the two participate in a tournament to determine the next ruler; after winning the crown, they earn the right to challenge the Disboard's other species as humanity's representative. Their next goal is to conquer all sixteen species in order to challenge Tet to a game; as of the sixth volume, five of the sixteen are under their control."
      },
      lnmushoku: {
        title: 'Mushoku Tensei: Isekai Ittara Honki Dasu',
        subTitle: "Volumes: 24 of 24",
        text: "A 34-year-old Japanese NEET is kicked out of his house following the death of his parents. He intercepts a speeding truck heading towards a group of teenagers and pulls one of them out of the way before dying. Awakening in a baby's body, he realizes he has been reincarnated in a world of sword and sorcery. While initially indulging in his perversion, he resolves to become successful in his new life, discarding his past identity for his new life as Rudeus Greyrat."
      }
    }
  }

render() {
  return (
    <div className="App bg">

      <Router>
        <Container className="p-0 pt-4 pb-4" fluid={false}>

          <Jumbotron className="mb-2 mt-2 border jumbotron-bg"></Jumbotron>
          
          <Navbar className="border border-bottom navbar-dark bg-dark sticky-top mb-2" expand="lg">
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
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/light-novel/" exact render={() => 
            <HomePage title={this.state.home.title} 
                      subTitle={this.state.home.subTitle} 
                      text={this.state.home.text} />} />
          <Route path="/light-novel/request/" exact render={() => 
            <RequestPage title={this.state.request.title}
                            subTitle={this.state.request.subTitle} 
                            text={this.state.request.text} />} />
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
          
        </Container>
      </Router>
    
      </div>
    );
  }
}

export default App;