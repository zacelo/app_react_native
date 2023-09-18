import { View } from 'react-native'
import React from 'react'
import { styles } from './Home.style'
import Header from '../../components/header/Header'
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer'


const Home = ({ navigation }) => {
  return (

    <View>
      <Header title={'Home'} ></Header>
      <Categories navigation={navigation}></Categories>      
      <Footer></Footer>      
    </View>
  )
}

export default Home

