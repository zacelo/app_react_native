import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { styles } from './Products.style'
import { useDispatch, useSelector } from 'react-redux'
import { setProductIdSelected } from '../../features/shop/ShopSlice'
import { useGetProductsByCategoryQuery } from '../../services/ShopApi'
import Spinner from '../spinner/Spinner'

const Products = ({ navigation }) => { 

  const dispach = useDispatch()
  const category = useSelector(state => state.shop.categorySelected)
  const {data, isLoading} = useGetProductsByCategoryQuery(category)

  return (
    <>
    {
      isLoading 
      ?<Spinner></Spinner>
      :<FlatList
      data={Object.values(data)}
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
    }
     
    </>

    
   
  )
}

export default Products

