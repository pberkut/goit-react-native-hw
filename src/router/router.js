import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Auth screens
import { LoginScreen, RegisterScreen } from '../screens/authScreens';
// Main screens
import { HomeScreen } from '../screens/rootScreens';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
// const MainTab = createBottomTabNavigator();

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

  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        options={{ headerShown: false }}
        component={HomeScreen}
        name="Home"
      />
    </MainStack.Navigator>
  );
};

export default useRoute;
