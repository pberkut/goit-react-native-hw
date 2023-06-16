import { View, StyleSheet, Text } from 'react-native';
import { styles } from './CommentsScreenStyles';
import { SendIcon } from '../../../utils/svgIcons';

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState('');
  const { name } = useSelector(selectUser);
  const createComment = async () => {};
  // console.log("photo", photo);
  // console.log("route.params", route.params);
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {/* <Image
          source={{ uri: photo }}
          style={{ width: "100%", heqight: "100%" }}
        /> */}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Comment..."
          placeholderTextColor="#BDBDBD"
          style={styles.commentInput}
        />
        <TouchableOpacity
          style={styles.sendBtn}
          activeOpacity={0.7}
          onPress={() => Alert.alert('Send comment')}
        >
          <SendIcon width={34} height={34} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentsScreen;
