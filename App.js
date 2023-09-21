import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import fonts from './src/global/fonts';
import { NavigationContainer } from '@react-navigation/native'
import ButtonTabNavigation from './src/navigation/ButtonTabNavigation';

export default function App() {

  const [fontsJosefin] = useFonts(fonts)

  if (!fontsJosefin) {
    return null
  }

  return (
    <>
      <NavigationContainer>
        <ButtonTabNavigation />
        <StatusBar style='dark' />
      </NavigationContainer>    
    </>
  );
}

const styles = StyleSheet.create({

});
