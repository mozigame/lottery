/**
* 有状态组件定义
*/
import React from 'react';
class Finish extends React.Component {
constructor(props) {
    super(props);
    this.state = {
     visibe:false
    };
  }
  render() {
    return <h1>Finish</h1>;
  }
}
export default Finish
