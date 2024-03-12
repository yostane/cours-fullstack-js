import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </>
  )
}

export default Counter
