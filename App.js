// import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import useRoute from './router';

// Nested screens
import CommentsScreen from './src/screens/nestedScreen/CommentsScreen';
import MapScreen from './src/screens/nestedScreen/MapScreen';

// Configuration for Reactotron debugger
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
  console.log('I am in debug');
}

export default function App() {
  const routing = useRoute({});
  // Add fonts & SplashScreen
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Lora-regular': require('./src/assets/fonts/Lora/static/Lora-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // End fonts

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        {routing}
        {/* <HomeScreen /> */}
        {/* <CommentsScreen /> */}
        {/* <MapScreen /> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
