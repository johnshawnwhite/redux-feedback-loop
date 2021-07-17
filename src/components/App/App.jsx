import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
// pages
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';


function App() {
//setup will contain the router, routes, and or link to each page
  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route exact path="/">
            <Feeling />
        </Route>
        <Route path="/understanding">
            <Understanding />
        </Route>
        <Route path="/support">
            <Support />
        </Route>
        <Route path="/comments">
            <Comments />
        </Route>
    </div>
    </Router>
  );
}

export default App;
