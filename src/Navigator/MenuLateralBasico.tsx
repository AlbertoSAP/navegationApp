import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../Screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const  MenuLateralBasico = () => {
  // Para saber el Tamaño de la pantalla y esconder o dejar estatica el Drawer
  const {width} = useWindowDimensions();
  
  return (
    <Drawer.Navigator
    screenOptions={{drawerType: width >= 608 ? 'permanent' : 'front'}}
    
    >
      <Drawer.Screen name="StackNavigator" options={{title:"Home"}} component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" options={{title: "Settings"}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
// quede en video 