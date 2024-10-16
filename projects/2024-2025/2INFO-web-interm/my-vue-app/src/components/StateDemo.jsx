import { useState } from "react";

export default function StateDemo() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello");

  return (
    <>
      <div>
        The current count is: {count}
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(newText) => setMessage(newText)}
        />
        The current message is: {message}. Its length is {message.length}
      </div>
    </>
  );
}
