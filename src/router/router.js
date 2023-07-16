import { createStackNavigator } from '@react-navigation/stack';

// Auth screens
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
// Main screens
import HomeScreen from '../screens/mainScreen/HomeScreen';
import CreatePostsScreen from '../screens/mainScreen/CreatePostsScreen';
import PostsScreen from '../screens/mainScreen/PostsScreen';
import ProfileScreen from '../screens/mainScreen/ProfileScreen';
import CommentsScreen from '../screens/nestedScreens/CommentsScreen';
import MapScreen from '../screens/nestedScreens/MapScreen';

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
        options={{ title: 'Коментарі', headerTitleAlign: 'center' }}
      />
      <MainStack.Screen
        name="Map"
        component={MapScreen}
        options={{ title: 'Карта', headerTitleAlign: 'center' }}
      />
    </MainStack.Navigator>
  );
};

export default useRoute;
