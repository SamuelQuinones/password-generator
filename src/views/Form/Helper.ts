import { useForm } from "react-hook-form";

type AdvancedSettings = {
  maxLength: number;
  includeSimilarCharacters: boolean;
  includeAmbiguousSymbols: boolean;
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
class AdvancedSettingsClass implements AdvancedSettings {
  maxLength: number;
  includeSimilarCharacters: boolean;
  includeAmbiguousSymbols: boolean;
  saveForNextTime: boolean;
  constructor(arr?: Record<string, any>) {
    this.maxLength = arr?.maxLength || 24;
    this.includeSimilarCharacters = arr?.includeSimilarCharacters || false;
    this.includeAmbiguousSymbols = arr?.includeAmbiguousSymbols || true;
    this.saveForNextTime = arr?.saveForNextTime || false;
  }
}

export class FormInputClass implements FormInput {
  passwordLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  advancedSettings: AdvancedSettingsClass;

  constructor(arr?: Record<string, any>) {
    this.passwordLength = arr?.passwordLength || 6;
    this.includeUppercase = arr?.includeUppercase || false;
    this.includeLowercase = arr?.includeLowercase || true;
    this.includeNumbers = arr?.includeNumbers || true;
    this.includeSymbols = arr?.includeSymbols || false;
    this.advancedSettings = new AdvancedSettingsClass(arr?.advancedSettings);
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
