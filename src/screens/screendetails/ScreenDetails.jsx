import { View } from 'react-native'
import React from 'react'
import ProductsDetails from '../../components/productsDetails/ProductsDetails'
import Header from '../../components/header/Header'


const ScreenDetails = ({route}) => {

 const { item } = route.params

  return (
    <View>
      <Header title={item.nombre}></Header>
      <ProductsDetails product={item} ></ProductsDetails>
    </View>
  )
}

export default ScreenDetails

