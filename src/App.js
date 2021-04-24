import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Jumbotron } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import RequestPage from './pages/RequestPage';
import HuronRequestPage from './pages/HuronRequestPage';
import LNNoGameNoLife from './pages/LNNoGameNoLife';
import LNMushokuTensei from './pages/LNMushokuTensei';
import PDFViewverNGNL01 from './pages/PDFViewver/PDFViewverNGNL01';
import PDFViewverNGNL02 from './pages/PDFViewver/PDFViewverNGNL02';
import PDFViewverNGNL03 from './pages/PDFViewver/PDFViewverNGNL03';
import PDFViewverNGNL04 from './pages/PDFViewver/PDFViewverNGNL04';
import PDFViewverNGNL05 from './pages/PDFViewver/PDFViewverNGNL05';
import PDFViewverNGNL06 from './pages/PDFViewver/PDFViewverNGNL06';
import PDFViewverNGNL07 from './pages/PDFViewver/PDFViewverNGNL07';
import PDFViewverNGNL08 from './pages/PDFViewver/PDFViewverNGNL08';
import PDFViewverNGNL09 from './pages/PDFViewver/PDFViewverNGNL09';
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
        { title: 'Mushoku Tensei: Isekai Ittara Honki Dasu', path: '/light-novel/mushoku/' }
        
      ],
      home: {
        title: 'Light Novels',
        subTitle: "Currently Reading...",
        text: "Hello there and welcome, I'm Danny Vega and this is my personal website that I have created to share with you one of my favorite hobbies, LIGHT NOVELS, so in GoogleDrive I'll upload the ones that I like (BTW, some do I have finished reading them and others have not)"
      },
      request: {
        title: 'Requests From Weebs',
        subTitle: "########",
        text: "If you'r a Weeb like me just contact me and I'll add u in this section for any LN request you could have, and with that someday I'll upload the .pdf files"
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
          
          
        </Container>
      </Router>
    
      </div>
    );
  }
}

export default App;