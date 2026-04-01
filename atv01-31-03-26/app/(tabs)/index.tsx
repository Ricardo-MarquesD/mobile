import { StyleSheet, View } from 'react-native';
import Header from '@/components/header';
import { Cat } from '@/components/cat';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header title="Home" subtitle="Acesso rápido" />

      <View style={styles.content}>
        <Cat />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
