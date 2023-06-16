import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { selectUser } from '../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
// Auth screens
import { LoginScreen, RegisterScreen } from '../screens/authScreens';
// Main screens
import { HomeScreen } from '../screens/rootScreens';
// Nested screens
import { CommentsScreen, MapScreen } from '../screens/nestedScreens';

import TabRouter from './bottomTabNavigation/bottomTabNavigation';

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

const useRoute = () => {
  const { userId } = useSelector(selectUser);
  if (!userId) {
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
        options={({ navigation, route }) => ({ headerShown: false })}
      />
      <MainStack.Screen
        name="MainTab"
        component={TabRouter}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Comments" component={CommentsScreen} />
      <MainStack.Screen name="Map" component={MapScreen} />
    </MainStack.Navigator>
  );
};

export default useRoute;
