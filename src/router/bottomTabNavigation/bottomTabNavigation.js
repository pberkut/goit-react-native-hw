import { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';

import {
  PostsScreen,
  CreatePostsScreen,
  ProfileScreen,
} from '../../screens/mainScreens';

import {
  PostsIcon,
  CreatePostsIcon,
  ProfileIcon,
  LogoutIcon,
  ArrowLeftIcon,
} from '../../utils/svgIcons';
import { styles } from './bottomTabNavigationStyles';
import { TouchableOpacity } from 'react-native';

const MainTab = createBottomTabNavigator();

const TabRouter = () => {
  const dispatch = useDispatch();
  const [loggingOut, setLoggingOut] = useState(false);

  // useEffect(() => {
  //   dispatch(refresh());
  // }, [dispatch]);

  const logOut = () => dispatch(signout());

  const onLogout = () => {
    if (loggingOut) {
      logOut();
      setLoggingOut(false);
    } else {
      setLoggingOut(true);
      Alert.alert(
        'Confirm Logout',
        'Are you sure you want to log out of the app?',
        [
          { text: 'Yes', onPress: logOut },
          { text: 'NO', onPress: () => setLoggingOut(false) },
        ],
      );
    }
  };

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyles,
        headerRightContainerStyle: styles.exitBtn,
        tabBarActiveTintColor: '#FF6C00',
      }}
    >
      <MainTab.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitleStyle,
          tabBarIcon: ({ focused, color, size }) => (
            <PostsIcon color={color} width={40} height={40} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={onLogout}>
              <LogoutIcon width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitleStyle,
          tabBarIcon: ({ focused, color, size }) => {
            return <CreatePostsIcon width={70} height={40} color={color} />;
          },
          headerLeftContainerStyle: styles.headerLeftContainerStyle,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftIcon width={24} height={24} />
            </TouchableOpacity>
          ),
        })}
      />
      <MainTab.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <ProfileIcon width={40} height={40} color={color} />;
          },
        }}
      />
    </MainTab.Navigator>
  );
};

export default TabRouter;
