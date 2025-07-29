import { useCallback, useState, type SetStateAction } from "react";

type ReturnTypes<T> = [
  T,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<SetStateAction<T>>
];

const useInput = <T>(initialValue: T, validator?: (value: T) => boolean): ReturnTypes<T> => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value }
      } = event;

      let isValid = true;

      if (typeof validator === "function") {
        isValid = validator(value as T);
      }

      if (isValid) {
        setValue(value as T);
      }
    },
    [validator]
  );

  return [value, onChange, setValue];
};

export default useInput;
