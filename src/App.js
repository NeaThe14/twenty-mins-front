import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Browser, Route, BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import GlobalState from './context/GlobalState';
import Axios from 'axios';
import io from 'socket.io-client';
import Chat from './components/Chat';
import Profile from './components/Profile';
import ChatRoom from './components/ChatRoom';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  const [settings, setSettings] = useState('');

  useEffect(() => {
    const checkLogsIn = async () => {
      let token = localStorage.getItem('auth-token');
      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }

      const config = { headers: { 'x-auth-token': token } };

      const tokenRes = await Axios.post('/tokenIsValid', null, config);
      console.log(tokenRes);

      if (tokenRes.data) {
        const resUser = await Axios.get('/authenticate', config);

        console.log(token);
        console.log(resUser.data.user);
        setUserData({ token: token, user: resUser.data.user });
        console.log(userData);
      }

      console.log(tokenRes.data);
    };

    checkLogsIn();
  }, []);
  console.log(userData);
  return (
    <GlobalState.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />;
          <Route path='/register' component={Register} />
          <Route path='/chat' component={Chat} />
          <Route path='/profile' component={Profile} />
          <Route path='/chatroom' component={ChatRoom} />
        </Switch>
      </BrowserRouter>
    </GlobalState.Provider>
  );
}

export default App;
