import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../Theme/appTheme'
import { useNavigation } from '@react-navigation/native'

export const Pagina2Screen = () => {
const {navigate} = useNavigation()

  return (
    <View style={styles.globalmargin}>
    <Text style={styles.titleScreens}>Pagina2 Screen</Text>
    
    <Button title="Ir a Pagina 3" onPress={() => navigate('Pagina3Screen' as never) } />
    </View>
  )
}
