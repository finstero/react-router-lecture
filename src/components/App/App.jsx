import React from 'react';
import './App.css';

import { Route, HashRouter as Router, Link } from 'react-router-dom';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';


// if url matches /animals, show animals, etc.
// basically big conditional render 
function App() {
// don't do history things before router is made

  return (
    <Router>
      <div className="App">
        <h1>SPAs!</h1>
        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/animals">ANIMALS</Link></li>
            <li><Link to="/plants">PLANTS</Link></li>
          </ul>
        </nav>
        <Route path="/animals">
          <Animals />
        </Route>
        <Route path="/plants">
          <Plants />
        </Route>
        <Route path="/" exact>
         <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
