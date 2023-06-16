import { useState, useEffect } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './RegisterScreenStyles';

import { AddPhotoBtnIcon } from '../../../utils/svgIcons';

const backgroundImage = require('../../../assets/images/background-image.jpg');

const RegisterScreen = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const [login, setLogin] = useState('');
  const [loginFocus, setLoginFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isSecurePassword, setIsSecurePassword] = useState(true);

  const focusInputStyle = focus => {
    return focus ? { ...styles.input, ...styles.inputFocus } : styles.input;
  };

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

  const navigation = useNavigation();

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const onChangeLogin = text => setLogin(text);
  const onChangeEmail = text => setEmail(text);
  const onChangePassword = text => setPassword(text);

  const toggleShowPassword = () => setIsSecurePassword(prevState => !prevState);

  // Form submit
  const onSubmitRegister = () => {
    const userCredentials = { login, email, password };
    setIsSecurePassword(true);
    console.log(userCredentials);
    resetRegisterForm();
  };

  const resetRegisterForm = () => {
    setLogin('');
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
            {/* Register form */}
            <View
              style={{
                ...styles.form,
                width: Dimensions.get('window').width,
                paddingBottom: isKeyboardOpen ? 20 : 32,
              }}
            >
              {/* Photo user */}
              <View style={styles.photoContainer}>
                <View style={styles.imagePhotoContainer}>
                  <Image
                    style={styles.userPhoto}
                    // source={require('../../assets/images/user-photo.jpg')}
                  />
                </View>
                {/* Add photo user button */}
                <View style={styles.photoButtonContainer}>
                  <AddPhotoBtnIcon width={25} height={25} />
                  {/* <AddPhotoImage
                    width={25}
                    height={25}
                    // onPress={() => {
                    //   Alert.alert(
                    //     'Alert',
                    //     'This functionality is under development...',
                    //   );  }
                  /> */}
                </View>
              </View>

              {/* Form header */}
              <View style={styles.formHeader}>
                <Text style={styles.formHeaderTitle}>Реєстрація</Text>
              </View>

              {/* Login input */}
              <View>
                <TextInput
                  style={focusInputStyle(loginFocus)}
                  value={login}
                  onChangeText={onChangeLogin}
                  placeholder="Логін"
                  onFocus={() => {
                    setIsKeyboardOpen(true), setLoginFocus(true);
                  }}
                  onBlur={() => {
                    setLoginFocus(false);
                  }}
                />
              </View>

              {/* Email input */}
              <View
                style={{
                  marginTop: 16,
                }}
              >
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
              <View style={{ marginTop: 16 }}>
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
                  style={{
                    marginTop: 44,
                  }}
                >
                  {/* Register button */}
                  <TouchableOpacity
                    style={{ ...styles.registerButton }}
                    activeOpacity={0.6}
                    onPress={onSubmitRegister}
                  >
                    <Text style={styles.registerTitleButton}>
                      Зареєструватися
                    </Text>
                  </TouchableOpacity>

                  {/* Login button */}
                  <TouchableOpacity
                    style={styles.loginButton}
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate('Login')}
                  >
                    <Text style={styles.loginTitleButton}>
                      Вже є акаунт?{' '}
                      <Text style={styles.loginTitleButtonAccent}>Увійти</Text>
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

export default RegisterScreen;
