import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
  },
  userInfo: {
    flexDirection: 'row',
    marginTop: 32,
    height: 60,
    alignItems: 'center',
  },
  imgBox: {
    width: 60,
    height: 60,
    backgroundColor: '#E8E8E8',
    marginRight: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  post: {
    marginTop: 32,
    height: 240,
    width: 370,
    borderRadius: 8,
  },
  navBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
});
