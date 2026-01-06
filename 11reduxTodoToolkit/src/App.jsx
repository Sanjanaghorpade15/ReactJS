import { useState } from 'react'
import './App.css'
import Todos from './Components/TodoS.jsx'
import AddTodo from './Components/addTodo.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-8">Redux Toolkit Todo App</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
