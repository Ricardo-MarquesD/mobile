import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '@/components/header';

export default function FormScreen() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Form" subtitle="Preencha seus dados" />

      <View style={styles.content}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
          style={styles.input}
        />

        <Text style={styles.label}>Idade</Text>
        <TextInput
          value={idade}
          onChangeText={setIdade}
          placeholder="Digite sua idade"
          keyboardType="numeric"
          style={styles.input}
        />
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
    gap: 12,
    width: '100%',
    maxWidth: 360,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
