# 🎓 AI-помічник ВПУ №29 м. Львова

Веб-додаток чат-бота для надання інформації про Вище професійне училище №29 м. Львова з використанням Google Gemini AI.

## ✨ Особливості

- 🤖 AI-помічник з базою знань про училище
- 🌓 Підтримка темної/світлої теми
- 📱 Адаптивний дизайн
- 💾 Збереження історії чату
- ⚙️ Налаштування AI параметрів
- 🔄 Автоматичні повторні спроби при помилках

## 🛠️ Технології

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Google Gemini AI
- Lucide React Icons

## ⚡ Швидкий старт

### Передумови
- Node.js 18+
- npm або yarn
- Google Gemini API ключ

### Установка

1. **Клонуйте репозиторій:**
   ```bash
   git clone https://github.com/your-username/project-llm.git
   cd project-llm
   ```

2. **Встановіть залежності:**
   ```bash
   npm install
   ```

3. **Налаштуйте змінні середовища:**
   ```bash
   cp .env.example .env
   ```
   Відредагуйте `.env` та додайте ваш Gemini API ключ:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Запустіть сервер розробки:**
   ```bash
   npm run dev
   ```

5. **Відкрийте браузер:** http://localhost:5173

## 🔑 Отримання API ключа

1. Перейдіть на [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Увійдіть у свій Google акаунт
3. Створіть новий API ключ
4. Скопіюйте ключ у ваш `.env` файл

### Простий режим
- Базовий чат інтерфейс в `App.tsx`
- Прямі API виклики до Gemini

### Розширений режим
- Доступ через налаштування в header
- Збереження конфігурації
- Підтримка різних моделей Gemini

## 🏗️ Збірка для продакшену

```bash
npm run build
```

Збірка буде в папці `dist/`.


## 📁 Структура проекту

```
src/
├── api/               # API сервіси
├── components/        # React компоненти  
├── config/           # Конфігурація та база знань
├── hooks/            # Кастомні хуки
├── types/            # TypeScript типи
└── styles/           # CSS файли
```

## 🙏 Подяки

- Команді React за чудовий фреймворк
- Google за Gemini AI API
- Розробникам Tailwind CSS та Vite