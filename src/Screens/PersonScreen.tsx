import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import { RootStackParam } from '../Navigator/StackNavigator';

// interface RouterParams{
//   id:number;
//   name:string;
// }

interface Props extends StackScreenProps<RootStackParam,"PersonScreen" > {}

export const PersonScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouterParams
  const params = route.params;

  useEffect(() => {
   navigation.setOptions({
    title:params.name 
   })
  }, [])
  

  return (
    <View style={styles.globalmargin}>
      <Text style={styles.titleScreens}>{JSON.stringify(params,null,3)}</Text>
    </View>
  );
};
