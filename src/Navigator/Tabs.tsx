import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../Screens/Tab1Screen';
import {Tab2Screen} from '../Screens/Tab2Screen';
// import { Tab3Screen } from '../Screens/Tab3Screen';
import {StackNavigator} from './StackNavigator';
import {colores, styles} from '../Theme/appTheme';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white' /**Fondo de las Screen en los Tabs */,
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor:
          colores.primary /**Color de los textos del Tab */,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0 /***La elevacion quita el color gris del pie de los tabs */,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color, focused,size}) => {
          let iconName: string = ''
          switch (route.name) {
            case 'Tab1Screen':
              
            case 'Tab2Screen':

            case 'StackNavigator':
              break;
          
            default:
              break;
          }
          return <Text>T1</Text>;
        },
      })}>
      {/* PODEMOS COLOCAR EL ICONO DIRECTAMENTE EN NUESTRAS TAB COMO SE MUESTRA A CONTINUACIO O HACERLO */}
      {/* DIRECTAMENTE EN Tab.Navigator */}
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1', 
        tabBarIcon:(props) => <Text style={{color:props.color}}>Tab1</Text>}}
        component={Tab1Screen}
      /> */}
      {/* END */}
      <Tab.Screen
        name="Tab1Screen"
        options={{title: 'Tab 1'}}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{title: 'Tab 2'}}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Navegacion'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
