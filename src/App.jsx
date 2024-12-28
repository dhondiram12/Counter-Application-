import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let countFunction = () =>{
    setCount(count => count +1 )
  }

  let resetCount= () =>{
    setCount(0);
  }
  return (
    <>
    <div>
      <h3>Simple Counter Application</h3>
      <p>Count : {count}  </p>
      <button onClick={ countFunction}>Count</button> <br /><hr />
      <button onClick={resetCount}>Reset</button>
      </div>
    </>
  )
}

export default App
