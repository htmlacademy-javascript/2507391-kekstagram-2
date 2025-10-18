const SIMILAR_NUMBER_RANDOM = 25;

const DESCRIPTIONS = [
  'Прекрасный закат на море', 'Горный пейзаж в утреннем тумане', 'Улицы старого города',
  'Цветущий сад весной', 'Архитектура современного мегаполиса', 'Лесная тропинка осенью',
  'Ночной город в огнях', 'Морской берег с белым песком', 'Горный водопад',
  'Уютное кафе в европейском стиле', 'Парк с фонтанами', 'Зимний лес после снегопада',
  'Сельский пейзаж', 'Небоскрёбы делового центра', 'Старинный замок', 'Пляж с пальмами',
  'Городской мост через реку', 'Осенний парк с жёлтыми листьями', 'Горное озеро',
  'Уличные музыканты', 'Фестиваль воздушных шаров', 'Сельский рынок', 'Причал с яхтами',
  'Городская площадь', 'Вид с высоты птичьего полёта'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Артём', 'Мария', 'Дмитрий', 'Анна', 'Сергей', 'Елена', 'Алексей', 'Ольга', 'Иван', 'Наталья'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastId = 0;
  return () => {
    lastId += 1;
    return lastId;
  };
};

const generateCommentId = createIdGenerator();

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

const createPhoto = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[index] || `Фотография ${index + 1}`,
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComment)
});

const similarPhotos = Array.from({length: SIMILAR_NUMBER_RANDOM}, (_, index) => createPhoto(index));

console.log(similarPhotos);