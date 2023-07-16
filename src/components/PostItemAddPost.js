import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { palette } from '../utils/paletteVariables';
import { useState } from 'react';
import { useEffect } from 'react';

// ! Main CODE

const PostItemAddPost = ({ postData, navigation }) => {
  const { urlPhoto, name, locationName, location, documentId, photo } =
    postData;
  const userId = '1212';
  const likes = 12;

  const [allComments, setAllComments] = useState(0);
  const [numberLikes, setNumberLikes] = useState(0);
  const [like, setLike] = useState(false);

  const onToggleLike = () => {
    const LikeObj = {
      userId,
      documentId,
      like: !like,
    };

    setLike(prev => !prev);
    setNumberLikes(prev => {
      if (like) {
        return (prev -= 1);
      }
      return (prev += 1);
    });
  };

  return (
    <View style={styles.postWrapper}>
      <Image style={styles.img} source={{ uri: photo }} alt={name} />

      <Text style={styles.postTitle}>{name}</Text>
      <View style={styles.postInfo}>
        <View style={styles.postValues}>
          <TouchableOpacity
            style={styles.postValues}
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate({
                name: 'Comments',
                params: { name, urlPhoto, documentId },
                merge: true,
              })
            }
          >
            <Icon name="comment" size={18} color={palette.gray} />
            <Text style={styles.postValuesText}>{allComments}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.postValues, marginLeft: 24 }}
            onPress={onToggleLike}
          >
            {like ? (
              <Icon name="thumbs-up" size={18} color={palette.accent} />
            ) : (
              <Icon name="thumbs-o-up" size={18} color={palette.accent} />
            )}

            <Text style={styles.postValuesText}>{numberLikes}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.postValues}
          activeOpacity={0.6}
          onPress={() =>
            navigation.navigate({
              name: 'Map',
              params: { location },
              merge: true,
            })
          }
        >
          <Icon name="map-marker" size={18} color={palette.gray} />
          <Text style={styles.postValuesText}>{locationName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostItemAddPost;

const styles = StyleSheet.create({
  postWrapper: {
    width: '100%',
    marginBottom: 32,
  },
  img: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: palette.accent,
  },
  postTitle: {
    marginTop: 8,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: palette.black,
  },
  postInfo: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postValues: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postValuesText: {
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 19,
    color: palette.black,
  },
  postValuesWrapper: {
    flexDirection: 'row',
  },
});
