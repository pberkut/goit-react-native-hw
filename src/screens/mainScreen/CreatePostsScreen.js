import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Dimensions,
  Keyboard,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
import { palette } from '../../utils/paletteVariables';
// import { savePhotoInStorage } from '../../firebase/operation';
// import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
// import { addPost } from '../../redux/posts/postsOperations';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';

const defaultImage = require('../../assets/images/nature-2.jpg');

const CreatePostsScreen = () => {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [name, setName] = useState('');
  const [locationName, setLocationName] = useState('');
  const [type, setType] = useState(CameraType.back);
  const [photo, setPhoto] = useState(null);
  const [loadedPhoto, setLoadedPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [inputNameStyle, setInputNameStyle] = useState(styles.input);
  const [inputLocationStyle, setInputLocationStyle] = useState(styles.input);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  // const [isCameraOpen, setIsCameraOpen] = useState(false);
  // const { userName, userId } = useAuth();
  //temp
  const userName = 'UserName';
  const userId = 'id123';
  // const dispatch = useDispatch();

  useEffect(() => {
    // permission to get access to camera

    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();

    // permission to get location

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }
    })();

    // add keyBoard listener

    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  if (hasPermission === null) {
    return <Text>Loading access to camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const { width, height } = Dimensions.get('window');
  const orientation = 'portrait'; // TODO

  const nameHandler = text => setName(text);
  const locationNameHandler = text => setLocationName(text);

  const deleteAndResetPost = () => {
    setName('');
    setLocationName('');
    setPhoto(null);
    setLoadedPhoto(null);
  };

  const onPublish = async () => {
    // const urlPhoto = await savePhotoInStorage(photo);
    const urlPhoto = 'url photo';

    // * create post object with all data + urlPhoto with path to fireBase
    const userPost = {
      name,
      photo,
      loadedPhoto,
      locationName,
      location,
      urlPhoto,
      commentCounter: 0,
      likeCounter: 0,
      userId,
      dateDocument: Date.now(),
      userName,
    };

    // * send post to server
    // dispatch(addPost(userPost));

    showMessage({
      message: 'Your post has been successfully added',
      type: 'success',
    });

    navigation.navigate('Posts', { ...userPost });

    deleteAndResetPost();
    // setIsCameraOpen(false);
  };

  // const handleOpenCamera = () => {
  //   setIsCameraOpen(true);
  // };

  const downloadPhoto = () => {
    // setIsCameraOpen(false);
    // setLoadedPhoto(defaultImage);
    setLoadedPhoto(() => require('../../assets/images/nature-3.jpg'));
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhoto(uri);
      console.log(uri);
    }

    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(coords);
  };

  const toggleCameraType = () => {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const isPostData = (photo && name) || (loadedPhoto && name);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            keyboardVerticalOffset={70}
            behavior={'position'}
          >
            <Camera
              style={styles.camera}
              type={type}
              ref={ref => {
                setCameraRef(ref);
              }}
            >
              {photo && (
                <View style={styles.photoWrapper}>
                  <Image
                    style={styles.photo}
                    source={{ uri: photo }}
                    alt="user last photo"
                  />
                </View>
              )}

              <TouchableOpacity
                style={styles.cameraBtn}
                activeOpacity={0.8}
                onPress={takePhoto}
              >
                <Icon name="camera" size={25} color={palette.gray} />
              </TouchableOpacity>

              <View style={styles.btnChangeCameraContainer}>
                <TouchableOpacity
                  style={styles.btnChangeCamera}
                  onPress={toggleCameraType}
                >
                  <Icon name="refresh" size={25} color={palette.gray} />
                </TouchableOpacity>
              </View>
            </Camera>

            {loadedPhoto ? (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setLoadedPhoto(null)}
              >
                <Text style={styles.editBtn}>Редагувати фото</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.6} onPress={downloadPhoto}>
                <Text style={styles.editBtn}>Завантажте фото</Text>
              </TouchableOpacity>
            )}

            <TextInput
              style={inputNameStyle}
              require
              value={name}
              onChangeText={nameHandler}
              placeholder="Назва..."
              onFocus={() =>
                setInputNameStyle({
                  ...styles.input,
                  ...styles.inputFocused,
                })
              }
              onBlur={() => setInputNameStyle(styles.input)}
            />
            <View style={styles.inputLocation}>
              <Icon
                style={styles.iconLocation}
                name="map-marker"
                size={20}
                color={palette.gray}
              />
              <TextInput
                style={inputLocationStyle}
                value={locationName}
                onChangeText={locationNameHandler}
                placeholder="Місцевість..."
                onFocus={() =>
                  setInputLocationStyle({
                    ...styles.input,
                    ...styles.inputFocused,
                  })
                }
                onBlur={() => setInputLocationStyle(styles.input)}
              />
            </View>
            {/* <View style={{ display: isKeyboardOpen ? "none" : "flex" }}> */}
            <TouchableOpacity
              style={
                !isPostData
                  ? styles.btnPublishDisabled
                  : {
                      ...styles.btnPublishDisabled,
                      backgroundColor: palette.accent,
                    }
              }
              disabled={!isPostData}
              activeOpacity={0.8}
              onPress={onPublish}
            >
              <Text style={styles.btnTitle}>Опублікувати</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={{ display: isKeyboardOpen ? 'none' : 'flex' }}>
          <TouchableOpacity
            style={styles.deleteBtn}
            activeOpacity={0.8}
            onPress={() => deleteAndResetPost()}
          >
            <Icon name="trash" size={30} color={palette.gray} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 32,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  imgContainer: {
    position: 'relative',
    marginBottom: 8,
    height: 250,
    backgroundColor: palette.gray,
    borderRadius: 16,
    overflow: 'hidden',
  },
  camera: {
    position: 'relative',
    marginBottom: 8,
    height: 250,
    backgroundColor: palette.gray,
    borderRadius: 16,
    overflow: 'hidden',
  },
  photoWrapper: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: palette.accent,
    borderRadius: 8,
  },
  photo: { width: '100%', height: '100%' },
  btnChangeCameraContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  btnChangeCamera: {},
  text: { color: palette.accent },
  img: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  editBtn: {
    fontFamily: 'Roboto-Regular',
    color: palette.gray,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
  },
  imgWrapper: {
    position: 'relative',
    marginTop: 32,
    marginBottom: 4,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: palette.gray,
  },
  cameraBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 55,
    height: 55,
    borderRadius: 40,
    backgroundColor: '#ffffff85',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -27 }, { translateY: -27 }],
  },
  deleteBtn: {
    // marginBottom: 22,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderRadius: 25,
    // backgroundColor: "#cccccc3f",
  },
  input: {
    marginTop: 16,
    paddingLeft: 26,
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: palette.gray,
  },
  inputFocused: {
    borderBottomColor: palette.accent,
  },
  inputLocation: {
    position: 'relative',
  },
  iconLocation: {
    position: 'absolute',
    top: '50%',
    left: 0,
  },
  btnPublishDisabled: {
    marginTop: 32,
    padding: 12,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.gray,
    borderRadius: 100,
  },

  btnTitle: {
    fontFamily: 'Roboto-Regular',
    color: palette.white,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});
