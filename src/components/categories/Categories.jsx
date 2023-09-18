import { FlatList, View } from 'react-native'
import React from 'react'
import { styles } from './Categories.style'
import { categories } from '../../data/Categories.data'
import CategoryItem from '../CategoryItem/CategoryItem'


const Categories = ({navigation}) => {
    
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

