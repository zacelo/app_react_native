import { StyleSheet} from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    containerProduct:{
       flex:1,
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
       marginVertical:10,
             
    },
    cardProduct:{
        
       width:'90%',
       height:190,
       marginBottom:5,       
       alignItems:'center',   
       borderRadius:18 ,
       justifyContent:'space-between',
       backgroundColor: Colors.one,
       paddingBottom: 10
    },
    img:{
        width: '100%',
        height: '60%',
        borderRadius:8 ,                           
    },
    cardText:{
       textAlign:'center',
       fontWeight:'bold',
       color: Colors.three,
       paddingTop:5
    },
    priceText:{
      fontSize:18,
      fontWeight:'bold',
      color:Colors.four,
      
    }
})