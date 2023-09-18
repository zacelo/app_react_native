import { StatusBar } from 'expo-status-bar';
import {  StyleSheet } from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import Footer from './src/components/footer/Footer';
import { useFonts } from 'expo-font';
import fonts from './src/global/fonts';

export default function App() {
   
  const [ fontsJosefin ] = useFonts(fonts)

  if(!fontsJosefin){
    return null
  }

  return (
   <>
      <StackNavigation/>
      <StatusBar style='auto'/>
      <Footer></Footer>
   </>    
  );
}

const styles = StyleSheet.create({
 
});
