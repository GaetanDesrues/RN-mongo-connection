import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

function Home(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Oui</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
