import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTitle:{
        fontSize:35,
        marginBottom:30,
        fontFamily:'JosefinSemiBoldItalic'
    },
    inputContainer: {
        backgroundColor: Colors.three,
        width: '90%',
        padding:'10%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    inputText:{
        backgroundColor:'white',
        padding:8,
        width:'100%',
        marginVertical:25,
        fontSize:20,        
        fontFamily:'JosefinSemiBoldItalic',
    },
    button:{
        backgroundColor:Colors.one,
        width:'100%',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:2,
        marginTop:30
    },
    buttonText:{
        color:Colors.four,
        fontFamily:'JosefinSemiBoldItalic',
        fontSize:25
    },
    registerContainer:{
        alignItems:'flex-end',
        width:'100%',
        marginTop:'15%'
    },
    buttonRegisterText:{
        fontSize:25,
        fontFamily:'JosefinSemiBoldItalic',
        color:Colors.two
    },
    registerText:{
        fontSize:17,
        fontFamily:'JosefinSemiBoldItalic',
    }
})