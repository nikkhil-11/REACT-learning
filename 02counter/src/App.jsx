import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './component/card'


// const arr = [
//   {
//     title: 'title1',
//     date : new Date().toDateString(),
//     description: 'jhsadjasdjahd djahdjkahkj'
//   },
//   {
//     title: 'title2',
//     date : new Date().toDateString(),
//     description: 'jhsadjasdjahd djahdjkahkj',
//     msg2: 'asgdasgdk'
//   },  {
//     title: 'title3',
//     date : new Date().toDateString(),
//     description: 'jhsadjasdjahd djahdjkahkj',
//     message: 'masg'
//   },  {
//     title: 'title 4',
//     date : new Date().toDateString(),
//     description: 'jhsadjasdjahd djahdjkahkj'
//   },  {
//     title: 'title 5',
//     date : new Date().toDateString(),
//     description: 'jhsadjasdjahd djahdjkahkj'

//   }
// ]

function App() {
  // let Counter = 15
  let [Counter , setCounter]= useState(15)

  
  const addValue = () =>{
    setCounter(Counter+1)
  }


  const removeValue = () => {
    setCounter(Counter - 1)
  }

  return (
    <>
    
    <h1>React learning</h1>
    <h2>Counter value : {Counter} </h2> 

   


     <button onClick={()=>addValue()}  disabled={Counter >= 20}>Add value</button><br />




    <button onClick={removeValue} disabled= {Counter <= 0 }>Remove value</button>
</>
)
    
}
export default App
