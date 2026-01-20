import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './util.js';

// Экспортируем константы
export const SIMILAR_NUMBER_RANDOM = 25;

export const DESCRIPTIONS = [
  'Прекрасный закат на море', 'Горный пейзаж в утреннем тумане', 'Улицы старого города',
  'Цветущий сад весной', 'Архитектура современного мегаполиса', 'Лесная тропинка осенью',
  'Ночной город в огнях', 'Морской берег с белым песком', 'Горный водопад',
  'Уютное кафе в европейском стиле', 'Парк с фонтанами', 'Зимний лес после снегопада',
  'Сельский пейзаж', 'Небоскрёбы делового центра', 'Старинный замок', 'Пляж с пальмами',
  'Городской мост через реку', 'Осенний парк с жёлтыми листьями', 'Горное озеро',
  'Уличные музыканты', 'Фестиваль воздушных шаров', 'Сельский рынок', 'Причал с яхтами',
  'Городская площадь', 'Вид с высоты птичьего полёта'
];

export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

export const NAMES = ['Артём', 'Мария', 'Дмитрий', 'Анна', 'Сергей', 'Елена', 'Алексей', 'Ольга', 'Иван', 'Наталья'];

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

// Генерация данных и экспорт
export const similarPhotos = Array.from({length: SIMILAR_NUMBER_RANDOM}, (_, index) => createPhoto(index));
