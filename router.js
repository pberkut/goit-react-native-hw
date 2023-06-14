import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Auth screens
import { LoginScreen, RegisterScreen } from './src/screens/authScreen';
// Main screens
import { HomeScreen } from './src/screens/mainScreen';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
};

const useRoute = isAuthorized => {
  if (!isAuthorized) {
    return (
      <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  }

  return <HomeScreen />;
};

export default useRoute;
