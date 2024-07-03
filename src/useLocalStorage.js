import { useState, useEffect } from "react";
export function useLocalStorage(initialState, key) {
  //read the date from local storage

  //the initial state can be a callback function
  //we can use this callback function to read the data back from local storage
  //the function should be a pure function without any argument

  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
// if it is null at first, react will stop it for mapping
//so we need to add a conditional statement
    if (!storedValue) return initialState;
    // because we store the data in JSON string, we need to convert it back
    return JSON.parse(storedValue);
  });

  //2. useEffect to store watched movie lists
  //run to show the watched list in APP initial render and every time watched movies updates
  useEffect(
    function () {
      //because it will run after the state has been updated
      //so instead of using [...watched, movie] we can use watched directly
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}
