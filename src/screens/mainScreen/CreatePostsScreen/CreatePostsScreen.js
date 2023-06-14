import { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from 'react-native';

import { styles } from './CreatePostsScreenStyled';

const CreatePostsScreen = () => {
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Text>Створити публікацію</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { CreatePostsScreen };
