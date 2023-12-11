import React from 'react';
import './App.css';


function Contact(props) {
  return (
    
    <div className="card">
      <div className="contact-card" >
        <div><img src={props.img} /> </div>
        <div><h3>{props.name}</h3></div>
        <div><p>{props.gmail}</p></div>
      </div>
    </div>
  
   
  );
}

export default Contact;
