import { Pressable, Image, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './ProductsDetails.style'
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';


const ProductsDetais = ({ product }) => {

  const [count, setCount] = useState(product.cantidad)

  const sumar = () => setCount(count + 1)

  const restar = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

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
        <Pressable onPress={restar}>
          <FontAwesome name="arrow-circle-left" size={50} color={Colors.two} />
        </Pressable>
        <Text style={styles.cantItem}>{count}</Text>
        <Pressable onPress={sumar}>
          <FontAwesome name="arrow-circle-right" size={50} color={Colors.two} />
        </Pressable>
      </View>
      <Text style={styles.priceText}>PRECIO $ {product.precio}</Text>
      <Pressable onPress={() => console.log('agregar al carrito')}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Agregar</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default ProductsDetais

