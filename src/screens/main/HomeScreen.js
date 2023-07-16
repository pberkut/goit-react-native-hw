import 'react-native-gesture-handler';
// import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { PostsScreen, CreatePostsScreen, ProfileScreen } from './';
import PostsScreen from './PostsScreen';
import CreatePostsScreen from './CreatePostsScreen';
import ProfileScreen from './ProfileScreen';

import {
  PostsIcon,
  CreatePostsIcon,
  ProfileIcon,
  LogoutIcon,
  ArrowLeftIcon,
} from '../../utils/svgIcons';

import { TouchableOpacity } from 'react-native';

const MainTabs = createBottomTabNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <MainTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyles,
        headerRightContainerStyle: styles.exitBtn,
        tabBarActiveTintColor: '#FF6C00',
      }}
    >
      <MainTabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitleStyle,
          tabBarIcon: ({ focused, color, size }) => (
            <PostsIcon color={color} width={40} height={40} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <LogoutIcon width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
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
        name="Профіль"
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
