# RATnik Frontend

React Native приложение с функцией загрузки фотографий на Django сервер.

## 🚀 Функции

- 📸 Съемка фотографий камерой
- 📁 Выбор фотографий из галереи
- 🔄 Загрузка множественных изображений
- 📊 Отображение прогресса загрузки
- 🎨 Современный и красивый интерфейс
- 🔗 Интеграция с Django REST API

## 📦 Установка

1. Установите зависимости:
```bash
npm install
```

2. Настройте URL сервера в `components/PhotoUploader.js`:
```javascript
const SERVER_URL = 'http://your-django-server:8000/api/upload/';
```

3. Запустите приложение:
```bash
npm start
```

## 🎮 Доступные команды

- `npm start` - Запуск Expo сервера разработки
- `npm run android` - Запуск на Android эмуляторе
- `npm run ios` - Запуск на iOS симуляторе
- `npm run web` - Запуск в веб-браузере

## 🛠 Технологии

- **React Native** - Мобильная разработка
- **Expo** - Платформа разработки
- **Axios** - HTTP клиент
- **Expo Image Picker** - Работа с изображениями
- **Expo Media Library** - Доступ к галерее

## 📁 Структура проекта

```
Frontend/
├── App.js                    # Основной компонент приложения
├── index.js                  # Точка входа
├── components/
│   └── PhotoUploader.js     # Компонент загрузки фотографий
├── package.json              # Зависимости и скрипты
├── app.json                  # Конфигурация Expo
├── babel.config.js           # Конфигурация Babel
└── README.md                 # Документация
```

## 🔗 Интеграция с Django

Приложение отправляет фотографии на Django сервер через REST API:

- **Endpoint**: `POST /api/upload/`
- **Формат**: `multipart/form-data`
- **Поля**: `file`, `uploaded_at`, `device_info`

## 📱 Использование

1. Откройте приложение
2. Нажмите "📸 Открыть загрузчик"
3. Выберите фотографии из галереи или сделайте снимок
4. Нажмите "🚀 Загрузить на сервер"
5. Следите за прогрессом загрузки

## ⚙️ Настройка сервера

Убедитесь, что Django сервер настроен и запущен:

```bash
cd ../RAT
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
``` 