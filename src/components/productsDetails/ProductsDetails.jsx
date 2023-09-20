import { Pressable, Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './ProductsDetails.style'
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';

const ProductsDetais = ({ product }) => {
  return (
    <View style={styles.container}>

      <Image
        style={styles.img}
        source={{
          uri: `${product.imagen}`
        }} />

      <Text style={styles.descriptionText}>{product.descripcion}</Text>

      
      <View style={styles.cantContainer}>
        <Text style={[styles.cantItem, styles.cantText]}>Cantidad</Text>
        <FontAwesome name="arrow-circle-left" size={50} color={Colors.one} />
        <Text style={styles.cantItem}>{product.cantidad}</Text>
        <FontAwesome name="arrow-circle-right" size={50} color={Colors.one} />
      </View>
      <Text style={styles.priceText}>PRECIO $ {product.precio}</Text>
      <Pressable onPress={()=>console.log('agregar al carrito')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Agregar al </Text>
          <Entypo name="shopping-cart" size={45} color={Colors.four} />
        </View>
      </Pressable>
    </View>
  )
}

export default ProductsDetais

