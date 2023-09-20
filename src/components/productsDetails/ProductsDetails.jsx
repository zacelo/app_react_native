import { Button, Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './ProductsDetails.style'
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

const ProductsDetais = ({ product }) => {
  return (
    <View style={styles.container}>
      
      <Image
        style={styles.img}
        source={{
          uri: `${product.imagen}`
        }} />

      <Text>{product.descripcion}</Text>
      <Text>$ {product.precio}</Text>
      <Text>Cantidad</Text>
      <View style={styles.cantContainer}>
        <FontAwesome name="arrow-circle-left" size={35} color= {Colors.one} />
        <Text>{product.cantidad}</Text>
        <FontAwesome name="arrow-circle-right" size={35} color= {Colors.one} />
      </View>
      <Button title='Agregar al carrito'></Button>
    </View>
  )
}

export default ProductsDetais

