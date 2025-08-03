# RATnik - React Native + Django Photo Uploader

Полнофункциональное приложение для загрузки фотографий с мобильного устройства на Django сервер.

## 🏗 Архитектура проекта

```
RATnik/
├── RAT/                    # Django Backend
│   ├── main/              # Django приложение
│   │   ├── models.py      # Модель Photo
│   │   ├── views.py       # API endpoints
│   │   └── ...
│   ├── RAT/               # Django настройки
│   │   ├── settings.py    # Конфигурация
│   │   ├── urls.py        # URL маршруты
│   │   └── ...
│   ├── requirements.txt   # Python зависимости
│   └── manage.py         # Django CLI
└── Frontend/              # React Native Frontend
    ├── components/        # React компоненты
    │   └── PhotoUploader.js
    ├── App.js            # Основное приложение
    ├── package.json      # Node.js зависимости
    └── ...
```

## 🚀 Быстрый старт

### 1. Настройка Django Backend

```bash
cd RAT
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### 2. Настройка React Native Frontend

```bash
cd Frontend
npm install
npm start
```

## 📱 Функции приложения

### Frontend (React Native)
- 📸 Съемка фотографий камерой
- 📁 Выбор фотографий из галереи
- 🔄 Загрузка множественных изображений
- 📊 Отображение прогресса загрузки
- 🎨 Современный и красивый интерфейс
- 🔗 Интеграция с Django REST API

### Backend (Django)
- 🗄️ Модель Photo для хранения данных
- 📡 REST API endpoints
- 📁 Автоматическое сохранение файлов
- 🔍 API для просмотра загруженных фотографий
- 🌐 CORS поддержка для мобильных приложений

## 🔗 API Endpoints

### Загрузка фотографий
```
POST /api/upload/
Content-Type: multipart/form-data

Fields:
- file: изображение
- uploaded_at: дата загрузки (опционально)
- device_info: информация об устройстве (опционально)
```

### Просмотр фотографий
```
GET /api/photos/
Content-Type: application/json

Response:
{
  "photos": [...],
  "count": 10
}
```

## 🛠 Технологии

### Backend
- **Django 5.2.4** - Веб-фреймворк
- **Django REST Framework** - API
- **Django CORS Headers** - CORS поддержка
- **Pillow** - Обработка изображений

### Frontend
- **React Native** - Мобильная разработка
- **Expo** - Платформа разработки
- **Axios** - HTTP клиент
- **Expo Image Picker** - Работа с изображениями
- **Expo Media Library** - Доступ к галерее

## 📊 Модель данных

```python
class Photo(models.Model):
    file = models.ImageField(upload_to='photos/%Y/%m/%d/')
    uploaded_at = models.DateTimeField(default=timezone.now)
    device_info = models.CharField(max_length=255, blank=True)
    file_size = models.IntegerField(blank=True, null=True)
    file_name = models.CharField(max_length=255, blank=True)
```

## 🔧 Настройка

### Изменение URL сервера
В файле `Frontend/components/PhotoUploader.js`:
```javascript
const SERVER_URL = 'http://your-server:8000/api/upload/';
```

### Настройка CORS
В файле `RAT/RAT/settings.py`:
```python
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True
```

## 📱 Использование

1. Запустите Django сервер
2. Запустите React Native приложение
3. Откройте приложение на устройстве
4. Нажмите "📸 Открыть загрузчик"
5. Выберите фотографии или сделайте снимок
6. Нажмите "🚀 Загрузить на сервер"

## 🐛 Отладка

### Django
```bash
python manage.py runserver --verbosity=2
```

### React Native
```bash
npm start -- --clear
```

## 📄 Лицензия

MIT License

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch
3. Commit изменения
4. Push в branch
5. Создайте Pull Request 