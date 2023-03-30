import { useState } from 'react';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';

const addBtn = require('../../images/addButton.svg');
const removeBtn = require('../../images/removeButton.svg');

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeLogin = text => setLogin(text);
  const onChangeEmail = text => setEmail(text);
  const onChangePassword = text => setPassword(text);

  const toggleIsShowKeyboard = () => {
    setIsShowKeyboard(prevState => !prevState);
  };

  const onRegistration = () => {
    Keyboard.dismiss();
    console.log({ login, email, password });
    resetForm();
  };

  const resetForm = () => {
    setLogin('');
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.photo}></View>
        <TouchableOpacity style={styles.addBtn}>
          <Image source={addBtn} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Registration</Text>

      <View
        style={{ ...styles.form, marginBottom: isShowKeyboard ? -130 : 50 }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <View>
            <TextInput
              style={styles.input}
              value={login}
              onChangeText={onChangeLogin}
              placeholder="Login"
              onFocus={toggleIsShowKeyboard}
              onBlur={toggleIsShowKeyboard}
            />
          </View>

          <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={onChangeEmail}
              placeholder="Email"
              onFocus={toggleIsShowKeyboard}
              onBlur={toggleIsShowKeyboard}
            />
          </View>

          <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={onChangePassword}
              secureTextEntry={true}
              placeholder="Password"
            />
          </View>
        </KeyboardAvoidingView>

        <View style={{ marginTop: 44 }}>
          <TouchableOpacity
            style={styles.registrationBtn}
            activeOpacity={0.8}
            onPress={onRegistration}
          >
            <Text style={styles.registrationTitleBtn}>Registration</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn} activeOpacity={0.8}>
            <Text style={styles.loginTitleBtn}>
              Already have an account? Sign in...
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  photo: {
    position: 'absolute',
    top: -60,
    left: 138,
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  addBtn: {
    flex: 1,
    width: 25,
    height: 25,
    color: '#000',
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    height: 50,
    padding: 16,
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
  registrationBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    backgroundColor: '#ff6c00',
  },
  registrationTitleBtn: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#fff',
  },

  loginBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 100,
    color: '#000',
  },
  loginTitleBtn: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});

export default RegistrationScreen;
