import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyles: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
