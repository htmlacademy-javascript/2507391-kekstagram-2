
// Экспортируем функции для проверки строк
export function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

export function isPalindrome(str) {
  const normaLizedStr = str.replaceAll(' ', '').toLowerCase();
  let reversedStr = '';

  for (let i = normaLizedStr.length - 1; i >= 0; i--) {
    reversedStr += normaLizedStr[i];
  }

  return normaLizedStr === reversedStr;
}

// Тестирование функций (можно оставить или убрать)
console.log(checkStringLength('проверяемая строка', 20)); // true
console.log(checkStringLength('проверяемая строка', 18)); // true
console.log(checkStringLength('проверяемая строка', 10)); // false

console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс')); // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true