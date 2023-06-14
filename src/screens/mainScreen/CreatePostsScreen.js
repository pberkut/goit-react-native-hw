import { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

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
      <View>
        <Text>Створити публікацію</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;
