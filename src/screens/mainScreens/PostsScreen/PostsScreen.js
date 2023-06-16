import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './PostsScreenStyles';

const avatarImage = require('../../../assets/images/userPlaceholder.png');

const PostsScreen = () => {
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
