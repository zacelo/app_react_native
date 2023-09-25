import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeNavigation from "./HomeNavigation";
import { Colors } from "../constants/Colors";
import { FontAwesome5 } from '@expo/vector-icons';
import ScreenCart from "../screens/screenCart/ScreenCart";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator()


const ButtonTabNavigation = () => {
    const cart = useSelector(state => state.cart)

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar, tabBarShowLabel: false }}>
            <Tab.Screen
                name="Tienda"
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <FontAwesome5 name="shopping-bag" size={35} color={focused ? Colors.four : Colors.two} />
                            <Text style={[styles.tabBarText, { color: focused ? Colors.four : Colors.two }]}> Tienda</Text>
                        </>

                    )
                }
                }
            />
            <Tab.Screen
                name="Carrito"
                component={ScreenCart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <View style={styles.tabBarContainerCart}>
                                <FontAwesome5 name="shopping-cart" size={35} color={focused ? Colors.four : Colors.two} />
                                <Text style={[styles.tabBarText, { color: focused ? Colors.four : Colors.two }]}> {cart.length != 0  && cart.length}</Text>
                            </View>
                            <Text style={[styles.tabBarText, { color: focused ? Colors.four : Colors.two }]}> Carrito</Text>
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
    tabBarText: {
        fontFamily: 'JosefinItalic',
        fontSize: 19
    },
    tabBarContainerCart:{
        flexDirection:'row',        
    }
})