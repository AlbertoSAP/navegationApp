import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';


// import { MenuLateralBasico } from './src/Navigator/MenuLateralBasico';
import { MenuLateral } from './src/Navigator/MenuLateral';
import { Tabs } from './src/Navigator/Tabs';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico/> */}
      <MenuLateral/>
      {/* <Tabs/> */}
    </NavigationContainer>
  
  );
};

export default App;


