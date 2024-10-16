import { useState } from "react";

export default function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        The current count is: {count}
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}
