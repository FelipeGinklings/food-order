import { useCallback, useState } from 'react';

type InvalidInputs = Record<string, { message: string }>;

const useValidation = () => {
  const [inputsInvalids, setInputsInvalids] = useState<InvalidInputs>({});
  const onlyLetters = (str: string) => /\d/.test(str);
  const onlyNumbers = (str: string) => /^\d+$/.test(str);

  const clean = (name: string) => {
    setInputsInvalids((prev) => {
      const prevCopy = structuredClone(prev);
      delete prevCopy[name];
      return prevCopy;
    });
  };

  const validation = useCallback(
    (
      str: FormDataEntryValue | string,
      name: string,
      type: 'onlyLetters' | 'onlyNumbers'
    ) => {
      // Must not contain any numbers
      if (type === 'onlyLetters' && onlyLetters(str as string)) {
        setInputsInvalids((prev) => ({
          ...prev,
          [name]: { message: 'Only letters are accepted!' },
        }));
        return true;
      } else {
        clean(name);
      }
      if (type === 'onlyNumbers' && !onlyNumbers(str as string)) {
        setInputsInvalids((prev) => ({
          ...prev,
          [name]: { message: 'Only numbers are accepted!' },
        }));
        return true;
      } else {
        clean(name);
      }
    },
    []
  );

  return { inputsInvalids, validation, clean };
};

export default useValidation;
