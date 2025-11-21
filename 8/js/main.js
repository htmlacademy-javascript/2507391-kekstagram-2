// Импортируем сгенерированные данные
import { similarPhotos } from './data.js';

import './pictures.js';

// Экспорт для использования в других частях приложения
window.generatedPhotosData = similarPhotos;

// Вывод в консоль для проверки
console.log('Сгенерированные данные фотографий:', similarPhotos);