import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        width:'103%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom:155
    },
    cartContainer: {
        flexDirection: 'row',
        marginTop: 10,                
        },
    img: {
        width: 160,
        height: 180,
        borderBottomLeftRadius: 25
    },
    cartTextContainer: {
        width: '55%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.one,
        borderTopEndRadius: 25,
    },
    cartText: {
        color: 'white',
        paddingHorizontal:5
    },
    totalContainer:{
       flexDirection:'row',
       justifyContent:'center',            
    },
    totalText:{
        fontSize:30,
        fontFamily:'JosefinSemiBoldItalic',          
    }
})