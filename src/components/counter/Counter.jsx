import { Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Counter.styles'
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../../features/counter/CounterSlice';

const Counter = ({ title }) => {

    const count = useSelector(state => state.counter.value)
    const dispach = useDispatch()

    return (
        <View style={styles.container}>
            <View style={styles.countContainer}>
                <Text style={[styles.countItem, styles.countText]}>{title}</Text>
                <Pressable onPress={()=>dispach(decrement())}>
                    <FontAwesome name="arrow-circle-left" size={50} color={Colors.two} />
                </Pressable>
                <Text style={styles.countItem}>{count}</Text>
                <Pressable onPress={()=>dispach(increment())}>
                    <FontAwesome name="arrow-circle-right" size={50} color={Colors.two} />
                </Pressable>
            </View>
        </View>
    )
}

export default Counter

