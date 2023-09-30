import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import { styles } from './CategoryItem.style'
import Card from '../card/Card'
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import { setCategorySelected } from '../../features/shop/ShopSlice';

const CategoryItem = ({ category, navigation }) => {
    
    const dispach = useDispatch()
  
    return (
        <Pressable  onPress={()=> {            
            dispach(setCategorySelected(category.item.category))           
            navigation.navigate('Productos')}
            }>
            <Card style={styles.container}>
                <View style={styles.containerImag}>
                    <Image
                        style={styles.img}
                        source={{
                            uri: `${category.item.img}`,
                        }}>
                    </Image>
                    <Text style={styles.text}>{category.item.category}</Text>
                </View>
                <AntDesign name="caretright" size={44} color={Colors.three} style={styles.icon}/>
            </Card>
        </Pressable>
    )
}

export default CategoryItem

