import logo from './logo.svg'
import './POPOSSpace.css'
import React from 'react'

function POPOSSpace({ name, address, image, hours }) {
  return (
    <div className="POPOSSpace">
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={name}
      />
      <h1>{name}</h1>
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  );
}

export default POPOSSpace;