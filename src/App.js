import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Jumbotron } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import LNNoGameNoLife from './pages/LNNoGameNoLife';
import logo from './assets/images/logo.png'

class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: 'Light Novels',
      headerLinks: [
        { title: 'Home', path: '/light-novel/' },
        { title: 'Novel List', path: '/light-novel/list' },
        { title: 'Top Tier', path: '/light-novel/tier' },
        { title: 'About', path: '/light-novel/about' },
        { title: 'No Game No Life', path: '/light-novel/ngnl' }
      ],
      home: {
        title: 'Light Novels',
        subTitle: "Currently Reading...",
        text: "Hello there and welcome, I'm Danny Vega and this is my personal website that I have created to share with you one of my favorite hobbies, LIGHT NOVELS, so in GoogleDrive I'll upload the ones that I like (BTW, some do I have finished reading them and others have not)"
      },
      lnngnl: {
        title: 'No Game No Life',
        subTitle: "Volumes: 9 of 10",
        text: "Sora and Shiro are two hikikomori step-siblings who are known in the online gaming world as Blank, an undefeated group of gamers. One day, they are challenged to a game of chess by Tet, a god from another reality. The two are victorious and are offered to live in a world that centers around games. They accept, believing it to be a joke, and are summoned to a reality known as Disboard. There, a spell known as the Ten Pledges prevents the citizens of Disboard from inflicting harm on one another, forcing them to resolve their differences by gambling with games whose rules and rewards are magically enforced. In-game, rule enforcement only occurs when the method of cheating is acknowledged and outed by the opponent, allowing players to cheat through discreet methods. Sora and Shiro traverse to Elkia, the nation inhabited by humans, and befriend the duchess Stephanie Dola. Learning about Elkia's decline, the two participate in a tournament to determine the next ruler; after winning the crown, they earn the right to challenge the Disboard's other species as humanity's representative. Their next goal is to conquer all sixteen species in order to challenge Tet to a game; as of the sixth volume, five of the sixteen are under their control."
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
                <Link className="nav-link" to="/light-novel/list">Novel List</Link>
                <Link className="nav-link" to="/light-novel/tier">Top Tier</Link>
                <Link className="nav-link" to="/light-novel/about">About</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/light-novel/" exact render={() => 
            <HomePage title={this.state.home.title} 
                      subTitle={this.state.home.subTitle} 
                      text={this.state.home.text} />} />
          <Route path="/light-novel/ngnl/" exact render={() => 
            <LNNoGameNoLife title={this.state.lnngnl.title}
                            subTitle={this.state.lnngnl.subTitle} 
                            text={this.state.lnngnl.text} />} />
          
        </Container>
      </Router>
    
      </div>
    );
  }
}

export default App;