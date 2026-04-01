import { StyleSheet, View } from 'react-native';
import Header from '@/components/header';
import Card from '@/components/card';

export default function CardScreen() {
  return (
    <View style={styles.container}>
      <Header title="Card" subtitle="Descubra conteúdos" />

      <View style={styles.content}>
        <Card title='Card 1' description='Descrição do card 1'></Card>
        <Card title='Card 2' description='Descrição do card 2'></Card>
        <Card title='Card 3' description='Descrição do card 3'></Card>
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
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
