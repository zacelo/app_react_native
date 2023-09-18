import { StyleSheet} from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    containerProduct:{
       flex:1,
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
       marginVertical:10       
    },
    cardProduct:{
        
       width:'85%',
       height:180,
       marginBottom:5,       
       alignItems:'center',   
       borderWidth:2,
       borderColor:Colors.one,
       justifyContent:'space-between'
      
      
    },
    img:{
        width: '100%',
        height: '60%',                            
    },
    cardText:{
       textAlign:'center',
      marginBottom:15
    }
})