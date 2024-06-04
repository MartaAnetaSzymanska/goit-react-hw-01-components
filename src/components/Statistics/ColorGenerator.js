import { useState } from "react";
import { useEffect } from "react";

export function ColorGenerator() {
  const [color, setColor] = useState("");
  useEffect(() => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(hexColor);
  }, []);
  return { color, useEffect };
}
