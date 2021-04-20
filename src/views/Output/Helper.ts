import { createContext, useContext } from "react";

export type PW_Context = {
  generatedPW: string | undefined;
  setGeneratedPW: (str: string | undefined) => void;
};

export const GeneratorContext = createContext<PW_Context>({
  generatedPW: undefined,
  setGeneratedPW: (str) => console.log(str),
});

export const useGeneratorContext = () => useContext(GeneratorContext);
