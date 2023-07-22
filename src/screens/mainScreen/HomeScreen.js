import 'react-native-gesture-handler';
// import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { authLogOut } from '../../redux/auth/authOperations';

import { palette } from '../../utils/paletteVariables';

import PostsScreen from '../mainScreen/PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

import {
  PostsIcon,
  CreatePostsIcon,
  ProfileIcon,
  LogoutIcon,
  ArrowLeftIcon,
} from '../../utils/svgIcons';
import { useDispatch } from 'react-redux';
import { LogOut } from '../../components/LogOut';

const MainTabs = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <MainTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyles,
        headerRightContainerStyle: styles.exitBtn,
        tabBarActiveTintColor: palette.accent,
      }}
    >
      <MainTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: 'Публікації',
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitleStyle,
          tabBarIcon: ({ focused, color, size }) => (
            <PostsIcon color={color} width={40} height={40} />
          ),
          headerRight: () => <LogOut styles={{ marginRight: 20 }} />,
        }}
      />
      <MainTabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: 'Створити публікацію',
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
        }}
      />
      <MainTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <ProfileIcon width={40} height={40} color={color} />;
          },
        }}
      />
    </MainTabs.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  tabBarStyles: {
    paddingTop: 9,
    height: 83,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  headerTitleStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.408,
    color: '#212121',
  },
  headerLeftContainerStyle: {
    marginLeft: 16,
  },
  exitBtn: {
    paddingRight: 16,
  },

  addBtn: {
    width: 70,

    borderRadius: 20,
    backgroundColor: '#FF6C00',
  },
});
