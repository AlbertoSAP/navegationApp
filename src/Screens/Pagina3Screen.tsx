import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalmargin}>
    <Text style={styles.titleScreens}>Pagina3 Screen</Text>
    <View style={styles.buttonStyle}>
    <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
    
    <Button title="Ir al Home" onPress={() => navigation.popToTop()} />
    </View>
  )
}
