import { useState } from "react"


function App() {
  const [color , setColor] = useState("Black")
  return (
<>
    <div>
      <h1>SO Welcome to the Color changer</h1>
    </div>

    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-row justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button onClick={() => setColor("green")} className="outline-none px-4 bg-green-500 rounded-full text-white shadow-2xl hover:bg-green-300">GREEN</button>
              <button onClick={() => setColor("red")} className="outline-none px-4 bg-red-500  rounded-full text-white shadow-2xl hover:bg-red-300 ">RED</button>
              <button onClick={() => setColor("Purple")} className="outline-none px-4 bg-amber-600 rounded-full text-white shadow-2xl">PURPLE</button>
              <button onClick={() => setColor("blue")} className="outline-none px-4 bg-blue-400 rounded-full text-white shadow-2xl">BLUE</button>
              <button onClick={() => setColor("violet")} className="outline-none px-4  bg-violet-400 rounded-full text-white shadow-2xl">VIOLET</button>
            </div>
      </div>
    </div>
    </>
  )
}

export default App
