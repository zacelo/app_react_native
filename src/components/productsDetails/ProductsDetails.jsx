import { Pressable, Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './ProductsDetails.style'
import Counter from '../counter/Counter';

const ProductsDetais = ({ product }) => {

  return (  
    <View style={styles.container}>

      <Image
        style={styles.img}
        source={{
          uri: `${product.imagen}`
        }} />

      <Text style={styles.descriptionText}>{product.descripcion}</Text>

      <Counter title={'Cantidad'}></Counter>
      
      <Text style={styles.priceText}>PRECIO $ {product.precio}</Text>
      <Pressable onPress={() =>console.log('has agregado al carrito') }>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Agregar</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default ProductsDetais

