import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './PostsScreenStyles';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { db } from '../../firebase/config';
import { collection, onSnapshot } from '@firebase/firestore';

const avatarImage = require('../../../assets/images/placeholder/avatarPlaceholder.jpg');

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);
  const { userId, name, email, photoURL } = useSelector(selectUser);

  const getAllPost = async () => {
    await onSnapshot(collection(db, 'posts'), snapshots => {
      setPosts(snapshots.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
  };

  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.imgBox}>
          <Image style={styles.avatar} source={avatarImage} />
        </View>
        <View style={styles.user}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
      <FlatList
        // data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.photo }} style={styles.post} />
            <Text>{item.title}</Text>
            <View style={styles.navBtn}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CommentsScreen')}
              >
                <Text>Coments</Text>
                <Ionicons name="chatbubble-outline" size={24} color="#BDBDBD" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('MapScreen', { coords: item.coords })
                }
              >
                <Text>{item.locationName}</Text>

                <Ionicons name="location-outline" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default PostsScreen;
