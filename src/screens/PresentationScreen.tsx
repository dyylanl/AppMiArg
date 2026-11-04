import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
  onContinue: () => void;
}

export const PresentationScreen: React.FC<Props> = ({ onContinue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a MiArg</Text>
      <Text style={styles.subtitle}>Tu plataforma centralizada en un solo lugar.</Text>

      <TouchableOpacity style={styles.button} onPress={onContinue}>
        <Text style={styles.buttonText}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#0284c7',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});