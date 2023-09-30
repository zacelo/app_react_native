import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './Header.style'

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>{ title }</Text>
      </View>     
    </View>
  )
}
export default Header

