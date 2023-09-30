import { View } from 'react-native'
import React from 'react'
import { styles } from './ScreenProducts.style'
import Header from '../../components/header/Header'
import Products from '../../components/products/Products'
import { useSelector } from 'react-redux'

const ScreenProducts = ({ navigation }) => { 

  const category = useSelector(state => state.shop.categorySelected)

  return (
    <View style={styles.container}>
      <Header title={category}></Header>
      <Products  navigation={navigation}></Products>      
    </View>
  )
}
export default ScreenProducts

