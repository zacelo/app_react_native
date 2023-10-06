import { FlatList, View } from 'react-native'
import React from 'react'
import { styles } from './Categories.style'
import CategoryItem from '../CategoryItem/CategoryItem'
import { useGetCategoriesQuery } from '../../services/ShopApi'

import Spinner from '../spinner/Spinner'

const Categories = ({ navigation }) => {    

    const { data, isLoading } = useGetCategoriesQuery()  
      
    return (
        <View style={styles.container}>
            {
                isLoading
                    ?
                    <Spinner></Spinner>
                    : 
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                            <CategoryItem category={{ item }} navigation={navigation}></CategoryItem>
                        }
                        keyExtractor={category => category.id}
                    />
            }
        </View>
    )
}

export default Categories

