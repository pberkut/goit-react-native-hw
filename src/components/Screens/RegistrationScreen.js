import { useState } from 'react';
import { TextInput } from 'react-native';
import {
  StyleSheet,
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeLogin = text => setLogin(text);
  const onChangeEmail = text => setEmail(text);
  const onChangePassword = text => setPassword(text);

  return (
    <View style={styles.container}>
      <View style={styles.photo}></View>

      <Text style={styles.title}>Registration</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            value={login}
            onChangeText={onChangeLogin}
            placeholder="Login"
          />

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={onChangeEmail}
            placeholder="Email"
          />

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
      </KeyboardAvoidingView>

      <Button
        style={styles.registrationButton}
        title={'Registration'}
        color="#ff6c00"
        accessibilityLabel="Registration new account"
      />

      <Button
        style={styles.loginButton}
        title={'Already have an account? Login ->'}
        color="transparent"
        accessibilityLabel="Login to exists account"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 375,
    borderWidth: 1,
    borderStyle: 'solid',
    // borderRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // borderTopEndRadius: 25,
    // borderTopStartRadius: 25,
    backgroundColor: '#fff',
  },
  photo: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  title: {
    margin: 32,
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.01,
    color: '#212121',
  },
  form: {},
  input: {
    height: 50,
    margin: 16,
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
    marginHorizontal: 16,
  },
  registrationButton: {
    // height: 51,
    // borderRadius: 100,
    // backgroundColor: '#ff6c00',
  },
  loginButton: {
    // width: 200,
    // height: 44,
    // padding: 10,
    // borderWidth: 1,
    // borderColor: 'black',
    // marginBottom: 10,
    // marginHorizontal: 16,
    color: '#000',
  },
});

export default RegistrationScreen;
