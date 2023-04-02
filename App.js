// import { StatusBar } from 'expo-status-bar';
import LoginScreen from './src/components/Screens/LoginScreen';
import RegistrationScreen from './src/components/Screens/RegistrationScreen';
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
  console.log('I am in debug');
}

const backgroundImage = require('./src/images/photo-bg.jpg');

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={backgroundImage} style={styles.image}>
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
});
