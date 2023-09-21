import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:'85%',       
        alignSelf:'center',       
        borderColor:'black',       
       justifyContent:'space-around',
        alignItems:'center',
        
    },
    cantContainer:{        
      flexDirection:'row',      
      alignItems:'center',           
      width:'100%',
      paddingVertical:5,             
    },
    img:{
        width: '100%',
        height: '40%',
        marginTop:10                                  
    },
    descriptionText:{
      fontSize:19,
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
        backgroundColor: Colors.two,
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