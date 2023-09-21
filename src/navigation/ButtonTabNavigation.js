import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
import HomeNavigation from "./HomeNavigation";
import Cart from "../components/cart/Cart";

const Tab = createBottomTabNavigator()


const ButtonTabNavigation = ()=> {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tienda" component={HomeNavigation}/>
            <Tab.Screen name="Carrito" component={Cart}/>
        </Tab.Navigator>
    )
}

export default ButtonTabNavigation