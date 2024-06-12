/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {HomeScreen} from './HomeScreen';
import {ChallengesStackScreen} from './ChallengesStackScreen';

// const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ChallengesStackScreen />
      {/* <Stack.Navigator initialRouteName={'AppStartupLoading'}>
        <Stack.Screen name={'AppHome'} component={HomeScreen} />
        <Stack.Screen name={'AppHome'} component={HomeScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
