/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext, createContext } from "react";

const initialContext = {
  values: {
    passwordLength: 6,
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
  },
  setters: {
    setPasswordLength: (x: number) => {},
    setIncludeUppercase: (x: boolean) => {},
    setIncludeLowercase: (x: boolean) => {},
    setIncludeNumbers: (x: boolean) => {},
    setIncludeSymbols: (x: boolean) => {},
  },
};

export const InputValues = createContext(initialContext);

export const Provider = InputValues.Provider;

export const useInputValues = () => useContext(InputValues);
