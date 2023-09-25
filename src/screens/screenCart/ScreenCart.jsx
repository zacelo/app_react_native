import { Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'
import Cart from '../../components/cart/Cart'

const ScreenCart = () => {
  return (
    <>
      <Header title={'Carrito'}></Header>
      <Cart></Cart>
    </>
  )
}

export default ScreenCart

