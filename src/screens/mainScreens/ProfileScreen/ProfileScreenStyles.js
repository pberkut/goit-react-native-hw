import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  bgImageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  BgImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatar: {
    position: 'absolute',
    backgroundColor: '#F6F6F6',
    width: 120,
    height: 120,
    borderRadius: 16,
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],
  },
  avatarImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  addAvatarIconContainer: {
    position: 'absolute',
    top: 81,
    left: 107,
  },
  logoutContainer: {
    position: 'absolute',
    right: 16,
    top: 22,
  },
  title: {
    paddingTop: 92,
    marginBottom: 33,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
  },
  imageWrapper: {
    width: Dimensions.get('window').width * 0.91,
    height: 240,
    marginHorizontal: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
  },
  imageTitle: {
    marginHorizontal: 16,
    marginTop: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 19,
  },
  postImage: {
    width: 343,
    height: 240,
  },
  postSocial: {
    marginTop: 11,
    marginBottom: 35,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
