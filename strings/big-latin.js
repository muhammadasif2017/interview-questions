/*
  ----------------- Problem Statement -------------------
  Pig Latin is a way of altering English Words. The rules are as follows:
  - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
  - If a word begins with a vowel, just add way at the end.
  translatePigLatin("california") should return the string aliforniacay
  translatePigLatin("algorithm") should return the string algorithmway
*/

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + 'way';

  const consonantCharacter = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCharacter.length) + consonantCharacter + 'ay';
}

translatePigLatin("consonant");