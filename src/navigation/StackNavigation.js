
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/home/Home'
import ScreenProducts from '../screens/products/ScreenProducts'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Inicio' component={ Home }/>
            <Stack.Screen name='Productos' component={  ScreenProducts }/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation