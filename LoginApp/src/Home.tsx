import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useUser} from './components/UserProvider';

function Home(): JSX.Element {
  const {user, logout} = useUser();

  return (
    <SafeAreaView>
      <Text>Welcome {user}</Text>
    </SafeAreaView>
  );
}

export default Home;
