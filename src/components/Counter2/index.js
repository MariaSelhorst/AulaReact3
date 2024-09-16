import { useState, useContext } from "react";
import { CounterContext } from "../../context/Counter";

export default function Counter() {
  const { handleDown, handleUp } = useContext(CounterContext);
  return (
    <>
      <button onClick={handleDown}>Clique aqui</button>
      <button onClick={handleUp}>Clique aqui</button>
    </>
  );
}
