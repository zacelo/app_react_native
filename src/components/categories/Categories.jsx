import { FlatList, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './Categories.style'
import CategoryItem from '../CategoryItem/CategoryItem'
import { useGetCategoriesQuery } from '../../services/ShopApi'
import { Colors } from '../../constants/Colors'

const Categories = ({ navigation }) => {    

    const { data, isLoading } = useGetCategoriesQuery()    
    return (
        <View style={styles.container}>
            {
                isLoading
                    ?
                    <View style={styles.spinnerContainer}>
                        <ActivityIndicator size={180} color={Colors.one}/>
                    </View>
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

