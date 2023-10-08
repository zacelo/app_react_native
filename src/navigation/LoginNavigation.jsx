import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import ScreenLogin from '../screens/screenLogin/ScreenLogin'
import ScreenRegister from '../screens/screenLogin/ScreenRegister'



const loginStack = createNativeStackNavigator()

const LoginNavigation = () => {
  return (
    
        <loginStack.Navigator screenOptions={{
          headerStyle:styles.stackNavigator,
          headerTintColor:Colors.one,
          headerTitleAlign:'center',
          headerTitleStyle:{fontFamily:'JosefinSemiBoldItalic',fontSize:25}
          }}>
            <loginStack.Screen name='Registro'  component={ ScreenRegister } />
            <loginStack.Screen name='Inicio sesión'  component={ ScreenLogin } />
           
           
        </loginStack.Navigator>
   
  )
}

export default LoginNavigation

const styles = StyleSheet.create({
  stackNavigator:{
    backgroundColor:Colors.four
  }
     
})