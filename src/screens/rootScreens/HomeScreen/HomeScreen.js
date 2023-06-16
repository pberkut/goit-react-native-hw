// import { useEffect } from 'react';
// import { View, Button, StyleSheet, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  PostsScreen,
  CreatePostsScreen,
  ProfileScreen,
} from '../../mainScreens';

import {
  PostsIcon,
  CreatePostsIcon,
  ProfileIcon,
  LogoutIcon,
  ArrowLeftIcon,
} from '../../../utils/svgIcons';

import { styles } from './HomeScreenStyles';
import { TouchableOpacity } from 'react-native';

const MainTab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
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
            <TouchableOpacity>
              <LogoutIcon width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default HomeScreen;
