import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import ScreenCart from '../screens/screenCart/ScreenCart'


const cartStack = createNativeStackNavigator()

const CartNavigation = () => {
  return (
    
        <cartStack.Navigator screenOptions={{
          headerStyle:styles.stackNavigator,
          headerTintColor:Colors.one,
          headerTitleAlign:'center',
          headerTitleStyle:{fontFamily:'JosefinSemiBoldItalic',fontSize:25}
          }}>
            <cartStack.Screen name='Carrito'  component={ ScreenCart } />
            
        </cartStack.Navigator>
   
  )
}

export default CartNavigation

const styles = StyleSheet.create({
  stackNavigator:{
    backgroundColor:Colors.four
  }
     
})