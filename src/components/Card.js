import React, { useContext, useEffect, useState } from 'react';
import { Card, Avatar, Row, Typography, Form, Col } from 'antd';
import {
  BrowserRouter,
  Redirect,
  Link,
  useHistory,
  Route,
} from 'react-router-dom';
import GlobalState from '../context/GlobalState';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Meta } = Card;

const Kard = ({ user }) => {
  const { userData, setUserData } = useContext(GlobalState);

  const data = userData.user ? userData.user.name : null;

  const handleClick = (e) => {
    console.log(user.name);
  };

  return (
    <Row align='middle' span={2} justify={'center'} gutter={[12, 8]}>
      <Col
        xs={{ span: 5, offset: 1 }}
        lg={{ span: 5, offset: 2 }}
        flex={3}
        style={{ margin: '0px 10px' }}
        span={2}
      >
        {user.name === data ? null : (
          <Card
            onClick={handleClick}
            hoverable
            style={{ width: 200 }}
            cover={
              <img
                alt='example'
                src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              />
            }
            actions={[
              <SettingOutlined key='setting' />,
              <EditOutlined key='edit' />,
              <EllipsisOutlined key='ellipsis' />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              }
              title={user.name}
              description='This is the description'
            />

            <Link to={`/chatroom/${userData.user ? user.name : 'null'}`}>
              Chat
            </Link>
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default Kard;
