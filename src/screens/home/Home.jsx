import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './Home.style'
import Header from '../../components/header/Header'
import Categories from '../../components/categories/Categories'

const Home = () => {
  return (
    <View>
      <Header title={'Home'}></Header>
      <Categories></Categories>
    </View>
  )
}

export default Home

