import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../Theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any> {}

// Para el Menu Lateral DrawerScreenProps
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  
  // useEffect
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalmargin}>
      <Text style={styles.titleScreens}>Pagina3 Screen</Text>
      <View style={{marginBottom:10}}>
        <Button title="Regresar" onPress={() => navigation.goBack()} />
      </View>

      <Button
        title="Ir al Home"
        onPress={() => navigation.navigate('Pagina1Screen')}
      />
    </View>
  );
};
