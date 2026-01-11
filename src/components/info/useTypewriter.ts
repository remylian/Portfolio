import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 16) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const id = window.setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i += 1;

      if (i >= text.length) window.clearInterval(id);
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  return displayed;
}
