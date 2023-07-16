import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import { CameraIcon, MapPinIcon, TrashIcon } from '../../utils/svgIcons';

const CreatePostsScreen = ({ navigation }) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState('');
  const [coords, setCoords] = useState(null);
  const [title, setTitle] = useState('');
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.photoBox}>
          <Camera style={styles.camera}>
            {photo && (
              <View style={styles.previewPhotoContainer}>
                <Image
                  source={{ uri: photo }}
                  style={{ height: 100, width: 100 }}
                />
              </View>
            )}

            <TouchableOpacity style={styles.icon}>
              <CameraIcon width={24} height={24} color="#BDBDBD" />
            </TouchableOpacity>
          </Camera>
        </View>
        <Text style={styles.text}>Завантажити фото</Text>
        <View>
          <TextInput
            placeholderTextColor={'#BDBDBD'}
            placeholder="Назва..."
            style={styles.input}
            onChangeText={setTitle}
            // value={userData.name}
            // onChangeText={(value) =>
            //   setUserData((prevState) => ({ ...prevState, name: value }))
            // }
          ></TextInput>

          {/* <View style={styles.locationContainer}>
            <MapPinIcon width={24} height={24} /> */}
          <TextInput
            placeholderTextColor={'#BDBDBD'}
            placeholder="Місцевість..."
            style={styles.input}
            onChangeText={setLocationName}
            // value={userData.location}
            // onChangeText={(value) =>
            //   setUserData((prevState) => ({ ...prevState, location: value }))
            // }
          ></TextInput>
          {/* </View> */}
        </View>
        <View style={styles.tabBarWrapper}></View>
        {photo ? (
          <TouchableOpacity style={styles.buttonActive} activeOpacity={0.8}>
            <Text style={styles.buttonTextActive}>Опублікувати</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Опублікувати</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.trashBtn} activeOpacity={0.7}>
          <TrashIcon width={70} height={40} color="grey" />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  photoBox: {
    backgroundColor: '#F6F6F6',
    width: 343,
    height: 240,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: 343,
    height: 240,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 88,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
  },
  headerText: {
    marginBottom: 11,
    fontSize: 17,
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    zIndex: 1,
  },
  previewPhotoContainer: {
    position: 'absolute',
    marginTop: 32,
    marginHorizontal: 16,
  },
  previewPhoto: {
    height: 240,
    width: '100%',
    borderRadius: 8,
  },
  text: {
    color: '#BDBDBD',
  },
  input: {
    marginTop: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    paddingBottom: 8,
  },
  button: {
    marginTop: 32,
    backgroundColor: '#F6F6F6',
    height: 61,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    marginTop: 32,
    backgroundColor: '#FF6C00',
    height: 61,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#BDBDBD',
  },
  buttonTextActive: {
    color: '#fff',
  },
  trashBtn: {
    marginTop: 'auto',
    alignSelf: 'center',
  },
  locationContainer: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  locationInput: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#E8E8E8',
    marginTop: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    paddingBottom: 8,
    // flex: 1,
    // paddingTop: 10,
    // paddingRight: 10,
    // paddingBottom: 10,
    // paddingLeft: 0,
    // backgroundColor: '#fff',
    // color: '#424242',
  },
});
