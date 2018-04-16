import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Races from './Races';
import './app.scss';
export default props =>
<BrowserRouter>
  <div className="app">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/races">Races</Link></li>
    </ul>

    <hr/>

    <Route exact path="/" component={Home}/>
    <Route path="/races" component={Races}/>
    <Route path="/team" component={Home}/>
  </div>
</BrowserRouter>
