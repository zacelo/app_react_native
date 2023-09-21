import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import HomeNavigation from "./HomeNavigation";
import Cart from "../components/cart/Cart";
import { Colors } from "../constants/Colors";
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()


const ButtonTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false,  tabBarStyle: styles.tabBar, tabBarShowLabel:false}}>
            <Tab.Screen
                name="Tienda"
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                         <FontAwesome5 name="shopping-bag" size={35} color={focused ? Colors.four : Colors.two} />
                         <Text style={[styles.tabBaraText,{color:focused ? Colors.four : Colors.two}]}> Tienda</Text>
                        </>
                       
                    )
                }
            }
                 />
            <Tab.Screen 
            name="Carrito" 
            component={Cart}
            options={{
                tabBarIcon: ({ focused }) => (
                    <>
                    <FontAwesome5 name="shopping-cart" size={35} color={focused ? Colors.four : Colors.two} />
                    <Text style={[styles.tabBaraText,{color:focused ? Colors.four : Colors.two}]}> Carrito</Text>
                    </>
                    
                )
            }}
            />
        </Tab.Navigator>
    )
}

export default ButtonTabNavigation

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: Colors.one,
        height: 90,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,                
    },
    tabBaraText:{
       fontFamily:'JosefinItalic',
       fontSize:19
    }
})