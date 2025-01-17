import { useState } from 'react'
import './App.css'
// src/index.js or src/main.jsx
import './index.css';  // Make sure this line is present


function App() {
  const [counter, setCount] = useState(0)
  const addValue = () => {
    if (counter <= 19) {
      setCount(counter + 1)
    }
  }
  const removeValue = () => {
    if (counter > 1) {
      setCount(counter - 1)
    }
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 bg-red-300 min-h-screen">
  <div className="bg-white p-4 rounded-lg shadow-xl w-80 h-80 flex flex-col items-center justify-center">
  <h1 className="text-3xl font-bold text-black mb-6 uppercase">Count App</h1>
  
    <p className="text-4xl text-bold text-black">{counter}</p>
  <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 my-4">
    
   
    <button
      onClick={removeValue}
      className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-700 transition duration-300 flex items-center space-x-2"
    >
      <span className="hidden sm:block">minus</span>
    </button>
    
  <button onClick={reset} className='bg-gray-300 text-black rounded-md font-bold p-2 px-4'>Reset</button>

    <button
      onClick={addValue}
      className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300 flex items-center space-x-2"
    >
      <span className="hidden sm:block">plus</span>
    </button>
  </div>
  </div>
</div>

    </>
  )
}

export default App