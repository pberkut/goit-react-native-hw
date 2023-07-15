import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Auth screens
import { LoginScreen, RegisterScreen } from '../screens/authScreens';
// Main screens
import { HomeScreen } from '../screens/rootScreens';

// Nested screens
import { CommentsScreen, MapScreen } from '../screens/nestedScreens';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
// const MainTab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
};

/* const useRoute = isAuthorized => {
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
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
}; */

const useRoute = () => {
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
      <AuthStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default useRoute;
