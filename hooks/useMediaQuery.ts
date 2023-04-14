import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [isMatch, setMatch] = useState(false);

  useEffect(() => {
    const matchQueryList = window.matchMedia(query);

    function handleChange(e: MediaQueryListEvent) {
      setMatch(e.matches);
    }

    matchQueryList.addEventListener("change", handleChange);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return isMatch;
}
