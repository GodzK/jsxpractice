
import reactLogo from './assets/react.svg'
import './App.css'
function nav() {
  return (
    <div className='nav'>
      <div className='logo'>
        <img src={reactLogo}></img>
        <h3>ReactFacts</h3>
        </div>
      <ul className='nav-item'>
    <li><a href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <footer></footer>
  </div>
  )
}

export default nav