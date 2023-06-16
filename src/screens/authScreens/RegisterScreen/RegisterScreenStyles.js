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
