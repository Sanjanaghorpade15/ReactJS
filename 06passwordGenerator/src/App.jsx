import { useState , useCallback, useEffect, useRef, use } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numberAllowed, setNumberAllowed] = useState("False")
  const [charAllowed, setCharAllowed] = useState("False")
  const [password, setPassword] = useState("")

  //UseRef hookix
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed === "True") str += "0123456789"
    if (charAllowed === "True") str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  } , [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current?.select()  //used to select the input field 
    passwordRef.current?.setSelectionRange(0, 4) 
    window.navigator.clipboard.writeText(password)
  }, [password])

  //useref hook
  const passwordRef = useRef(null)

  useEffect ( () => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center text-2xl font-semibold mb-6 my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='w-full py-3 px-4 bg-white text-gray-800 rounded-2xl outline-none text-lg shadow'
          placeholder='Password'
          readOnly
          ref={passwordRef}
           />
           <button 
            onClick= {copyPasswordtoClipboard}
           className='outline-none bg-blue-400 text-black px-4 py-0.3 shrink-0 '>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min = {0}
            max = {100}
            value={length}
            className='cursor-pointer'
            onChange={ (e) => {setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1' >
            <input
             type="checkbox"
             defaultChecked={numberAllowed}
             id='numberInput'
             onChange={() => {
               setNumberAllowed((prev) => ! prev);
             }} 
             />
          </div>
          <label htmlFor='numberInput'>Numbers</label>
          <div className='flex items-center gap-x-1' >
            <input
             type="checkbox"
             defaultChecked={charAllowed}
             id='characterInput'
             onChange={() => {
               setCharAllowed((prev) => ! prev);
             }} 
             />
          </div>
          <label htmlFor='characterInput'>Characters</label>
          
        </div>
      </div>
      
    </>
  )
}

export default App
