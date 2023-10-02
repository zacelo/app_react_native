import { Image, Pressable, Text, View, Modal } from 'react-native'
import React from 'react'
import { styles } from './ModalComponent.style'
import { useDispatch } from 'react-redux'
import { reset } from '../../features/counter/CounterSlice'


const ModalComponent = ({ modalState, setModalState,product,cant,navigation }) => {

  const dispach = useDispatch()
  
  return (
    <>
      <Modal
        animationType='slide'
        visible={modalState}
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.modalTextContainer}>
              <Text style={[styles.modalText,styles.modalTextTitle]}>Agregado al carrito</Text>
              <Text style={styles.modalText}>{cant}_ {product.nombre}</Text>
            </View>
            <Image
                        style={styles.img}
                        source={{
                            uri: `${product.imagen}`,
                        }}>
                    </Image>
            <View style={styles.modalButtonsContainer}>
              <Pressable  style={styles.modalButton} 
                 onPress={() =>{
                  navigation.navigate('Inicio') 
                  setModalState(false)
                  dispach(reset())
                }}
              >
                <Text style={styles.modalButtonText}>Seguir comprando</Text>
              </Pressable>

              <Pressable style={styles.modalButton} 
               onPress={() => {
                navigation.navigate('Carrito')
                setModalState(false)
                 dispach(reset())
              }}
              >
                <Text style={styles.modalButtonText}>Ir a carrito</Text>
              </Pressable>
            </View>
          </View>

        </View>
      </Modal>
    </>
  )
}

export default ModalComponent

