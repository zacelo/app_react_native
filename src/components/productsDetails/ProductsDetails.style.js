import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:'87%',       
        alignSelf:'center',       
        borderColor:'black',       
       justifyContent:'space-around',
        alignItems:'center',
        
    },
    cantContainer:{        
      flexDirection:'row',      
      alignItems:'center',
      marginBottom:10,
      borderColor:Colors.one,
      borderWidth:4 ,
      width:'100%',
      paddingVertical:5,
      borderRadius:10
             
    },
    img:{
        width: '100%',
        height: '45%',                                  
    },
    descriptionText:{
      fontSize:20,
      textAlign: 'center',
      fontFamily:'JosefinItalic',
    },
    cantItem:{
        marginHorizontal:18,
        fontSize:24,
        fontFamily:'JosefinItalic'
    },
    priceText:{
        fontSize:20,
        fontFamily:'JosefinBoldItalic',       
        marginBottom:10 
     
    },
    cantText:{
       marginEnd:35
    },
    buttonContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Colors.one,
        borderRadius:15,
        paddingHorizontal:25,
        paddingVertical:10
        
    },
    buttonText:{
        fontSize:25,
        color:Colors.four,
        fontFamily:'JosefinBoldItalic',
       
       
    }
})