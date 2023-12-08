import React from 'react'
import ReactDOM  from "react"
import reactLogo from './assets/react.svg'
import Ronaldophoto from './img/ronal.webp'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
 
      <img src={Ronaldophoto}></img>
      <h1>Fun fact about react</h1>
      <ul className='jookroo'>
        <li>was first release 2013</li>
        <li>created by jordan walke</li>
        <li>100k star in github</li>
        <li>maintain by facebook</li>
      </ul>
    </>
  )
}

export default App
