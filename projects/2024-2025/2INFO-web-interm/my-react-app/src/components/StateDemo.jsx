import { useState } from "react";

export default function StateDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  return (
    <>
      <div>
        The current count is: {count}
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        The current message is: {text}. Its length is: {text.length}.
      </div>
    </>
  );
}
