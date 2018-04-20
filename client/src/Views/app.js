import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Races from './Races';
import Stats from './StatRoller';
import './app.scss';
export default props =>
<BrowserRouter>
  <div className="app">

    <hr/>

    <Route exact path="/" component={Stats}/>
    <Route path="/races" component={Races}/>
    <Route path="/stats" component={Stats}/>
    <Route path="/team" component={Home}/>
  </div>
</BrowserRouter>
