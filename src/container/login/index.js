
/**
* 有状态组件定义
*/
import React from 'react';
import { Layout,Form, Icon, Input, Button, Checkbox } from 'antd';
import './index.css';
import severice from '../../utils/fetch.js';
const { Header, Footer, Sider, Content } = Layout;
const FormItem = Form.Item;
class Login extends React.Component {
constructor(props) {
    super(props);
    this.state = {
     userName:'',
     password:'',
     email:null,
     vaildataCode:'',
     onSatus:'login', //当前页面状态
     loginHelp:'',//提交错误描述
     confirmDirty:false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {onSatus} = this.state;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values,777)
        switch (onSatus) {
          case 'login':
            this.login(values)
            break;
            case 'register':
            const params = {userName:values.userName,password:values.password,email:values.email}
            this.register(params);
            break;
          default:
            return false
        }

        console.log('Received values of form: ', values);
      }
    });
  }
  login = (params)=>{ //登录请求
    severice('http://192.168.0.113:8080/login',{
       method:'post',
       body:JSON.stringify(params),
       headers: {
                 'Content-Type': 'application/json'
             }
     }).then(({data})=>{
       if(data.code === '0000'){
         const router = setTimeout(this.props.history.replace('/'),2000);
         this.props.history.replace('/home')
       }else{
         this.setState({loginHelp:data.message});
       }
     });
  }
  register = (params)=>{
    severice('http://192.168.0.113:8080/register',{
       method:'post',
       body:JSON.stringify(params),
       headers: {
                 'Content-Type': 'application/json'
             }
     }).then(({data})=>{
       if(data.code === '0000'){
         const router = setTimeout(this.props.history.replace('/'),2000);
        this.changeStatus('login')
       }else{
         this.setState({loginHelp:data.message});
       }
     });
  }
  changeStatus = (status)=>{
    this.setState({onSatus:status,loginHelp:'',});

  }
  checkPassword = (rule, value, callback) => {//验证密码
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  handleConfirmBlur = (e) => {
  const value = e.target.value;
  this.setState({ confirmDirty: this.state.confirmDirty || !!value });
}
  render() {
    const { getFieldDecorator } = this.props.form;
    const {loginHelp,onSatus} = this.state;
    return (<Layout className='Layout'>
      <Header className='LayoutHeader'>Header</Header>
      <Content className='LayoutContent'>
      <div className='loginForm'>
      <Form onSubmit={this.handleSubmit} className="login-form">
      {onSatus === 'register' && <FormItem
          hasFeedback
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="邮箱地址"/>
          )}
        </FormItem>
      }
      <FormItem
        hasFeedback
      >
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: '请输入你的用户名!' }],
        })(
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
        )}
      </FormItem>
      <FormItem
        hasFeedback
      >
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入你的密码!' }],
        })(
          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
        )}
      </FormItem>
      {onSatus === 'register' &&
        <FormItem
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: 'Please confirm your password!',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="再次输入密码" onBlur={this.handleConfirmBlur}/>
          )}
        </FormItem>
      }
      <FormItem>
      {loginHelp && <p style={{color:'red'}}>{loginHelp}</p>}
      <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
      {onSatus === 'login' && <a>登录</a>}
      {onSatus === 'register' && <a>注册</a>}
      </Button>
      {onSatus === 'login' && (<p><a>忘记密码</a>/<a onClick={this.changeStatus.bind(this,'register')}>注册账号</a></p>)}
      {onSatus === 'register' && <a onClick={this.changeStatus.bind(this,'login')}>登录</a>}
      </FormItem>
    </Form>
    </div>
      </Content>
      <Footer className='LayoutFooter'>Footer</Footer>
    </Layout>);
  }
}
const WrappedNormalLoginForm = Form.create()(Login)
export default WrappedNormalLoginForm
