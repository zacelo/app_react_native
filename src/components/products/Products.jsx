import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { styles } from './Products.style'
import { useDispatch, useSelector } from 'react-redux'
import { setProductIdSelected } from '../../features/shop/ShopSlice'

const Products = ({ navigation }) => { 

  const productsFilter = useSelector(state => state.shop.productFilterByCategories)
  const dispach = useDispatch()

  return (
    <FlatList
      data={productsFilter}
      numColumns={2}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Pressable style={styles.containerProduct} onPress={() => { 
          dispach(setProductIdSelected(item))         
          navigation.navigate('Detalle')
        }}>
          <View style={styles.cardProduct}>
            <Image
              style={styles.img}
              source={{
                uri: `${item.imagen}`
              }}>
            </Image>
            <Text style={styles.cardText}>{item.nombre}</Text>
            <Text style={styles.priceText}>$ {item.precio}</Text>
          </View>
        </Pressable>
      )}
    />
  )
}

export default Products

