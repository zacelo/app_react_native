import { FlatList, View } from 'react-native'
import React from 'react'
import { styles } from './Categories.style'
import CategoryItem from '../CategoryItem/CategoryItem'
import { useSelector } from 'react-redux'


const Categories = ({ navigation }) => {

    const categories = useSelector(state => state.shop.categories)
    
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) =>
                    <CategoryItem category={{ item }} navigation={navigation}></CategoryItem>
                }
                keyExtractor={category => category.id} 
            />
        </View>
    )
}

export default Categories

