import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
// pages
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comments/Comments';


function App() {
//setup will contain the router, routes, and or link to each page
  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route path="/" exact>
            <Feeling />
        </Route>
        <Route path="/customer" exact>
            <Understanding />
        </Route>
        <Route path="/checkout" exact>
            <Support />
        </Route>
        <Route path="/admin" exact>
            <Comments />
        </Route>
    </div>
    </Router>
  );
}

export default App;
