
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ScreenHome  from '../screens/screenHome/ScreenHome'
import ScreenProducts from '../screens/screenProducts/ScreenProducts'
import ScreenDetails from '../screens/screendetails/ScreenDetails'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Inicio'    component={ ScreenHome }/>
            <Stack.Screen name='Productos' component={  ScreenProducts }/>
            <Stack.Screen name='Detalle'   component={ ScreenDetails}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation