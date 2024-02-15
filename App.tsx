import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import { styles } from './src/Theme/appTheme';
import { View } from 'react-native';
import { MenuLateralBasico } from './src/Navigator/MenuLateralBasico';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <MenuLateralBasico/>
    </NavigationContainer>
  
  );
};

export default App;


