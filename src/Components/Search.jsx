import React, { useState } from "react";

export default function Search() {
    const [isActive, setIsActive] = useState(false);

    const inputStyle = {
      color: 'white',
      border: '2px solid #FCBA28',
      borderRadius: '10px',
      padding: '15px 35px',
      background: 'transparent',
      maxWidth: '600px',
      transition: 'box-shadow 0.3s ease'
    };
  
    const inputActiveStyle = {
      boxShadow: '2px 2px 15px #8707ff inset'
    };
  
    return (
      <input
        placeholder="Type something here...."
        style={isActive ? { ...inputStyle, ...inputActiveStyle } : inputStyle}
        name="text"
        type="text"
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onMouseLeave={() => setIsActive(false)}
      />
    );
}
