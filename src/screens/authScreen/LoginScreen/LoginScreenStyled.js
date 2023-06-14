import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
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
