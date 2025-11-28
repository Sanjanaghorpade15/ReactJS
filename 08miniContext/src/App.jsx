import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <div>
        <h1 className='main-heading'>ReactJS</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
