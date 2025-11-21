
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
