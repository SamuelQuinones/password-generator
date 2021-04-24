import type { FormInput } from "views/Form/Helper";

const arrayFromLowToHigh = (low: number, high: number) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

const similarityTest = (
  baseArr: number[],
  similarArr: number[],
  bool: boolean
) => {
  return bool
    ? [...baseArr]
    : baseArr.filter((num) => !similarArr.includes(num));
};

//* I, L, O
const LIKE_CHARACTERS_UPPER = [73, 76, 79];
//* i, l, o
const LIKE_CHARACTERS_LOWER = [105, 108, 111];
//* 0, 1
const LIKE_NUMBERS = [48, 49];

// https://www.w3schools.com/charsets/ref_html_ascii.asp
/** 65 and 90 are the character codes for the uppercase letters */
const UPPERCASE_LETTERS = arrayFromLowToHigh(65, 90);
/** 97 and 122 are the character codes for the lowercase letters */
const LOWERCASE_LETTERS = arrayFromLowToHigh(97, 122);
/** digits 0 - 9 */
const NUMBERS = arrayFromLowToHigh(48, 57);

const SYMBOLS = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

export const generateRandomPW = (data: FormInput) => {
  const {
    includeLowercase,
    includeNumbers,
    includeUppercase,
    passwordLength,
    includeSymbols,
    advancedSettings,
  } = data;

  let charCodes: number[] = [];
  //* First we check to see if we should include similar looking characters or not
  const newLowerCase = similarityTest(
    LOWERCASE_LETTERS,
    LIKE_CHARACTERS_LOWER,
    advancedSettings.includeSimilarSymbols
  );
  const newUpperCase = similarityTest(
    UPPERCASE_LETTERS,
    LIKE_CHARACTERS_UPPER,
    advancedSettings.includeSimilarSymbols
  );
  const newNumbers = similarityTest(
    NUMBERS,
    LIKE_NUMBERS,
    advancedSettings.includeSimilarSymbols
  );

  //* what types of characters are we using?
  if (includeLowercase) charCodes = charCodes.concat(newLowerCase);
  if (includeUppercase) charCodes = charCodes.concat(newUpperCase);
  if (includeNumbers) charCodes = charCodes.concat(newNumbers);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOLS);

  //* randomly generated characters will go here
  const pwCharacters: string[] = [];

  //* loop as many times as is the value of passwordLength
  for (let i = 0; i < passwordLength; i++) {
    //* get the character code
    const character = charCodes[Math.floor(Math.random() * charCodes.length)];
    //* turn it into a string;
    pwCharacters.push(String.fromCharCode(character));
  }

  return pwCharacters.join("");
};
