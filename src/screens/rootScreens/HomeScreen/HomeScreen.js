// import { useEffect } from 'react';
// import { View, Button, StyleSheet, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { React, useEffect } from 'react';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.navigate('MainTab', { screen: 'Posts' });
  }, []);

  return null;
};

export default HomeScreen;
