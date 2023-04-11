import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

const initialState = {
  email: '',
  password: '',
};

const backgroundImage = require('../../images/photo-bg.jpg');

function LoginScreen() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [state, setState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get('window').width - 16 * 2,
  );
  const [dimensionsHeight, setDimensionsHeight] = useState(
    Dimensions.get('window').height,
  );

  const [isSecurePassword, setIsSecurePassword] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const focusInputStyle = focus => {
    return focus ? { ...styles.input, ...styles.inputFocus } : styles.input;
  };

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get('window').width - 16 * 2;
      const height = Dimensions.get('window').height;

      setDimensions(width);
      setDimensionsHeight(height);
    };
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription.remove();
  });
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const keyboardHide = () => {
    setKeyboardVisible(false);
    Keyboard.dismiss();
  };

  const formSubmit = () => {
    setState(initialState);
    setIsSecurePassword(true);
    console.log(state);
  };

  const passwordShown = () => {
    isSecurePassword === true
      ? setIsSecurePassword(false)
      : setIsSecurePassword(true);
  };

  const showPasswordBtn = isSecurePassword ? 'Show' : 'Hide';

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View
        style={{
          ...styles.container,
        }}
      >
        <ImageBackground style={styles.image} source={backgroundImage}>
          <View
            style={{
              ...styles.formWrapper,
              width: dimensions + 16 * 2,
              marginTop: dimensions > dimensionsHeight ? 100 : 0,
            }}
          >
            <KeyboardAvoidingView
              behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
              <View
                style={{
                  // marginBottom: isKeyboardVisible ? -120 : 120,
                  width: dimensions,
                }}
              >
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Sign in</Text>
                </View>

                <View>
                  <TextInput
                    style={focusInputStyle(emailFocus)}
                    textAlign={'center'}
                    placeholder="Email"
                    onFocus={() => {
                      setKeyboardVisible(true), setEmailFocus(true);
                    }}
                    onBlur={() => {
                      setEmailFocus(false);
                    }}
                    value={state.email}
                    onChangeText={value =>
                      setState(prevState => ({
                        ...prevState,
                        email: value,
                      }))
                    }
                  />
                </View>
                <View style={{ marginTop: 16, marginBottom: 30 }}>
                  <TextInput
                    style={focusInputStyle(passwordFocus)}
                    textAlign={'center'}
                    placeholder="Password"
                    secureTextEntry={isSecurePassword}
                    onFocus={() => {
                      setKeyboardVisible(true), setPasswordFocus(true);
                    }}
                    onBlur={() => {
                      setPasswordFocus(false);
                    }}
                    value={state.password}
                    onChangeText={value =>
                      setState(prevState => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.passwordShowBtn}
                    onPress={passwordShown}
                  >
                    <Text style={styles.registerLinkTitle}>
                      {showPasswordBtn}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
            <View
              style={{
                width: dimensions,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  ...styles.btn,
                  display: isKeyboardVisible ? 'none' : 'flex',
                }}
                onPress={formSubmit}
              >
                <Text style={styles.btnTitle}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  ...styles.registerLink,
                  display: isKeyboardVisible ? 'none' : 'flex',
                }}
                // onPress={}
              >
                <Text style={styles.registerLinkTitle}>
                  No account? Sign up...
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  av: {
    alignItems: 'center',
  },

  formWrapper: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  input: {
    fontFamily: 'Roboto-Regular',

    color: '#BDBDBD',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    padding: 16,
    color: '#212121',
  },
  inputFocus: { backgroundColor: '#fff', borderColor: '#FF6C00' },
  btn: {
    borderRadius: 100,
    borderWidth: 1,
    height: 51,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    borderColor: 'transparent',
    paddingVertical: 10,
    // marginHorizontal: 16,
  },
  btnTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 32,
  },
  headerTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    color: '#212121',
  },
  registerLink: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 144,
  },
  registerLinkTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
    alignItems: 'center',
  },
  passwordShowBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
});

export default LoginScreen;
