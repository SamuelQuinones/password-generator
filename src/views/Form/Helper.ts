import { KeyboardEvent as ReactKB } from "react";
import { useForm } from "react-hook-form";

type AdvancedSettings = {
  maxLength: number;
  includeSimilarCharacters: boolean;
  includeAmbiguousSymbols: boolean;
  useDuplicateCharacters: boolean;
  saveForNextTime: boolean;
};

export type FormInput = {
  passwordLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  advancedSettings: AdvancedSettings;
};

/**
 * Default Value Class Helper
 * Used to assign default class values because of how boolean compare works.
 */
function defVal<T>(defaultValue: T, value?: T) {
  if (value === undefined) return defaultValue;
  return value;
}

class AdvancedSettingsClass implements AdvancedSettings {
  maxLength: number;
  includeSimilarCharacters: boolean;
  includeAmbiguousSymbols: boolean;
  useDuplicateCharacters: boolean;
  saveForNextTime: boolean;
  constructor(ac?: Record<string, any>) {
    this.maxLength = defVal(24, ac?.maxLength);
    this.includeSimilarCharacters = defVal(false, ac?.includeSimilarCharacters);
    this.includeAmbiguousSymbols = defVal(true, ac?.includeAmbiguousSymbols);
    this.useDuplicateCharacters = defVal(false, ac?.useDuplicateCharacters);
    this.saveForNextTime = defVal(true, ac?.saveForNextTime);
  }
}

export class FormInputClass implements FormInput {
  passwordLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  advancedSettings: AdvancedSettingsClass;

  constructor(fc?: Record<string, any>) {
    this.passwordLength = defVal(6, fc?.passwordLength);
    this.includeUppercase = defVal(false, fc?.includeUppercase);
    this.includeLowercase = defVal(true, fc?.includeLowercase);
    this.includeNumbers = defVal(true, fc?.includeNumbers);
    this.includeSymbols = defVal(false, fc?.includeSymbols);
    this.advancedSettings = new AdvancedSettingsClass(fc?.advancedSettings);
  }
}

const defaults = {
  passwordLength: 6,
  includeUppercase: false,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: false,
  advancedSettings: {
    maxLength: 24,
    includeSimilarCharacters: false,
    includeAmbiguousSymbols: true,
    saveForNextTime: false,
    useDuplicateCharacters: true,
  },
};

export const GeneratorSettings = () => {
  return useForm<FormInput>({
    defaultValues: defaults,
  });
};

export const saveFormValues = (values: FormInput) => {
  const newValues = { ...values };
  newValues.advancedSettings.saveForNextTime = false;
  const s = JSON.stringify(newValues);
  localStorage.setItem("savedSettings", s);
};

export const unSaveFormValues = () => {
  localStorage.removeItem("savedSettings");
};

/**
 * Takes in a string and will try to convert that string into an object using `JSON.parse`.
 *
 * There are checks in place to ensure that the no matter the content of the input string,
 * the return value will always match the right shape
 * - has try/catch in the event the string can't be turned into an object
 * - uses a class with default values in the event that the object doesn't match the exact shape
 *
 * @param localStorageValue not-null value obtained from `localStorage`
 * @returns an object that matches the `FormInput` shape
 */
export const checkStoredValue = (localStorageValue: string): FormInput => {
  try {
    const settingsObject = JSON.parse(localStorageValue);
    return new FormInputClass(settingsObject);
  } catch (error) {
    console.log("Stored Value was not an object");
    console.log("Loading default values");
    console.log("Also Removing Stored Value");
    unSaveFormValues();
    return defaults;
  }
};

export const handleKeyDown = (e: ReactKB) => {
  switch (e.code.toLowerCase()) {
    case "enter":
      e.preventDefault();
      break;
    default:
      break;
  }
};

export const cardVariants = {
  exit: {
    opacity: 0,
    x: 50,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const textVariants = {
  exit: {
    opacity: 0,
    transition: {
      opacity: { durration: 0.3 },
    },
  },
  show: {
    opacity: 1,
  },
};

export const spring = {
  X: { type: "spring", stiffness: 700, damping: 50 },
};

export const baseVariants = {
  exit: {
    zIndex: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
  show: {
    zIndex: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
};
