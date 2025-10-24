import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Componenets/Cards.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "Sanjana",
    age: 19
  }

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
      Tailwind CSS 
      </h1>
      <Cards username= "ChaiAurCode"  btn = "Click me!"/>
      <Cards username="Sanjana" btn = "Visit me!"/>
      
    </>
  )
}

export default App
