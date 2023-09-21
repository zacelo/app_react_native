import { View } from 'react-native'
import React from 'react'
import { styles } from './Card.style'

const Card = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>{children}</View>
  )
}

export default Card

