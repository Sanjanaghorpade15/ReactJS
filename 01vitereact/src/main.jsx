
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

function myApp(){
  return (
    <div>
      <h1>Custom React !</h1>
    </div>
  )
}

// const ReactElement ={
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit Google</a>
);

const anotheruser = "Chai aur react"
const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click me to visit Google',
  anotheruser
)
createRoot(document.getElementById('root')).render(
  
    //anotherElement
    reactElement
)
