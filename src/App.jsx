import { useState } from 'react'
import Profile from './Components/profile'
import Brand from './Components/brands'
import Image from './Components/images'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Profile/>
    <Brand/>
    <Image/>
   </div>
  )
}

export default App
