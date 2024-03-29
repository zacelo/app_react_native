import { View } from 'react-native'
import React from 'react'
import ProductsDetails from '../../components/productsDetails/ProductsDetails'
import Header from '../../components/header/Header'
import { useSelector } from 'react-redux'

const ScreenDetails = ({navigation}) => { 

  const item = useSelector(state => state.shop.productIdSelected)

  return (
    <View>
      <Header title={item.nombre}></Header>
      <ProductsDetails product={item} navigation={navigation}></ProductsDetails>
    </View>
  )
}

export default ScreenDetails

