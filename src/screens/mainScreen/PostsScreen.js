import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PostItemAddPost from '../../components/PostItemAddPost';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { palette } from '../../utils/paletteVariables';

const avatarImage = require('../../assets/images/placeholder/avatarPlaceholder.jpg');

const PostsScreen = ({ route }) => {
  const navigation = useNavigation();
  const userName = 'Peter';
  const userEmail = 'example@gmail.com';
  const [posts, setPosts] = useState([]);
  console.log('Posts', posts);

  useEffect(() => {
    if (route.params) {
      setPosts(prevState => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image style={styles.avatar} source={avatarImage} alt="user avatar" />
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
        </View>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PostItemAddPost postData={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  avatar: {
    marginRight: 8,
    width: 60,
    height: 60,
    borderRadius: 16,
    overflow: 'hidden',
  },
  userWrapper: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontFamily: 'Roboto-Bold',
    color: palette.black,
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '700',
  },
  userEmail: {
    fontFamily: 'Roboto-Regular',
    color: 'rgba(33, 33, 33, 0.8)',
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '400',
  },
  btnAddPost: {
    position: 'absolute',
    bottom: 0,
    left: '47%',
    zIndex: 1000,
    width: 60,

    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.accent,
    borderRadius: 20,
  },
});
