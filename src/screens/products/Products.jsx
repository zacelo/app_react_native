import { FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Products.style'
import { products } from '../../data/Products.data'
import Header from '../../components/header/Header'


const Products = ({ route }) => {

  const { category } = route.params

  const productsFilter = products.filter(item => item.categoria === category.item.category)
  console.log(productsFilter)

  return (
    <View style={styles.container}>
      <Header title={category.item.category}></Header>
      <FlatList
        data={productsFilter}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

          <View style={styles.containerProduct}>

            <View style={styles.cardProduct}>
              <Text>{item.nombre}</Text>
              <Image
               style={styles.img}
                source={{
                  uri: `${item.imagen}`,
                }}>
              </Image>
            </View>

          </View>

        )}

      />
    </View>
  )
}

export default Products

