import { useState } from 'react'
import PropTypes from 'prop-types'

function Counter({ initialValue, increment }) {
  const [count, setCount] = useState(initialValue)
  return (
    <>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((count) => count + increment)}>+</button>
      <button onClick={() => setCount((count) => count - increment)}>-</button>
    </>
  )
}

Counter.propTypes = {
  initialValue: PropTypes.number.isRequired,
  increment: PropTypes.number.isRequired
}

export default Counter
