import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useEffect, useState } from 'react';

import {
  CommentsIcon,
  LogoutIcon,
  MapPinIcon,
  PostsIcon,
  RemoveAvatarIcon,
  ThumbUpIcon,
} from '../../utils/svgIcons';
import { useNavigation } from '@react-navigation/native';
import { LogOut } from '../../components/LogOut';

import { useAuth } from '../../hooks/useAuth';
import { usePosts } from '../../hooks/usePosts';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../redux/posts/postsOperations';

const backgroundImage = require('../../assets/images/background-image.jpg');
const avatarImage = require('../../assets/images/placeholder/avatarPlaceholder.jpg');
const photoPlaceholder = require('../../assets/images/placeholder/imagePlaceholder.jpg');

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { userName, userId } = useAuth();
  const { userPosts } = usePosts();

  useEffect(() => {
    dispatch(getPosts(userId));
  }, []);

  return (
    <View style={styles.bgImageContainer}>
      <ImageBackground source={backgroundImage} style={styles.BgImage}>
        <View style={styles.container}>
          <View style={styles.avatar}>
            <Image style={styles.avatarImage} source={avatarImage} />
            <View style={styles.addAvatarIconContainer}>
              <TouchableOpacity
                style={{ borderRadius: 50, backgroundColor: '#fff' }}
                onPress={() => Alert.alert('Delete photo!')}
              >
                <RemoveAvatarIcon width={25} height={25} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Logout button */}
          <View style={styles.logoutContainer}>
            <LogOut styles={styles.logOutBtn} />
          </View>
          <Text style={styles.title}>{userName}</Text>
          <View style={styles.postWrapper}>
            <View style={styles.imageWrapper}>
              <Image style={styles.postImage} source={photoPlaceholder} />
            </View>
            <Text style={styles.imageTitle}>Ліс</Text>
            <View style={styles.postSocial}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Comments')}
                >
                  <CommentsIcon width={24} height={24} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 16,
                    lineHeight: 19,
                    marginLeft: 9,
                    marginRight: 27,
                  }}
                >
                  8
                </Text>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => Alert.alert('Like')}
                >
                  <ThumbUpIcon width={24} height={24} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 16,
                    lineHeight: 19,
                    marginLeft: 10,
                  }}
                >
                  153
                </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate('Map')}
                >
                  <MapPinIcon width={24} height={24} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 16,
                    lineHeight: 19,
                    marginLeft: 8,
                    textDecorationLine: 'underline',
                  }}
                >
                  Ukraine
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
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
  logOutBtn: {
    position: 'absolute',
    top: 10,
    right: 25,
  },
});
