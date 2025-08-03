import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import PhotoUploader from './components/PhotoUploader';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const renderWelcomeScreen = () => (
    <View style={styles.content}>
      <Text style={styles.title}>Добро пожаловать!</Text>
      <Text style={styles.subtitle}>RATnik Frontend</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🚀 React Native</Text>
        <Text style={styles.cardText}>
          Простое и красивое приложение создано с использованием React Native и Expo
        </Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🤖 Автоматический режим</Text>
        <Text style={styles.cardText}>
          • Автоматическое сканирование галереи{'\n'}
          • Загрузка только новых фотографий{'\n'}
          • Отправка по одной на сервер{'\n'}
          • Без участия пользователя
        </Text>
      </View>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setCurrentScreen('uploader')}
      >
        <Text style={styles.buttonText}>Далее</Text>
      </TouchableOpacity>
    </View>
  );

  const renderUploaderScreen = () => (
    <View style={styles.container}>
      <PhotoUploader />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {currentScreen === 'welcome' ? renderWelcomeScreen() : renderUploaderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#e94560',
    marginBottom: 40,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#16213e',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    width: '100%',
    maxWidth: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 16,
    color: '#a8a8a8',
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#e94560',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#e94560',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#16213e',
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#e94560',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 