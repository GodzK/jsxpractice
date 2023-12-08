import React from 'react'
import './App.css'
function nav() {
  return (
    <div className='nav'>
    <img src='src\img\react.png'></img>
      <ul className='nav-item'>
    <li><a href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul>
  <footer></footer>
  </div>
  )
}

export default nav