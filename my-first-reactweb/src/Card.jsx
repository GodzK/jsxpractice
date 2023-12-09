import React from 'react'
import ronaldpic from '/picture/df.png'
import './card.css';
function Card() {
  return (
    <div className = "Card">
        <img src = {ronaldpic}></img>
        <div className ="class-stats">
         <p>⭐⭐⭐⭐⭐</p>
         <p>ronaldo CR7</p>
        </div>
        <p>life lesson by cristiano</p>
     <p>the GOAT of football</p>
    </div>
  )
}

export default Card