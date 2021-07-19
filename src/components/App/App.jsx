import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
// Components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Thankyou from '../Thankyou/Thankyou';

function App() {


//setup will contain the router, routes, and or link to each page
  return (
    <Router>
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
{/*  app will load the first page and then move to the next page through button clicks
 will also add in a back button so that you can change your mind before you get done */}
      <Route path="/" exact>
            <Feeling />
        </Route>
        <Route path="/understanding" exact>
            <Understanding />
        </Route>
        <Route path="/support" exact>
            <Support />
        </Route>
        <Route path="/comments" exact>
            <Comments />
        </Route>
        <Route path="/review" exact>
            <Review />
        </Route>
        <Route path="/Thankyou" exact>
            <Thankyou />
        </Route>
        {/* <Route path="/admin" exact>
            <Admin />
        </Route> */}

    </div>
    </Router>
  );
}

export default App;
