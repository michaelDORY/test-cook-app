import {useEffect, useState} from "react";

const getStorageItem = (key: string, defaultValue: string | null) => {
  const item: string | null = localStorage.getItem(key);

  return item ? JSON.parse(item) : defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: string | null) => {
  const [value, setValue] = useState(() => {
    return getStorageItem(key, defaultValue);
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}