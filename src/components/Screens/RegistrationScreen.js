import { useState } from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';

const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeLogin = text => setLogin(text);
  const onChangeEmail = text => setEmail(text);
  const onChangePassword = text => setPassword(text);

  return (
    <View>
      <View style={styles.photo}></View>

      <Text style={styles.title}>Registration</Text>

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
        value={email}
        onChangeText={onChangePassword}
        placeholder="Password"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 20,
  },
  input: {
    height: 50,
    margin: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e8e8e8',
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
});

export default RegistrationScreen;
