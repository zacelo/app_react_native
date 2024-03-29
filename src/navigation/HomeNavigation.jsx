import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import ScreenHome  from '../screens/screenHome/ScreenHome'
import ScreenProducts from '../screens/screenProducts/ScreenProducts'
import ScreenDetails from '../screens/screendetails/ScreenDetails'
import { Colors } from '../constants/Colors'

const Stack = createNativeStackNavigator()

const HomeNavigation = () => {
  return (
    
        <Stack.Navigator screenOptions={{
          headerStyle:styles.stackNavigator,
          headerTintColor:Colors.one,
          headerTitleAlign:'center',
          headerTitleStyle:{fontFamily:'JosefinSemiBoldItalic',fontSize:25}
          }}>
            <Stack.Screen name='Inicio'    component={ ScreenHome } />
            <Stack.Screen name='Productos' component={  ScreenProducts }/>
            <Stack.Screen name='Detalle'   component={ ScreenDetails}/>
        </Stack.Navigator>
   
  )
}

export default HomeNavigation

const styles = StyleSheet.create({
  stackNavigator:{
    backgroundColor:Colors.four
  }
     
})