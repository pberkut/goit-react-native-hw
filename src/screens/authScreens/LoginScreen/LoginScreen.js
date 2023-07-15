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

import { styles } from './LoginScreenStyles';

const backgroundImage = require('../../../assets/images/background-image.jpg');

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

    // Checked validation form

    /*     const strongRegex = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );

    if (!strongRegex.test(email)) {
      showAlert('Адреса електронної пошти', 'Введіть дійсну електрону пошту');
      return;
    } else if (password.length < 8) {
      showAlert('Пароль', 'Довжина паролю повинна бути більше 8 символів');
      return;
    } */

    setIsSecurePassword(true);
    console.log(userCredentials);
    resetLoginForm();

    navigation.navigate('Home', { userCredentials });
  };

  const resetLoginForm = () => {
    setEmail('');
    setPassword('');
  };

  const showAlert = (title, message) => {
    Alert.alert(title, message, [{ text: 'Ok' }], {
      cancelable: true,
    });
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
                  autoComplete="email"
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
                  autoComplete="password"
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

export default LoginScreen;
