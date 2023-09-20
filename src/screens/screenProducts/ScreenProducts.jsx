import { View } from 'react-native'
import React from 'react'
import { styles } from './ScreenProducts.style'
import Header from '../../components/header/Header'
import Products from '../../components/products/Products'


const ScreenProducts = ({ navigation, route }) => {

  const { category } = route.params  

  return (
    <View style={styles.container}>
      <Header title={category.item.category}></Header>
      <Products category={category} navigation={navigation}></Products>      
    </View>
  )
}
export default ScreenProducts

