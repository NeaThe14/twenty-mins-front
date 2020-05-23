import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Auth from './auth';
import 'antd/dist/antd.css';
import { Menu, Typography } from 'antd';
import {
  MessageFilled,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import GlobalState from '../context/GlobalState';

// import './App.css';

const { SubMenu } = Menu;
const { Text } = Typography;
const subMenuStyle = <Text strong='true'>text</Text>;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Header = ({ login, user }) => {
  const history = useHistory();
  const { userData, setUserData } = useContext(GlobalState);

  const register = () => history.push('/register');
  const log = () => history.push('/login');
  const logout = () => {
    history.push('/');
    setUserData({
      token: undefined,
      email: undefined,
    });
    localStorage.setItem('auth-token', '');
  };

  const data = userData.data ? userData.user.name : null;

  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key='mail' icon={<MailOutlined />}>
          <Link style={{ color: '#595959' }} to='/'>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item
          icon={<MessageFilled />}
          disabled={userData.user ? false : true}
          key='alipay'
        >
          <Link to='/chat'>Chat</Link>
        </Menu.Item>
        <SubMenu
          disabled={userData.user ? false : true}
          icon={<SettingOutlined />}
          strong='true'
          title={'Settings'}
        >
          <Menu.ItemGroup title='User Settings'>
            <Menu.Item key='setting:1'>
              <Link
                to={`/profile/${userData.user ? userData.user.name : 'null'}`}
              >
                Profile
              </Link>
            </Menu.Item>
            <Menu.Item key='setting:2'>Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title='Log Settings'>
            <Menu.Item key='setting:3'>Delete Account</Menu.Item>
            <Menu.Item key='setting:4' onClick={logout}>
              Log Out
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item style={{ float: 'right', borderBottom: 'transparent' }}>
          {login ? (
            <Text style={{ textAlign: 'center' }} type='secondary'>
              Welcome {user}
            </Text>
          ) : (
            <Auth />
          )}
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
