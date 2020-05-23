import React, { useState, useContext } from 'react';
import {
  BroswerRouter as Router,
  Redirect,
  Link,
  useHistory,
} from 'react-router-dom';
import Home from './Home';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { Form, Input, Button } from 'antd';
import { Col } from 'antd';
import GlobalState from '../context/GlobalState';

const { Title } = Typography;

const Login = ({}) => {
  const [email, setEmail] = useState();
  const [pwd, setPassValue] = useState();

  const { setUserData } = useContext(GlobalState);
  const history = useHistory();

  const loginUser = async (e) => {
    const config = {
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const userInfo = { email, pwd };
      const res = await axios.post('/auth', userInfo, config);
      setUserData({
        token: res.data.token,
        user: res.data.user,
      });
      console.log(res.data);
      localStorage.setItem('auth-token', res.data.token);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ margin: '15px 0' }}>
      <Col offset={9} span={5}>
        <Title level={2}>Login</Title>
        <Form
          onFinish={loginUser}
          labelCol={8}
          wrapperCol={16}
          layout={'vertical'}
        >
          <Form.Item
            label='Email'
            name='email'
            id='email'
            rules={[
              {
                required: true,
                message: 'Данное поле необходимо заполнить',
              },
            ]}
          >
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='text'
            />
          </Form.Item>

          <Form.Item
            label='Password'
            name='pwd'
            id='pwd'
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input
              value={pwd}
              onChange={(e) => setPassValue(e.target.value)}
              type='password'
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Title level={4}>
          Still have no account? <Link to='/register'>Register</Link>{' '}
        </Title>
      </Col>
    </div>
  );
};

export default Login;
