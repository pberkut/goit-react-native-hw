import { View, StyleSheet, Text } from 'react-native';

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Comments screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CommentsScreen;
