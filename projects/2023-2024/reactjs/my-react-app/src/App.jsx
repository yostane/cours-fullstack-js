import './App.css'
import Counter from './components/Counter'
import Hello from './components/Hello'
import Header from './components/Header'
import { useState } from 'react'

function App() {
  const [increment, setIncrement] = useState(1);
  return (
    <>
      <Header />
      <Hello />
      <input value={increment} 
      onChange={e => setIncrement(+e.target.value)} 
      required />
      <Counter initialValue={10} increment={increment} />
      <Counter initialValue={-30} increment={1} />
      <div>Cours de react</div>
    </>
  )
}

export default App
