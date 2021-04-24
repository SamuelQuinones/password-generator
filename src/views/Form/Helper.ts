import { useForm } from "react-hook-form";

export type FormInput = {
  passwordLength: number;
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  advancedSettings: {
    maxLength: number;
    includeSimilarSymbols: boolean;
  };
};

export type FormProps = {
  onSubmit: (data: FormInput) => any;
};

export const GeneratorSettings = () => {
  return useForm<FormInput>({
    defaultValues: {
      passwordLength: 6,
      includeUppercase: false,
      includeLowercase: true,
      includeNumbers: true,
      includeSymbols: false,
      advancedSettings: {
        maxLength: 24,
        includeSimilarSymbols: false,
      },
    },
  });
};
