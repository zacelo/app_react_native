import { View } from 'react-native'
import React from 'react'
import { styles } from '../screenProducts/ScreenProducts.style' 
import Header from '../../components/header/Header'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'


const ScreenHome = ({ navigation }) => {
  return (

    <View>
      <Header title={'Nuestro menú'} ></Header>
      <Categories navigation={navigation}></Categories>      
      <Footer></Footer>      
    </View>
  )
}

export default ScreenHome

