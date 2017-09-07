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
import { Layout, Menu, Breadcrumb, Icon,Button } from 'antd';
import './index.css';
import LiveScore from './LiveScore/index.js';
import Finish from './Finish/index.js';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component {
constructor(props) {
    super(props);
    this.state = {
     visibe:false
    };
  }
  render() {
    return (  <Router><Layout className='homeLayout'>
    <Header className="header">
      <div className="homelogo"><Icon type="smile-o" /></div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">首页</Menu.Item>
        <Menu.Item key="2"><Link to='/home'>比分</Link></Menu.Item>
        <Menu.Item key="3">赛事推荐</Menu.Item>
      </Menu>
    </Header>
    <Content className='homeContent'>

      <Layout style={{ padding: '24px 0', background: '#fff' }}>

        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <div className='homeOpertion'>
                    <Button type="primary"><Link to='/home/livescore'>即时比分</Link></Button>&nbsp;&nbsp;
                    <Button type="primary"><Link to='/home/notstarted'>未开始</Link></Button>&nbsp;&nbsp;
                    <Button type="primary"><Link to='/home/Finish'>完场</Link></Button>
                </div>
          <Switch>
            <Route exact path="/home/livescore" component={LiveScore}/>
            <Route exact path="/home/finish" component={Finish}/>
            <Route component={LiveScore}/>
          </Switch>

        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
  </Router>);
  }
}
export default Home
