import { FlatList, Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Cart.style'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesome5 } from '@expo/vector-icons';
import { deleteToCart } from '../../features/cart/CartSlice';

const Cart = () => {

  const cart = useSelector(state => state.cart)
  const dispach = useDispatch()
  return (
    <View style={styles.container}>

      <FlatList
        data={cart}
        key={cart.id}
        renderItem={({ item }) => (
          <>
            <View style={styles.cartContainer}>
              <View>
                <Image
                  style={styles.img}
                  source={{
                    uri: `${item.imagen}`,
                  }}
                />
              </View>
              <View style={styles.cartTextContainer}>
                <Text style={[styles.cartText, { textAlign: 'center' }]}>{item.nombre}</Text>
                <Text style={styles.cartText}>Cantidad    {item.cantidad}</Text>
                <Text style={styles.cartText}>Precio $ {item.precio}</Text>
                <Text style={styles.cartText}>Total $ {item.total}</Text>
                <Pressable onPress={()=> dispach(deleteToCart(item.id))}>
                  <FontAwesome5 name="trash-alt" size={34} color="red" />
                </Pressable>

              </View>

            </View>
          </>
        )}
      />
    </View>
  )
}

export default Cart


