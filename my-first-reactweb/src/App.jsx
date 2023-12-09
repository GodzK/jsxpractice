import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CustomNav from './Nav.jsx'; 
import CustomCard from './Card.jsx';
import './App.css';

function App() {
  return (
    <div>
      <CustomNav />
      <CustomCard/>
    </div>
  );
}

export default App;
