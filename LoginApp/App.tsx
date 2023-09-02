import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNav from './src/AppNav';
import {UserProvider} from './src/components/UserProvider';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <UserProvider>
        <AppNav />
      </UserProvider>
    </SafeAreaView>
  );
}

export default App;
