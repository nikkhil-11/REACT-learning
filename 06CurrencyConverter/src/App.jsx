import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-700 text'>Currency converter</h1>
      <p className='bg-amber-600'>kiddan sohniyo</p>
    </>
  )
}

export default App
