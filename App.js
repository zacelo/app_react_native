import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 
});
