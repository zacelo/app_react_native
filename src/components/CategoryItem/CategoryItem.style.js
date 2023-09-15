import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding:3,
        backgroundColor: 'orange',
        margin:12,
        marginHorizontal:25,
        borderRadius:15,        
    },
    img:{
        width: 90,
        height:90,
        borderRadius:180,
        borderColor:'grey',
        borderWidth:5,
             
    },
    text:{
       color:'white',
       fontSize: 20,
       fontWeight: '600',
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