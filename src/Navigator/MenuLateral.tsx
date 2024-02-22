import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';

import {SettingsScreen} from '../Screens/SettingsScreen';
import {Image, Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import {styles} from '../Theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  // Para saber el Tamaño de la pantalla y esconder o dejar estatica el Drawer
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: width >= 608 ? 'permanent' : 'front'}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
// quede en video 115

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn0.iconfinder.com/data/icons/communication-456/24/account_profile_user_contact_person_avatar_placeholder-512.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/** Opciones de Menu  */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Tabs")}
        >
         <Text style={styles.titleScreens}>Navegacion </Text> 
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate("SettingsScreen")}
        >
         <Text style={styles.titleScreens}>Settings</Text> 
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
//  comenzando video 116
