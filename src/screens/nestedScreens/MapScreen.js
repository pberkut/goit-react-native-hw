import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  // const { latitude, longitude } = route.params.location.coords;
  const latitude = false;
  const longitude = false;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyles}
        initialRegion={{
          latitude: 51,
          longitude: 0.12574,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* <Marker
          coordinate={
            {
              // latitude: latitude ? latitude : '51.5085300',
              // longitude: longitude ? longitude : '0.1257400',
            }
          }
          title="Travel photo"
        /> */}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyles: {
    width: '100%',
    height: '100%',
  },
});
