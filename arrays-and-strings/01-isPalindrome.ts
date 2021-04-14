const isPalindrome = (word: string): boolean => {
  let cleanedWord = removeChar(word, ' ').toLowerCase();
  cleanedWord = removeChar(cleanedWord.normalize("NFD"), '/[\u0300-\u036f]/g');
  let reversedString = '';
  for (let index = cleanedWord.length - 1; index > -1; index--) {
    const element = cleanedWord[index];
    if (element === ' ') continue;
    reversedString = reversedString + element;
  }
  return reversedString === cleanedWord;
}


const removeChar = (str: string, charToRemove: string): string => {
  let newWord = '';
  for (let index = 0; index < str.length; index++) {
    const currentChar = str[index];
    if (currentChar === charToRemove) continue;
    newWord = newWord + currentChar;
  }
  return newWord;
};

isPalindrome('La ruta nos aportó otro paso natural');

