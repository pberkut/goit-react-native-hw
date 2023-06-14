// import { useEffect } from 'react';
// import { View, Button, StyleSheet, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PostsScreen from '../mainScreen/PostsScreen';
import CreatePostsScreen from '../mainScreen/CreatePostsScreen';
import ProfileScreen from '../mainScreen/ProfileScreen';

import PostsIcon from '../../assets/images/posts-icon.svg';
import CreatePostIcon from '../../assets/images/create-posts-icon.svg';
import ProfileIcon from '../../assets/images/profile-icon.svg';

// const navigation = useNavigation();
const MainTab = createBottomTabNavigator();

const HomeScreen = () => {
  // useEffect(() => {
  //   navigation.navigate('Tabs', { screen: 'Posts' });
  // }, []);

  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <PostsIcon width={40} height={40} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        }}
      />
      <MainTab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: (focused, color, size) => {
            return <CreatePostIcon width={70} height={40} />;
          },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: (focused, color, size) => {
            return <ProfileIcon width={40} height={40} />;
          },
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

export default HomeScreen;
