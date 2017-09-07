import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

import Home from './container/home/index.js';
import Login from './container/login/index.js';
import NotFound from './container/notFound/index.js';
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/Home">Home</Link></li>
          </ul>
          <hr/>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/Home" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
