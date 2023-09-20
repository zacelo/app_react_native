import { Text, View } from 'react-native'
import React from 'react'
import ProductsDetais from '../../components/productsDetails/ProductsDetails'
import Header from '../../components/header/Header'


const ScreenDetails = ({route}) => {

 const { item } = route.params

  return (
    <View>
      <Header title={item.nombre}></Header>
      <ProductsDetais product={item}></ProductsDetais>
    </View>
  )
}

export default ScreenDetails

