import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1Screen} from '../Screens/Pagina1Screen';
import {Pagina2Screen} from '../Screens/Pagina2Screen';
import {Pagina3Screen} from '../Screens/Pagina3Screen';
import {PersonScreen} from '../Screens/PersonScreen';

interface IPerson {
  id: number;
  name: string;
}

// Definir desde Aca las rutas que necesitan parametro y las que no necesitan
export type RootStackParam = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonScreen: IPerson;
};

const Stack = createStackNavigator<RootStackParam>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName='Pagina2Screen'
      screenOptions={{
        headerStyle: {elevation: 0, shadowColor: 'transparent'},
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Página 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Página 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Página 3'}}
        component={Pagina3Screen}
      />
      <Stack.Screen
        name="PersonScreen"
        options={{title: 'Persona'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};
