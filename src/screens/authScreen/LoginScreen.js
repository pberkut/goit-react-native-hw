import { useState, useEffect, useCallback } from 'react';
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
  ActivityIndicator,
  Alert,
} from 'react-native';

const backgroundImage = require('../../assets/images/background-image.jpg');

const initialState = {
  email: '',
  password: '',
};

function LoginScreen() {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const [state, setState] = useState(initialState);

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isSecurePassword, setIsSecurePassword] = useState(true);

  const [dimensions, setDimensions] = useState(
    Dimensions.get('window').width - 16 * 2,
  );
  const [dimensionsHeight, setDimensionsHeight] = useState(
    Dimensions.get('window').height,
  );

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
        setIsKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const keyboardHide = () => {
    setIsKeyboardVisible(false);
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

  const showPasswordButton = isSecurePassword ? 'Show' : 'Hide';

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={backgroundImage}
        >
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <View
              style={{
                ...styles.form,
                width: Dimensions.get('window').width,
                marginTop: dimensions > dimensionsHeight ? 100 : 0,
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
                    setIsKeyboardVisible(true), setEmailFocus(true);
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
                    setIsKeyboardVisible(true), setPasswordFocus(true);
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
                  style={styles.passwordShowButton}
                  onPress={passwordShown}
                >
                  <Text style={styles.registerLinkTitle}>
                    {showPasswordButton}
                  </Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    ...styles.button,
                    display: isKeyboardVisible ? 'none' : 'flex',
                  }}
                  onPress={formSubmit}
                >
                  <Text style={styles.buttonTitle}>Sign in</Text>
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
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'stretch',
    flex: 1,
    justifyContent: 'flex-end',
    resizeMode: 'cover',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  form: {
    paddingTop: 32,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  header: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 32,
  },
  headerTitle: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    color: '#212121',
  },

  input: {
    marginHorizontal: 16,
    paddingHorizontal: 16,

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

  passwordShowButton: {
    position: 'absolute',
    top: 14,
    right: 30,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#1B4371',
  },

  button: {
    height: 51,
    marginHorizontal: 16,
    marginTop: 43,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6c00',
    borderRadius: 100,
  },
  buttonTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },

  registerLink: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 144,
  },
  registerLinkTitle: {
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#1B4371',
  },
});

export default LoginScreen;
