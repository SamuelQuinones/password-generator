//TODO: Make into a class or separate out to clean up

import type { FormInput } from "views/Form/Helper";

/**
 * uses the more secure `crypto.getRandomValues` to generate a random number with rejection sampling
 *
 * @param min minimum number in range (inclusive)
 * @param max maximum numbrt in range (inclusive)
 * @returns a random number from the range (min, max)
 */
const getRandomInteger = (min: number, max: number): number => {
  //* Create a single random number
  const byteArr = new Uint8Array(1);
  window.crypto.getRandomValues(byteArr);

  const range = max - min + 1;
  const max_range = 256;

  if (byteArr[0] >= Math.floor(max_range / range) * range) {
    return getRandomInteger(min, max);
  }

  return min + (byteArr[0] % range);
};

const _standardGeneration = (passwordLength: number, charCodes: number[]) => {
  //* randomly generated characters will go here
  const pwCharacters: string[] = [];

  //* loop as many times as is the value of passwordLength
  for (let i = 0; i < passwordLength; i++) {
    //* get the character code
    const character = charCodes[getRandomInteger(0, charCodes.length)];
    //* turn it into a string;
    pwCharacters.push(String.fromCharCode(character));
  }

  return pwCharacters.join("");
};

const _uniqueGeneration = (passwordLength: number, charCodes: number[]) => {
  //* randomly generated characters will go here
  const pwCharacters = new Set<string>();

  //* continue adding values until we have a long enough Set
  while (pwCharacters.size < passwordLength) {
    //* get the character code
    const character = charCodes[getRandomInteger(0, charCodes.length)];
    //* turn it into a string;
    pwCharacters.add(String.fromCharCode(character));
  }

  return Array.from(pwCharacters).join("");
};

/**
 * Using `high` and `low`, this function generates an array of numbers by
 * starting at `low`, and iterating until `high` is reached.
 * The number will increase by one and get pushed into the array with each iteration.
 *
 * Used to quickly fill arrays with specific numbers - like unicode numbers
 *
 * @param low starting number in array (inclusive)
 * @param high ending number in array (inclusive)
 * @returns array of numbers starting starting at `low`, and ending on `high`
 */
const arrayFromLowToHigh = (low: number, high: number) => {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

/**
 * Filters the contents of one array based on the contents of another.
 * - This filtering will only happen if a boolean value is false.
 * - Used to quickly remove specific unicode numbers
 *
 * @param baseArr the master / source array
 * @param similarArr contains elements from `baseArr` which willbe filtered out if `bool` is false
 * @param bool boolean where if true; the array remains the same, if false, `similarArr`'s elements are filtered out
 * @returns array of numbers, filtered based on `bool`
 */
const removalTest = (
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
//* ( { } [ ] ( ) / \\ ' \" ` ~ , | ; : . < > )
const AMBIGUOUS_SYMBOLS = [
  34, 39, 40, 41, 44, 46, 47, 58, 59, 60, 62, 91, 92, 93, 96, 123, 124, 125,
  126,
];

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

/**
 * Generates a password string based on form input data.
 * - uses {@link removalTest} to first check for any character exclusions.
 * - will then concatenate all of the arrays into one massive one.
 * - then uses {@link getRandomInteger} in a forloop to generate the password character characters.
 *
 * @param data the values from the submitted form
 * @returns the generated password, based on the input criteria.
 */
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
  const newLowerCase = removalTest(
    LOWERCASE_LETTERS,
    LIKE_CHARACTERS_LOWER,
    advancedSettings.includeSimilarCharacters
  );
  const newUpperCase = removalTest(
    UPPERCASE_LETTERS,
    LIKE_CHARACTERS_UPPER,
    advancedSettings.includeSimilarCharacters
  );
  const newNumbers = removalTest(
    NUMBERS,
    LIKE_NUMBERS,
    advancedSettings.includeSimilarCharacters
  );

  const newSymbols = removalTest(
    SYMBOLS,
    AMBIGUOUS_SYMBOLS,
    advancedSettings.includeAmbiguousSymbols
  );

  //* what types of characters are we using?
  if (includeLowercase) charCodes = charCodes.concat(newLowerCase);
  if (includeUppercase) charCodes = charCodes.concat(newUpperCase);
  if (includeNumbers) charCodes = charCodes.concat(newNumbers);
  if (includeSymbols) charCodes = charCodes.concat(newSymbols);

  //* Should each character be unique?
  if (advancedSettings.useDuplicateCharacters) {
    return _standardGeneration(passwordLength, charCodes);
  }
  //* need to be sure we have enough unique characters
  if (charCodes.length < passwordLength) {
    console.error(
      `A password with ${passwordLength} unique characters can not be generated, the sample pool - ${charCodes.length} - is too small. Unique condition is being ignored.`
    );
    return _standardGeneration(passwordLength, charCodes);
  }
  //* unique IS possible
  return _uniqueGeneration(passwordLength, charCodes);
};
