// import { useEffect } from 'react';
// import { View, Button, StyleSheet, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PostsScreen, CreatePostsScreen, ProfileScreen } from '../';

import {
  PostsIcon,
  CreatePostsIcon,
  ProfileIcon,
} from '../../../utils/svgIcons';

import { styles } from './HomeScreenStyled';

// const navigation = useNavigation();
const MainTab = createBottomTabNavigator();

const HomeScreen = () => {
  // useEffect(() => {
  //   navigation.navigate('Tabs', { screen: 'Posts' });
  // }, []);

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyles,
        tabBarActiveTintColor: '#FF6C00',
      }}
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <PostsIcon color={color} width={40} height={40} />;
          },
          // tabBarActiveTintColor: 'red',
          // tabBarInactiveTintColor: 'white',
        }}
      />
      <MainTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <CreatePostsIcon width={70} height={40} color={color} />;
          },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <ProfileIcon width={40} height={40} color={color} />;
          },
          // tabBarActiveTintColor: 'red',
          // tabBarInactiveTintColor: 'white',
        }}
      />
    </MainTab.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export { HomeScreen };
