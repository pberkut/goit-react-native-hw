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

import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../../assets/images/background-image.jpg');

const LoginScreen = () => {
  const navigation = useNavigation();

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
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

  const onChangeEmail = text => setEmail(text);
  const onChangePassword = text => setPassword(text);

  const toggleShowPassword = () => setIsSecurePassword(prevState => !prevState);

  // Form submit
  const onSubmitLogin = () => {
    const userCredentials = { email, password };
    setIsSecurePassword(true);
    console.log(userCredentials);
    resetLoginForm();
  };

  const resetLoginForm = () => {
    setEmail('');
    setPassword('');
  };

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
            {/* Login form */}
            <View
              style={{
                ...styles.form,
                width: Dimensions.get('window').width,
                marginTop: dimensions > dimensionsHeight ? 100 : 0,
              }}
            >
              {/* Form header */}
              <View style={styles.formHeader}>
                <Text style={styles.formHeaderTitle}>Увійти</Text>
              </View>

              {/* Email input */}
              <View>
                <TextInput
                  style={focusInputStyle(emailFocus)}
                  value={email}
                  onChangeText={onChangeEmail}
                  placeholder="Адреса електронної пошти"
                  onFocus={() => {
                    setIsKeyboardOpen(true), setEmailFocus(true);
                  }}
                  onBlur={() => {
                    setEmailFocus(false);
                  }}
                />
              </View>

              {/* Password input */}
              <View
                style={{
                  marginTop: 16,
                  marginBottom: isKeyboardOpen ? 32 : 43,
                }}
              >
                <TextInput
                  style={focusInputStyle(passwordFocus)}
                  value={password}
                  onChangeText={onChangePassword}
                  placeholder="Пароль"
                  secureTextEntry={isSecurePassword}
                  onFocus={() => {
                    setIsKeyboardOpen(true), setPasswordFocus(true);
                  }}
                  onBlur={() => {
                    setPasswordFocus(false);
                  }}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.showPasswordButton}
                  onPress={toggleShowPassword}
                >
                  <Text style={styles.showPasswordTitleButton}>
                    {isSecurePassword ? 'Показати' : 'Приховати'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Buttons */}
              {!isKeyboardOpen && (
                <View
                // display={isKeyboardOpen ? 'none' : 'flex'}
                // style={{ display: isKeyboardOpen ? 'none' : 'flex' }}
                // style={[isKeyboardOpen ? styles.hidden : {}]}
                >
                  {/* Login button*/}
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.loginButton}
                    onPress={onSubmitLogin}
                  >
                    <Text style={styles.loginTitleButton}>Увійти</Text>
                  </TouchableOpacity>

                  {/* Register Button*/}
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('Register')}
                  >
                    <Text style={styles.registerTitleButton}>
                      Немає акаунту?{' '}
                      <Text style={styles.registerTitleButtonAccent}>
                        Зареєструватися
                      </Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

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

  formHeader: {
    marginBottom: 33,
    alignItems: 'center',
  },
  formHeaderTitle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.16,
    color: '#212121',
  },

  input: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
    // marginBottom: 43,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
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
  inputFocus: {
    backgroundColor: '#fff',
    borderColor: '#FF6C00',
    // marginBottom: 32,
  },

  showPasswordButton: {
    position: 'absolute',
    top: 14,
    right: 30,
  },
  showPasswordTitleButton: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    color: '#1B4371',
  },

  loginButton: {
    height: 51,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6c00',
    borderRadius: 100,
  },
  loginTitleButton: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    color: '#fff',
  },

  registerButton: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 144,
  },
  registerTitleButton: {
    fontFamily: 'Roboto',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#1B4371',
  },
  registerTitleButtonAccent: {
    textDecorationLine: 'underline',
  },

  hidden: {
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    marginBottom: 0,
    marginTop: 0,
  },
});

export default LoginScreen;
