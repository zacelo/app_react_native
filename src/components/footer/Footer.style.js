import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.one,
        height: 100,
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',        
    },
    title:{
      fontSize: 30,      
      color: 'white'
    }
})