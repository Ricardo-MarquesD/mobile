import { Image, StyleSheet } from 'react-native';

export function Cat() {
  return (
    <Image source={require('@/assets/images/cat.png')} style={styles.catImage} />
  );
}

const styles = StyleSheet.create({
  catImage: {
    width: 200,
    height: 200,
  },
});