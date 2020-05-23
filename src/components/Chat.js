import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Route, Router } from 'react-router-dom';
import { Card, Row, Typography, Form } from 'antd';
import GlobalState from '../context/GlobalState';
import io from 'socket.io-client';
import Axios from 'axios';
import Kard from './Card';

const Chat = () => {
  const { userData, setUserData } = useContext(GlobalState);
  const [userz, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const { Title } = Typography;

  useEffect(() => {
    const server = 'http://localhost:9000';

    const socket = io(server);

    const users = Axios.get('/users').then((res) => setUsers(res.data));
  }, []);

  console.log(userz);

  return (
    <>
      <Title>Chat</Title>
      <Row>
        {userz.map((user) => {
          return <Kard key={user.name} user={user} />;
        })}
      </Row>
    </>
  );
};

export default Chat;
