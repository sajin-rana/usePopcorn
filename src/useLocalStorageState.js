import { useEffect, useState } from "react";

export function useLocalStorageState(intialState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    console.log("aasas");

    return storedValue ? JSON.parse(storedValue) : intialState;
  });

  console.log("this is the new branch");

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
