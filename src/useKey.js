import { useEffect } from "react";
//when we want to reuse the function that contains react hooks
//  we can make them custom hooks
export function useKey(key, action) {
  // add a keypress event to listen globally
  //because this is a side effect, bascially talk to the outside world
  //so we need to use useEffect
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      //listen to the whole document
      document.addEventListener("keydown", callback);
      //clean up event listener
      //otherwise when once movieDetail show up there will be one event listener
      return function () {
        //when clean up, must use the exact name of event listener
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
