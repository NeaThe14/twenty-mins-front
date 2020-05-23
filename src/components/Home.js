import React, { useContext, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Typography, Col } from 'antd';
import GlobalState from '../context/GlobalState';

const { Title } = Typography;

const Home = () => {
  const { userData, setUserData } = useContext(GlobalState);
  console.log(userData);

  return (
    <div>
      <Col offset={9} span={5}>
        <Title>Home</Title>
        <Title style={{ textTransform: 'capitalize' }} level={3}>
          {userData.user ? `Welcome ${userData.user.name}` : 'Вход не выполнен'}
        </Title>
      </Col>
    </div>
  );
};

export default Home;
