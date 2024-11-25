import { useState } from "react";

export default function ExoCount(){
  const initialValue = 42;
  // const [état, fonction de maj de l'état] = useState(val par défaut);
  const [count, setCount] = useState(initialValue);

  return <>
  <button onClick={() => setCount(count + 1)}>+</button>
  {count}
  <button onClick={() => setCount(count - 1)}>-</button>
  <button onClick={() => setCount(initialValue)}>Reset</button>
  </>;
}