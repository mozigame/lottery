/**
* 有状态组件定义
*/
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import { Button } from 'antd';
class LiveScore extends React.Component {
constructor(props) {
    super(props);
    this.state = {
     visibe:false
    };
  }
  render() {
    return      (<div> <h1>LiveScore</h1></div>) ;
  }
}
export default LiveScore
