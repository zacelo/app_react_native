import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet , View} from 'react-native';
import Home from './src/screens/home/Home';
import { Colors } from './src/constants/Colors'
import StackNavigation from './src/navigation/StackNavigation';

export default function App() {
  return (
   <>
    <StackNavigation/>
      <StatusBar style='auto'/>
   </>
     
    
  );
}

const styles = StyleSheet.create({
 
});
