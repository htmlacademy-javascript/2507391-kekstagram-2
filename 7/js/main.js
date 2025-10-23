// Импортируем всё необходимое из модулей
import { SIMILAR_NUMBER_RANDOM, DESCRIPTIONS, MESSAGES, NAMES } from './data.js';
import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

// Генератор ID для комментариев
const generateCommentId = createIdGenerator();

// Функция для создания комментария
const createComment = () => {
  const messageCount = getRandomInteger(1, 2);
  let message = '';

  const usedMessages = new Set();
  while (usedMessages.size < messageCount) {
    usedMessages.add(getRandomArrayElement(MESSAGES));
  }

  message = Array.from(usedMessages).join(' ');

  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: message,
    name: getRandomArrayElement(NAMES)
  };
};

// Функция для создания фотографии
const createPhoto = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[index] || `Фотография ${index + 1}`,
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

// Генерация данных
const similarPhotos = Array.from({length: SIMILAR_NUMBER_RANDOM}, (_, index) => createPhoto(index));

// Экспорт для использования в других частях приложения
window.generatedPhotosData = similarPhotos;

// Вывод в консоль для проверки
console.log('Сгенерированные данные фотографий:', similarPhotos);