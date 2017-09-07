import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import './App.css';
import { Button } from 'antd';
import Home from './container/home/index.js';
import WrappedNormalLoginForm from './container/login/index.js';
import NotFound from './container/notFound/index.js';
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
        <Switch>
          <Route exact path="/" component={WrappedNormalLoginForm}/>
          <Route path="/Home" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
