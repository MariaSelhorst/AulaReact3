import { useContext } from "react";
import { CounterContext } from "../../context/Counter";

export default function Numbers() {
  const { num } = useContext(CounterContext);
  return <>{num}</>;
}
