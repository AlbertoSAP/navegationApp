import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../Theme/appTheme';

export const SettingsScreen = () => {
  // Hook para evitar pegarse en la parte de Arriva en ios
  const insets =   useSafeAreaInsets();

  return (
    <View style={{
     ...styles.globalmargin
    ,marginTop: insets.top + 10}}>
    <Text style={styles.titleScreens}>Settings Screen</Text>
        
    </View>
  )
}
