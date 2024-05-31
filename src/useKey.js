import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (!e.code) return;

        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      window.addEventListener("keydown", callback);

      return function () {
        window.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
