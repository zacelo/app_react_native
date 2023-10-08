import { Provider } from 'react-redux';
import  store  from './src/store';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import fonts from './src/global/fonts';
import { NavigationContainer } from '@react-navigation/native'
import ButtonTabNavigation from './src/navigation/ButtonTabNavigation';
import ScreenLogin from './src/screens/screenLogin/ScreenLogin';

export default function App() {

  const [fontsJosefin] = useFonts(fonts)

  if (!fontsJosefin) {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <ButtonTabNavigation /> */}
        <ScreenLogin></ScreenLogin>
        <StatusBar style='dark' />
      </NavigationContainer>    
    </Provider>
  );
}

const styles = StyleSheet.create({

});
