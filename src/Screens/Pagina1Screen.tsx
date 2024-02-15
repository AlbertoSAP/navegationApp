import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../Theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  const handleClick = () => {
    navigation.navigate('Pagina2Screen');
  };

  return (
    <View style={styles.globalmargin}>
      <Text style={styles.titleScreens}>Pagina1 Screen</Text>
      <View style={{marginBottom:10}}>
        <Button title="Ir a Pagina 2" onPress={() => handleClick()} />
      </View>

      <View style={{flexDirection:"row",justifyContent:"center"}}>
        <TouchableOpacity
          style={{
            ...styles.buttonStyle,
            ...styles.contentFullCenter,
            backgroundColor: 'purple',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: '1',
              name: 'Pedro',
            })
          }>
          <Text style={styles.subtitleScreens}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.buttonStyle,
            ...styles.contentFullCenter,
            backgroundColor: 'red',
          }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: '2',
              name: 'Marcela',
            })
          }>
          <Text style={styles.subtitleScreens}>Marcela</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Empesando en el video 1
