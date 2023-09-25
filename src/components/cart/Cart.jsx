import { FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Cart.style'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cart = useSelector(state => state.cart)

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
                <Text style={[styles.cartText,{textAlign:'center'}]}>{item.nombre}</Text>
                <Text style={styles.cartText}>Cantidad {item.cantidad}</Text>
                <Text style={styles.cartText}>Precio $ {item.precio}</Text>
                <Text style={styles.cartText}>Total $ {item.total}</Text>
              </View>
              
            </View>
          </>
        )}
      />      
    </View>
  )
}

export default Cart


