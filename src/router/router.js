import { createStackNavigator } from '@react-navigation/stack';

// Auth screens
import { LoginScreen, RegisterScreen } from '../screens/auth';
// Main screens
import { HomeScreen, CommentsScreen, MapScreen } from '../screens/main';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

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
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Map"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default useRoute;
