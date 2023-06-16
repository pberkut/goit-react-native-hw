import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useEffect, useState } from 'react';

import { styles } from './ProfileScreenStyles';
import {
  CommentsIcon,
  LogoutIcon,
  MapPinIcon,
  PostsIcon,
  RemoveAvatarIcon,
  ThumbUpIcon,
} from '../../../utils/svgIcons';

const backgroundImage = require('../../../assets/images/background-image.jpg');
const avatarImage = require('../../../assets/images/placeholder/avatarPlaceholder.jpg');
const photoPlaceholder = require('../../../assets/images/placeholder/imagePlaceholder.jpg');

const ProfileScreen = () => {
  const [loggingOut, setLoggingOut] = useState(false);

  const onLogout = () => {
    if (loggingOut) {
      logOut();
      // setLoggingOut(false);
    } else {
      // setLoggingOut(true);
      Alert.alert(
        'Confirm Logout',
        'Are you sure you want to log out of the app?',
        [
          { text: 'Yes', onPress: logOut },
          { text: 'NO', onPress: () => setLoggingOut(false) },
        ],
      );
    }
  };
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
          <View style={styles.logoutContainer}>
            <TouchableOpacity onPress={onLogout}>
              <View style={{ marginRight: 10 }}>
                <LogoutIcon width={24} height={24} />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Natali Romanova</Text>
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
