import { View,Text, FlatList, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { products } from '../../data/Products.data'
import { styles } from './Products.style'


const Products = ({category}) => {

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

          <View style={styles.containerProduct}>

            <View style={styles.cardProduct}>
            
              <Image
               style={styles.img}
                source={{
                  uri: `${item.imagen}`,
                }}>
              </Image>
              <Text style={styles.cardText}>{item.nombre}</Text>
            </View>
          </View>
        )}
      /> 
    
  )
}

export default Products

