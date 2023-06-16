import { StyleSheet, Text, View } from 'react-native';

import styles from './MapScreenStyles';

const MapScreen = ({ route }) => {
  const { latitude, longitude } = route.params.location.coords;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyles}
        initialRegion={{
          latitude: latitude ? latitude : '51.5085300',
          longitude: longitude ? longitude : '0.1257400',
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude ? latitude : '51.5085300',
            longitude: longitude ? longitude : '0.1257400',
          }}
          title="Travel photo"
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
