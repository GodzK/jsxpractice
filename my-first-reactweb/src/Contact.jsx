import React from 'react';
import './App.css';


function Contact(props) {
  return (
    <div className="card">
      <div className="contact-card">
        <img src={props.img} /> 
        <h3>{props.name}</h3>
        <p>{props.gmail}</p>
      </div>
    </div>
  );
}

export default Contact;
