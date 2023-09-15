import { FlatList, Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './Categories.style'
import { categories } from '../../data/Categories.data'
import CategoryItem from '../CategoryItem/CategoryItem'

const Categories = () => {
    return (
        <View style={styles.container}>           
            <FlatList
                data={categories}
                renderItem={({item}) =>                 
                    <CategoryItem category={{item}}></CategoryItem>
                }
                keyExtractor={category => category.id}
            />
        </View>
    )
}

export default Categories

