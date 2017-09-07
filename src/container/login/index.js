
/**
* 有状态组件定义
*/
import React from 'react';
class Login extends React.Component {
constructor(props) {
    super(props);
    this.state = {
     visibe:false
    };
  }
  render() {
    return <h1>Login</h1>;
  }
}
export default Login
