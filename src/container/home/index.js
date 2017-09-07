/**
* 有状态组件定义
*/
import React from 'react';
class Home extends React.Component {
constructor(props) {
    super(props);
    this.state = {
     visibe:false
    };
  }
  render() {
    return <h1>Home</h1>;
  }
}
export default Home
