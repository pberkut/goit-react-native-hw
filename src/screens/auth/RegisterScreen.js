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

import { AddPhotoBtnIcon } from '../../utils/svgIcons';
import { Alert } from 'react-native';

const backgroundImage = require('../../assets/images/background-image.jpg');

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

    // Checked validation form
    const strongRegex = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );
    if (login.length < 3) {
      showAlert('Логін', 'Логін повинен бути більше 3 символів');
      return;
    } else if (!strongRegex.test(email)) {
      showAlert('Адреса електронної пошти', 'Введіть дійсну електрону пошту');
      return;
    } else if (password.length < 8) {
      showAlert('Пароль', 'Довжина паролю повинна бути більше 8 символів');
      return;
    }

    setIsSecurePassword(true);
    console.log(userCredentials);
    resetRegisterForm();

    navigation.navigate('Home', { userCredentials });
  };

  const resetRegisterForm = () => {
    setLogin('');
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
                  autoComplete="name"
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
                  autoComplete="email"
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
    paddingTop: 92,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  photoContainer: {
    position: 'absolute',
    top: -60,
    left: Dimensions.get('window').width * 0.5 - 60,
    flex: 1,
  },
  imagePhotoContainer: {
    flex: 1,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#f6f6f6',
    overflow: 'hidden',
  },

  userPhoto: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  photoButtonContainer: {
    position: 'absolute',
    top: 81,
    left: 107,
  },
  addBtn: {
    flex: 1,
    width: 25,
    height: 25,
    color: '#000',
  },

  formHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  formHeaderTitle: {
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: '500',
    lineHeight: 35,
    letterSpacing: 0.16,
    color: '#212121',
  },

  input: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
    height: 50,
    padding: 16,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19,
    fontSize: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e8e8e8',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    color: '#212121',
  },
  inputFocus: { backgroundColor: '#fff', borderColor: '#FF6C00' },

  registerButton: {
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: '#ff6c00',
  },
  registerTitleButton: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#fff',
  },
  loginTitleButtonAccent: {
    textDecorationLine: 'underline',
  },

  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    color: '#000',
  },
  loginTitleButton: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
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
  addAvatarBtn: {
    position: 'absolute',
    top: 20,
    left: 245,
  },
});
