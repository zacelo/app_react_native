import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import Home from './src/screens/home/Home';
import { Colors } from './src/constants/Colors'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Home></Home>
      <StatusBar style='light'/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
});
