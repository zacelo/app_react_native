import { Pressable, Image, Text, View  } from 'react-native'
import React, { useState } from 'react'
import { styles } from './ProductsDetails.style'
import Counter from '../counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/CartSlice';
import ModalComponent from '../modal/ModalComponent';

const ProductsDetails = ({ product,navigation }) => {

  const [modalState, setModalState] = useState(false)

  const cant = useSelector(state => state.counter.value)
  const dispach = useDispatch()

  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: `${product.imagen}`
          }} />

        <Text style={styles.descriptionText}>{product.descripcion}</Text>

        <Counter title={'Cantidad'}></Counter>

        <Text style={styles.priceText}>PRECIO $ {product.precio}</Text>
        <Pressable onPress={() => {
          setModalState(true)
          dispach(addToCart({ ...product, cantidad: cant, total: (cant * product.precio) }))          
        }
        }>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Agregar</Text>
          </View>
        </Pressable>
      </View>

      <ModalComponent modalState={modalState} setModalState={setModalState} product={product} cant={cant} navigation={navigation}></ModalComponent>

    </>
  )
}

export default ProductsDetails

