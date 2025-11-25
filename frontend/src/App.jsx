import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1 className="text-3xl font-bold underline text-blue-600">
          Hello Cookie Love!
        </h1>
      </div>
    </>
  )
}

export default App
