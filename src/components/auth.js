import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Menu, Typography, Button } from 'antd';
import GlobalState from '../context/GlobalState';

export default function Auth() {
  const { userData, setUserData } = useContext(GlobalState);
  const { Text } = Typography;
  const history = useHistory();

  const register = () => {
    history.push('/register');
  };

  const login = () => {
    history.push('/login');
  };

  const logout = () => {
    history.push('/');
    setUserData({
      token: undefined,
      email: undefined,
    });
    localStorage.setItem('auth-token', '');
  };

  return (
    <>
      {userData.user ? (
        <Row>
          <Text>Welcome, {userData.user.name}</Text>
        </Row>
      ) : (
        <Row
          style={{ marginTop: '6px' }}
          gutter={[16, 4]}
          align='middle'
          justify='space-between'
        >
          <Button
            style={{
              marginTop: '4px',
              position: 'relative',
              right: '5px',
              BackgroundColor: 'purple',
            }}
            onClick={register}
            type='primary'
          >
            Register
          </Button>
          <Button type='primary' style={{ marginTop: '4px' }} onClick={login}>
            Log In
          </Button>
        </Row>
      )}
    </>
  );
}
