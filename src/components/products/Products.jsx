import { View,Text, FlatList, Image,Pressable} from 'react-native'
import React, { useEffect, useState } from 'react'
import { products } from '../../data/Products.data'
import { styles } from './Products.style'


const Products = ({category,navigation}) => {

    const [productsFilter, setProductsFilter] = useState([])

    useEffect(() => {
        setProductsFilter(products.filter(item => item.categoria === category.item.category)) 
    }, [category])

  return ( 
    
    <FlatList
        data={productsFilter}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (

          <Pressable style={styles.containerProduct} onPress={()=> navigation.navigate('Detalle',{item})}>

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

