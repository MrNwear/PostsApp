import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Home from '../Screens/Home';
import PostDetails from '../Screens/PostDetails';
import SplashScreen from '../Screens/SplashScreen';
import {PostType} from '../Utils/types';

export type HomeStackNavigatorParams = {
  Home: {identifier: string} | undefined;
  PostDetails: {identifier: string} | {post: PostType} | undefined;
  Splash: {identifier: string} | undefined;
};
const stack = createStackNavigator<HomeStackNavigatorParams>();
const AppContainer = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="PostDetails" component={PostDetails} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
