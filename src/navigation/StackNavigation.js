
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Home from '../screens/home/Home'
import Products from '../screens/products/Products'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={ Home }/>
            <Stack.Screen name='Productos' component={ Products }/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation