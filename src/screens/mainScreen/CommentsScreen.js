import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { usePosts } from '../../hooks/usePosts';
import { useDispatch } from 'react-redux';
import { palette } from '../../utils/paletteVariables';
import { addComment, getComments } from '../../redux/posts/postsOperations';
import { OwnComment } from '../../components/OwnComment';

const CommentsScreen = ({ route }) => {
  const [comment, setComment] = useState('');
  const { documentId, name, urlPhoto } = route.params;
  const { userName, userId } = useAuth();
  const { allComments } = usePosts();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(documentId));
  }, []);

  const commentHandler = text => setComment(text);

  const onSendComment = () => {
    const commentObj = {
      documentId,
      userName,
      userId,
      comment,
      datePublication: Date.now(),
    };

    dispatch(addComment(commentObj));
    Keyboard.dismiss();
    setComment('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: urlPhoto }} alt={name} />

        <FlatList
          data={allComments}
          renderItem={({ item }) => <OwnComment comments={item} />}
          keyExtractor={item => item.datePublication}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={comment}
              placeholder="Comment..."
              onChangeText={commentHandler}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btnSendComment}
              onPress={onSendComment}
            >
              <Icon name="arrow-up" size={20} color={palette.accent} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  img: {
    marginTop: 32,
    marginBottom: 32,
    width: '100%',
    height: 250,
    borderRadius: 16,

    overflow: 'hidden',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    minHeight: 50,
    padding: 12,
    paddingRight: 50,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: palette.gray,
    marginBottom: 10,
    backgroundColor: palette.gray,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  btnSendComment: {
    position: 'absolute',
    top: 8,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 34,
    height: 34,
    borderRadius: 18,
    backgroundColor: palette.white,
  },
});
