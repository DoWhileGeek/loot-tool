import { useState, useEffect } from "react";

const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    let currentValue: string;

    try {
      currentValue = localStorage.getItem(key) || defaultValue;
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
