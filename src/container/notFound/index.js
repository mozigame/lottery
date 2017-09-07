/**
* 有状态组件定义
*/
import React from 'react';
class NotFound extends React.Component {
constructor(props) {
    super(props);
    this.state = {
     visibe:false
    };
  }
  render() {
    return <h1>404</h1>;
  }
}
export default NotFound
