import { useState } from 'react'
import PropTypes from 'prop-types'

function Counter({ initialValue, increment }) {
  // En react, la convention est que tout ce qui comment par "use" est un hook
  const [count, setCount] = useState(initialValue)
  return (
    <>
      <p>Current count: {count}</p>
      <p>
      {count % 2 == 0 ? (<b>pair</b>) : (<i>impair</i>)}
      </p>
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
