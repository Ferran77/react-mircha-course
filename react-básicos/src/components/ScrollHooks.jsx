import { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    console.log("Moviendo el scroll");

    const detectarScroll = () =>
      setScrollY(window.scrollY);

    window.addEventListener("scroll", detectarScroll);

    return () => { window.removeEventListener("scroll", detectarScroll) };
  });

  useEffect(() => {
    console.log("Fase de montaje");
  }, []);

  useEffect(() => {
    console.log("Fase de actualización");
  });

  useEffect(() => {
    return () => {
      console.log("Fase de desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks- useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}