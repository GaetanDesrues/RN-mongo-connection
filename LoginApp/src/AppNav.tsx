import React from 'react';
import {SafeAreaView} from 'react-native';
import Login from './Login';
import {useUser} from './components/UserProvider';
import Home from './Home';

function AppNav(): JSX.Element {
  const {user, logout} = useUser();

  return <SafeAreaView>{user ? <Home /> : <Login />}</SafeAreaView>;
}

export default AppNav;
