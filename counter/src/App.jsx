// {usestate} -> hook
import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // use of hook ->return array : 0->coutner,1->function->update counter at 0th index
  let [counter,setCounter] =  useState(5)//->default value
  // let counter = 5

  const addValue = ()=>{
    //  counter =  counter + 1
    setCounter(counter + 1)
    
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>Chai Aur React</h1>
     <h2>Counter Value : {counter}</h2>
     <button id="add" onClick={addValue}>Add value{counter}</button>
     <br/>
     <button id="remove" onClick={removeValue}>Remove Value {counter}</button>
     <p>footer : {counter}
     </p>
    </>
  )
}

export default App
