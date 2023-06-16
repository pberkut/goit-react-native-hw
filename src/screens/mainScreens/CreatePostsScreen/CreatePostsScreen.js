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
} from 'react-native';

import { styles } from './CreatePostsScreenStyles';
import { CameraIcon, MapPinIcon, TrashIcon } from '../../../utils/svgIcons';

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
