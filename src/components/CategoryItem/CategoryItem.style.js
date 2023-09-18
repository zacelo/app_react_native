import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding:3,
        backgroundColor: Colors.two,
        margin:12,
        marginHorizontal:25,
        borderRadius:15,                      
    },
    img:{
        width: 90,
        height:90,
        borderRadius:180,
        borderColor:Colors.one,
        borderWidth:6,
             
    },
    text:{
       color:'white',
       fontSize: 22,
       fontFamily:'JosefinItalic',       
       marginStart:10       
    },
    containerImag:{
        flexDirection:'row',
        alignItems:'center',
        marginStart:5
    },
    icon:{
        paddingEnd:20
    }
})