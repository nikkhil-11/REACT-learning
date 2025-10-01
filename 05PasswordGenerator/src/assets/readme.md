import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed , setNumber] = useState(false)
  const [charAllowed , setChar] = useState(false)
  const [password, setPassword] = useState("")

  const genrate = ()=>{
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx"
     
    if (numberAllowed) str += "0123456789"
    if(charAllowed) str +="!@#$%^&*_+-{}[]"    

    for(let i=1 ; i<=string.length; i++){
      let char = Math.floor(Math.random()*string.length + 1)
      pass += string.charAt(char)
    }



 console.log(pass, 'pss');
 
setPassword(pass)
  }

  

  useEffect(()=>{
    genrate()
  }, [charAllowed,numberAllowed, length])

  // const passwordGenerator = useCallback(() => {
  //   let pass = ""
  //   let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyx"
     
  //   if (numberAllowed) str += "0123456789"
  //   if(charAllowed) str +="!@#$%^&*_+-{}[]"    

  //   for(i=1 ; i<=Array.length; i++){
  //     let char = Math.floor(Math.random()*string.length + 1)
  //     pass = string.charAt(char)
  //   }


  //   return pass
  //   setLength(pass)

  // }, [length , numberAllowed , charAllowed])




  return (
    <>
      <h1 className='text-4xl font-bold text-white'>Welcome to the Random password generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input className='outline-none w-full py-1 px-3' type="text" value={password} placeholder='Password' />
        </div>
      </div>
    </>
  )
}

export default App
