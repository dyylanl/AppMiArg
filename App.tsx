import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'login'>('splash');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('login');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (currentScreen === 'splash') {
    return (
      <View style={styles.container}>
        <View style={styles.loadingBox}>
          <Text style={styles.text}>miArgentina</Text>
        </View>
      </View>
    );
  }

  return <LoginScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1939a3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingBox: {
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});